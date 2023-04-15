import classes from './MyPosts.module.css'
import Post from './Post/Post'
import React from 'react'

function MyPosts(Props) {
	return (
		<div>
			<h2>My postss</h2>
			<div>New post</div>
			<div className={classes.buttons}>
				<div>
					<textarea onChange={e => Props.postchange(e)} value={Props.message} />
				</div>
				<div>
					<button onClick={() => Props.addpost()}>Add post</button>
				</div>
			</div>
			<div className={classes.posts}>
				{Props.data.map(item => (
					<Post text={item.message} like={item.like} id={item.id} />
				))}
			</div>
		</div>
	)
}

export default MyPosts
