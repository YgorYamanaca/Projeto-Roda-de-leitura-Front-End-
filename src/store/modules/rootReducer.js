import { combineReducers } from 'redux';
import eventsData from './eventsData/reducer'
import user from './user/reducer'

export default combineReducers({
    eventsData,
    user,
})