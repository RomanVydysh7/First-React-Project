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
			<Post text='Hello' like='5' />
			<Post text='I know React' like='3' />
			<Post text='First comment' like='0' />
		</div>
	)
}

export default MyPosts
