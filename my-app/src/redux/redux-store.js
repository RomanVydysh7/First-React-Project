import sidebarReducer from './sidebarReducer'
import dialogsSlice from './dialogsSlice'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import profileSlice from './profileSlice'
let redusers = combineReducers({
	dialogsSlice,
	profileSlice,
	sidebarReducer,
})

let store = configureStore({
	reducer: redusers,
})

export default store
