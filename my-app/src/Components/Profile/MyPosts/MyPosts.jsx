import classes from './MyPosts.module.css'
import Post from './Post/Post'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CHANGE_STROKE, ADD_POST } from '../../../redux/profileSlice'

function MyPosts() {
	let element = React.createRef()
	const dispatch = useDispatch()
	const message1 = useSelector(store => store.profileSlice.newPostText)
	const dataComments = useSelector(store => store.profileSlice.postData)
	let addPost1 = () => {
		dispatch(ADD_POST(element.current.value))
		dispatch(CHANGE_STROKE(''))
	}
	let onPostChange = () => {
		dispatch(CHANGE_STROKE(element.current.value))
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
