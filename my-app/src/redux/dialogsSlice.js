import { createSlice } from '@reduxjs/toolkit'

const dialogsSlice = createSlice({
	name: 'dialogsSlice',
	initialState: {
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
	reducers: {
		SAND_MESSAGE(state) {
			let newPost = {
				id: 6,
				message: state.newMessageBody,
			}
			state.messageData.push(newPost)
		},
		UPDATE_NEW_MESSAGE_BODY(state, action) {
			state.newMessageBody = action.payload
		},
	},
})

export default dialogsSlice.reducer
export const { SAND_MESSAGE, UPDATE_NEW_MESSAGE_BODY } = dialogsSlice.actions
