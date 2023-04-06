let rerenertree = () => {}
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SAND_MESSAGE = 'SAND_MESSAGE'
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
	},

	dispatch(action) {
		if (action.type === 'addpost') {
			let newPost = {
				id: 4,
				message: this._state.profilePage.newPostText,
				like: 0,
			}
			this._state.profilePage.postData.push(newPost)
			rerenertree(this)
		} else if (action.type === 'changeStroke') {
			this._state.profilePage.newPostText = action.stroke
			rerenertree(this)
		} else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
			this._state.dialogsPage.newMessageBody = action.body
			rerenertree(this)
		} else if (action.type === SAND_MESSAGE) {
			let newPost = {
				id: 6,
				message: action.text,
			}
			this._state.dialogsPage.messageData.push(newPost)
			rerenertree(this)
		}
	},

	Render(callback1) {
		rerenertree = callback1
	},
	getState() {
		return this._state
	},
}
export const addPostActionCreator = () => {
	return { type: 'addpost' }
}
export const onPostChangeActionCreatore = text => {
	return {
		type: 'changeStroke',
		stroke: text,
	}
}
export const onChangeMessage = text => {
	return { type: 'UPDATE_NEW_MESSAGE_BODY', body: text }
}
export const onPushMessage = text => {
	return { type: 'SAND_MESSAGE', text: store._state.dialogsPage.newMessageBody }
}

export default store
