import React from 'react'
import * as ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { addPost, changeStroke } from './redux/state'
const root = ReactDOM.createRoot(document.getElementById('root'))
export let rerenertree = state => {
	root.render(
		<React.StrictMode>
			<App
				posts={state.profilePage}
				dialogs={state.dialogsData}
				message={state.messageData}
				addPost={addPost}
				changeStroke={changeStroke}
			/>
		</React.StrictMode>
	)
}
