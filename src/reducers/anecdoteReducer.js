import anecdoteService from '../services/anecdotes'

const getId = () => (100000 * Math.random()).toFixed(0)

export const createAnecdote = (content) => {
  return ({
    type: 'NEW',
    id: '',
    content: content

  })
}

export const vote_anecdote = (anecdote) => {
  return (({
    type: 'VOTE',
    id: anecdote.id,
    content: anecdote.content


  }))

}



export const  initializeAnecdotes  = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT',
      id: '',
      content: anecdotes,
    })
  }
}
const anecdoteReducer = (state = [], action) => {
  
  switch (action.type) {
    case 'VOTE':
      var i = 0
      var newState = [...state]
      for (let index = 0; index < state.length; index++) {
        const element = state[index];
        if (element.id === action.id) {
          newState[index].votes = newState[index].votes + 1
          i = index
        }

      }
      anecdoteService.update(newState[i].id,newState[i])

      return newState

    case 'NEW':
      var newState1 = [...state]
      var newS = newState1.concat({
        content: action.content,
        id: getId(),
        votes: 0
      })
      anecdoteService.create({
        content: action.content,
        id: getId(),
        votes: 0
      })
      return newS
    case 'INIT':
      return action.content
      default: return state

  }
}

export default anecdoteReducer
