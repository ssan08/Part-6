import React from 'react'
import { connect } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'
import { vote_anecdote } from '../reducers/anecdoteReducer'
import { setNotification } from  '../reducers/notificationReducer'

const AnecdoteList = () => {

    var anecdotes = useSelector(({ anecdotes, notifications }) => anecdotes).sort((a, b) => b.votes - a.votes)
    const dispatch = useDispatch()

    const vote = (anecdote) => {
        dispatch(vote_anecdote(anecdote))
        dispatch(setNotification(`you voted '${anecdote.content}'`, 5))

    }

    const style = {
        marginBottom: 10
    }

    return (
        <div>
            <h2>Anecdotes</h2>
            {anecdotes.map((anecdote, i) =>
                <div key={i}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote)}>vote</button>
                    </div>
                </div>
            )}

        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
      anecdotes: state.anecdotes,
      filter: state.filter
    }
  }

  const ConnectedAnecdoteList = connect(mapStateToProps)(AnecdoteList)

export default ConnectedAnecdoteList