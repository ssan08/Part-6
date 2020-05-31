
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
//import reducer from './reducers/anecdoteReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import anecdoteReducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'

const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  notifications: notificationReducer
}) 
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
)



export default store