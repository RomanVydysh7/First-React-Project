import img1 from '../../img/photo.jpeg'
import img2 from '../../img/avatar.png'
import classes from './App-main.module.css'
import MyPosts from './MyPosts/MyPosts'

function Profile() {
	return (
		<div className={classes.app_main}>
			<div>
				<img src={img1} alt='1' className={classes.title_photo} />
			</div>
			<div>
				<img src={img2} className={classes.avatar} alt='ava'></img>
			</div>
			<MyPosts />
		</div>
	)
}

export default Profile
