import './App.css'

import Header from './Components/Header/Header'
import Nav from './Components/Nav/Nav'
import App_main from './Components/App-main/App-main'

function App() {
	return (
		<div className='app-wrapper'>
			<Header />
			<Nav />
			<App_main />
		</div>
	)
}

export default App
