import dialogsReducer from './dialogsReducer'
import profileReducer from './profileReducer'
import sidebarReducer from './sidebarReducer'

let rerenertree = () => {}

let store = {
	_state: {
		profilePage: {
			postData: [
				{ id: 1, message: 'Hello', like: 5 },
				{ id: 2, message: 'I know React', like: 3 },
				{ id: 3, message: 'First comment', like: 0 },
			],
			newPostText: 'Type here',
		},
		dialogsPage: {
			dialogsData: [
				{ name: 'Roman', id: 1 },
				{ name: 'Andriy', id: 2 },
				{ name: 'Diana', id: 3 },
				{ name: 'Yulia', id: 4 },
				{ name: 'Stepan', id: 5 },
			],
			messageData: [
				{ message: 'hi', id: 1 },
				{ message: 'how are you?', id: 2 },
				{ message: 'I`m fine', id: 3 },
				{ message: 'Hello', id: 4 },
				{ message: 'bye', id: 5 },
			],
			newMessageBody: 'Type here',
		},
		sidebar: {},
	},

	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action)
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
		this._state.sidebar = sidebarReducer(this._state.sidebar, action)
		rerenertree(this)
	},

	Render(callback1) {
		return (rerenertree = callback1)
	},
	getState() {
		return this._state
	},
}

export default store
