import classes from './MyPosts.module.css'
import Post from './Post/Post'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function MyPosts() {
	let element = React.createRef()
	const dispatch = useDispatch()
	const message1 = useSelector(store => store.profileReducer.newPostText)
	const dataComments = useSelector(store => store.profileReducer.postData)
	let addPost1 = () => {
		dispatch({ type: 'ADD_POST', payload: element.current.value })
		dispatch({ type: 'CHANGE_STROKE', payload: '' })
	}
	let onPostChange = () => {
		dispatch({ type: 'CHANGE_STROKE', payload: element.current.value })
	}

	return (
		<div>
			<h2>My posts</h2>
			<div>New post</div>
			<div className={classes.buttons}>
				<div>
					<textarea onChange={onPostChange} ref={element} value={message1} />
				</div>
				<div>
					<button onClick={addPost1}>Add post</button>
				</div>
			</div>
			<div className={classes.posts}>
				{dataComments.map(item => (
					<Post text={item.message} like={item.like} id={item.id} />
				))}
			</div>
		</div>
	)
}

export default MyPosts
