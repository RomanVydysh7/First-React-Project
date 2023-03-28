import './App.css'

function App() {
	return (
		<div className='app-wrapper'>
			<header className='app-header'>
				<img
					src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
					className='logo'
					alt='1'
				/>
			</header>
			<nav className='app-nav'>
				<div>Profile</div>
				<div>Message</div>
			</nav>
			<div className='app-main'>MainContent</div>
		</div>
	)
}

export default App
