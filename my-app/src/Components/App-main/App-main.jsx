import img1 from '../../img/photo.jpeg'
import img2 from '../../img/avatar.png'

function App_main() {
	return (
		<div className='app-main'>
			<div>
				<img src={img1} alt='1' className='title-photo' />
			</div>
			<div>
				<img src={img2} className='avatar' alt='ava'></img>
			</div>
			<div>
				My posts
				<div>New post</div>
				<div>
					<div>post 1</div>
					<div>post 2</div>
				</div>
			</div>
		</div>
	)
}

export default App_main
