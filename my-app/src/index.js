import React from 'react'
import * as ReactDOM from 'react-dom'
import './index.css'
import App from './App'

const postData = [
	{ id: 1, message: 'Hello', like: 5 },
	{ id: 2, message: 'I know React', like: 3 },
	{ id: 3, message: 'First comment', like: 0 },
]
let dialogsData = [
	{ name: 'Roman', id: 1 },
	{ name: 'Andriy', id: 2 },
	{ name: 'Diana', id: 3 },
	{ name: 'Yulia', id: 4 },
	{ name: 'Stepan', id: 5 },
]
let messageData = [
	{ message: 'hi', id: 1 },
	{ message: 'how are you?', id: 2 },
	{ message: 'I`m fine', id: 3 },
	{ message: 'Hello', id: 4 },
	{ message: 'bye', id: 5 },
]

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<App posts={postData} dialogs={dialogsData} message={messageData} />
	</React.StrictMode>
)
