import classes from './MyPosts.module.css'
import Post from './Post/Post'

let postData = [
	{ id: 1, message: 'Hello', like: 5 },
	{ id: 2, message: 'I know React', like: 3 },
	{ id: 3, message: 'First comment', like: 0 },
]

function MyPosts() {
	return (
		<div>
			<h2>My posts</h2>
			<div>New post</div>
			<div className={classes.buttons}>
				<div>
					<textarea></textarea>
				</div>
				<div>
					<button>Add post</button>
				</div>
			</div>
			<div className={classes.posts}>
				{postData.map(item => (
					<Post text={item.message} like={item.like} id={item.id} />
				))}
			</div>
		</div>
	)
}

export default MyPosts
