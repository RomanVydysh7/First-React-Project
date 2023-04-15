import MyPosts from './MyPosts'
import { useDispatch, useSelector } from 'react-redux'
import { CHANGE_STROKE, ADD_POST } from '../../../redux/profileSlice'

const MyPostsContainer = () => {
	const dispatch = useDispatch()
	const message1 = useSelector(store => store.profileSlice.newPostText)
	const dataComments = useSelector(store => store.profileSlice.postData)
	let addPost1 = () => {
		dispatch(ADD_POST())
		dispatch(CHANGE_STROKE(''))
	}
	let onPostChange = e => {
		dispatch(CHANGE_STROKE(e.target.value))
	}

	return (
		<MyPosts
			message={message1}
			data={dataComments}
			addpost={addPost1}
			postchange={onPostChange}
		/>
	)
}

export default MyPostsContainer
