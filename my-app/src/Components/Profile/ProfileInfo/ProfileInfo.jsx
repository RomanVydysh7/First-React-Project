import React from 'react'
import img1 from '../../../img/photo.jpeg'
import img2 from '../../../img/avatar.png'
import classes from '../App-main.module.css'

export const ProfileInfo = () => {
	return (
		<div>
			<div>
				<img src={img1} alt='1' className={classes.title_photo} />
			</div>
			<div>
				<img src={img2} className={classes.avatar} alt='ava'></img>
			</div>
		</div>
	)
}
