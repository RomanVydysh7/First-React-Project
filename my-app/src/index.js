import React from 'react'
import * as ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import store from './redux/state'
const root = ReactDOM.createRoot(document.getElementById('root'))
let rerenertree = store => {
	root.render(
		<React.StrictMode>
			<App store={store} />
		</React.StrictMode>
	)
}
store.Render(rerenertree)
rerenertree(store)
