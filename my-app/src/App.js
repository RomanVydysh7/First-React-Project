import './App.css'
import Message from './Components/Dialogs/Dialogs'
import Header from './Components/Header/Header'
import Nav from './Components/Nav/Nav'
import Profile from './Components/Profile/Profile'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

function App() {
	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<Header />
				<Nav />
				<div className='app-wrapper-content'>
					<Routes>
						<Route path='/profile' element={<Profile />} />
						<Route path='/message' element={<Message />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	)
}

export default App
