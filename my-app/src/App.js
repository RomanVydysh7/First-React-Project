import './App.css'
import Header from './Components/Header/Header'
import Nav from './Components/Nav/Nav'
import Profile from './Components/Profile/Profile'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import DialogsContainer from './Components/Dialogs/DialogsContainer'

function App(Props) {
	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<Header />
				<Nav />
				<div className='app-wrapper-content'>
					<Routes>
						<Route exact path='/profile' element={<Profile />} />
						<Route exact path='/message' element={<DialogsContainer />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	)
}

export default App
