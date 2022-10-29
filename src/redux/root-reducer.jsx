import { combineReducers} from 'redux'
import usersReducers from './reducer'

let rootReducer = combineReducers({
    data:usersReducers
})

export default rootReducer 