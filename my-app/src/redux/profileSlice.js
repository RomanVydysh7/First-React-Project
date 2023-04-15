import { createSlice } from '@reduxjs/toolkit'

const profileSlice = createSlice({
	name: 'Profile',
	initialState: {
		postData: [
			{ id: 1, message: 'Hello', like: 5 },
			{ id: 2, message: 'I know React', like: 3 },
			{ id: 3, message: 'First comment', like: 0 },
		],
		newPostText: 'Type here',
	},
	reducers: {
		ADD_POST(state) {
			let newPost = {
				id: 4,
				message: state.newPostText,
				like: 0,
			}
			state.postData.push(newPost)
		},
		CHANGE_STROKE(state, action) {
			state.newPostText = action.payload
		},
	},
})

export default profileSlice.reducer
export const { ADD_POST, CHANGE_STROKE } = profileSlice.actions
