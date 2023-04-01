import React from 'react'
import * as ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import state from './redux/state'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<App
			posts={state.postData}
			dialogs={state.dialogsData}
			message={state.messageData}
		/>
	</React.StrictMode>
)
