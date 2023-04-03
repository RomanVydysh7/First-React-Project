import React from 'react'
import * as ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { addPost, changeStroke, Render } from './redux/state'
import state from './redux/state'
const root = ReactDOM.createRoot(document.getElementById('root'))
let rerenertree = state => {
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

Render(rerenertree)
rerenertree(state)
