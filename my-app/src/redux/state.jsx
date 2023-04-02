import { rerenertree } from '../render'

const state = {
	profilePage: {
		postData: [
			{ id: 1, message: 'Hello', like: 5 },
			{ id: 2, message: 'I know React', like: 3 },
			{ id: 3, message: 'First comment', like: 0 },
		],
		newPostText: 'Type here',
	},
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
}

export let addPost = () => {
	let newPost = {
		id: 4,
		message: state.profilePage.newPostText,
		like: 0,
	}
	state.profilePage.postData.push(newPost)
	rerenertree(state)
}

export let changeStroke = Stroke => {
	state.profilePage.newPostText = Stroke
	rerenertree(state)
}

export default state
