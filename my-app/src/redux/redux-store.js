import { combineReducers } from 'redux'
import dialogsReducer from './dialogsReducer'
import profileReducer from './profileReducer'
import sidebarReducer from './sidebarReducer'
import { legacy_createStore as createStore } from 'redux'

let redusers = combineReducers({
	dialogsReducer,
	profileReducer,
	sidebarReducer,
})

let store = createStore(redusers)
console.log(store.getState())

export default store
