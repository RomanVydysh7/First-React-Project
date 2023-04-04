import classes from './MyPosts.module.css'
import Post from './Post/Post'
import React from 'react'

function MyPosts(Props) {
	let element = React.createRef()
	console.log(Props.store)

	let addPost1 = () => {
		Props.store.dispatch({ type: 'addpost' })
		Props.store.dispatch({ type: 'changeStroke', stroke: '' })
	}
	let onPostChange = () => {
		let text = element.current.value
		Props.store.dispatch({ type: 'changeStroke', stroke: text })
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
						value={Props.store._state.profilePage.newPostText}
					/>
				</div>
				<div>
					<button onClick={addPost1}>Add post</button>
				</div>
			</div>
			<div className={classes.posts}>
				{Props.store._state.profilePage.postData.map(item => (
					<Post text={item.message} like={item.like} id={item.id} />
				))}
			</div>
		</div>
	)
}

export default MyPosts
