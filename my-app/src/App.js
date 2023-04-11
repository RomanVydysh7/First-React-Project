import './App.css'
import { Dialogs } from './Components/Dialogs/Dialogs'
import Header from './Components/Header/Header'
import Nav from './Components/Nav/Nav'
import Profile from './Components/Profile/Profile'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

function App(Props) {
	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<Header />
				<Nav />
				<div className='app-wrapper-content'>
					<Routes>
						<Route exact path='/profile' element={<Profile />} />
						<Route exact path='/message' element={<Dialogs />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	)
}

export default App
