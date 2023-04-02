import classes from './MyPosts.module.css'
import Post from './Post/Post'
import React from 'react'

function MyPosts(Props) {
	let element = React.createRef()

	let addPost1 = () => {
		Props.addPost()
		Props.changeStroke('')
	}
	let onPostChange = () => {
		let text = element.current.value
		Props.changeStroke(text)
	}
	return (
		<div>
			<h2>My posts</h2>
			<div>New post</div>
			<div className={classes.buttons}>
				<div>
					<textarea
						onChange={onPostChange}
						ref={element}
						value={Props.posts.newPostText}
					/>
				</div>
				<div>
					<button onClick={addPost1}>Add post</button>
				</div>
			</div>
			<div className={classes.posts}>
				{Props.posts.postData.map(item => (
					<Post text={item.message} like={item.like} id={item.id} />
				))}
			</div>
		</div>
	)
}

export default MyPosts
