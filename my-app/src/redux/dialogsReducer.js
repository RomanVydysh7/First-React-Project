const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SAND_MESSAGE = 'SAND_MESSAGE'

const dialogsReducer = (state, action) => {
	switch (action.type) {
		case UPDATE_NEW_MESSAGE_BODY:
			state.newMessageBody = action.body
			return state
		case SAND_MESSAGE:
			let newPost = {
				id: 6,
				message: state.newMessageBody,
			}
			state.messageData.push(newPost)
			return state
		default:
			return state
	}
}
export const onChangeMessage = text => {
	return { type: UPDATE_NEW_MESSAGE_BODY, body: text }
}
export const onPushMessage = text => {
	return { type: SAND_MESSAGE }
}
export default dialogsReducer
