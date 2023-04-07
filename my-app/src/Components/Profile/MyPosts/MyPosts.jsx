import classes from './MyPosts.module.css'
import Post from './Post/Post'
import React from 'react'
import {
	addPostActionCreator,
	onPostChangeActionCreatore,
} from '../../../redux/profileReducer'

function MyPosts(Props) {
	let element = React.createRef()

	let addPost1 = () => {
		Props.store.dispatch(addPostActionCreator())
		Props.store.dispatch(onPostChangeActionCreatore(''))
	}
	let onPostChange = () => {
		let text = element.current.value
		Props.store.dispatch(onPostChangeActionCreatore(text))
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
