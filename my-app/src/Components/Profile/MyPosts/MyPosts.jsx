import classes from './MyPosts.module.css'
import Post from './Post/Post'

function MyPosts() {
	return (
		<div>
			My posts
			<div>New post</div>
			<div className={classes.buttons}>
				<textarea></textarea>
				<button>Add post</button>
				<button>Remove</button>
			</div>
			<Post text='Hello' />
			<Post text='I know React' />
			<Post text='First comment' />
		</div>
	)
}

export default MyPosts
