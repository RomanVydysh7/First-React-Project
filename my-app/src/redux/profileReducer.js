const ADD_POST = 'ADD_POST'
const CHANGE_STROKE = 'CHANGE_STROKE'

const profileReducer = (state, action) => {
	switch (action.type) {
		case ADD_POST:
			let newPost = {
				id: 4,
				message: state.newPostText,
				like: 0,
			}
			state.postData.push(newPost)
			return state
		case CHANGE_STROKE:
			state.newPostText = action.stroke
			return state
		default:
			return state
	}
}
export const addPostActionCreator = () => {
	return { type: ADD_POST }
}
export const onPostChangeActionCreatore = text => {
	return {
		type: CHANGE_STROKE,
		stroke: text,
	}
}
export default profileReducer
