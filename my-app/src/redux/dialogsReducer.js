let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SAND_MESSAGE':
			let newPost = {
				id: 6,
				message: action.payload,
			}
			state.messageData.push(newPost)
			return state
		case 'UPDATE_NEW_MESSAGE_BODY':
			return { ...state, newMessageBody: action.payload }

		default:
			return state
	}
}

export default dialogsReducer
