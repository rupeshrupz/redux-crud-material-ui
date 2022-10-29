import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import reduxThunk from 'redux-thunk'
import rootReducer from './root-reducer'


let middlewares = [reduxThunk]

if(process.env.NODE_ENV == "development")
{
    middlewares.push(logger)
}

let store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store