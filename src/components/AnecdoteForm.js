import React from 'react'
import { connect } from 'react-redux'
import {useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from  '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()
  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(createAnecdote(content))
    dispatch(setNotification(`you created '${content}'`, 5))
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <input name="anecdote" />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
      anecdotes: state.anecdotes,
    }
  }

  const ConnectedAnecdoteForm = connect(mapStateToProps)(AnecdoteForm)

export default ConnectedAnecdoteForm
