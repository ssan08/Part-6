import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import notificationReducer from '../reducers/notificationReducer'

const Notification = () => {
  const dispatch = useDispatch()
  var notification =  useSelector(({anecdotes, notifications}) => notifications)

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={style}>
       {notification}
    </div>
  )
}

export default Notification