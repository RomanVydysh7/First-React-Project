let initialState = {
	postData: [
		{ id: 1, message: 'Hello', like: 5 },
		{ id: 2, message: 'I know React', like: 3 },
		{ id: 3, message: 'First comment', like: 0 },
	],
	newPostText: 'Type here',
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_POST':
			let newPost = {
				id: 4,
				message: action.payload,
				like: 0,
			}
			state.postData.push(newPost)
			return state
		case 'CHANGE_STROKE':
			return { ...state, newPostText: action.payload }
		default:
			return state
	}
}

export default profileReducer
