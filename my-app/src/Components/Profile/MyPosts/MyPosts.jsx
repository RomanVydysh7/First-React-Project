import classes from './MyPosts.module.css'
import Post from './Post/Post'

function MyPosts(Props) {
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
				{Props.posts.map(item => (
					<Post text={item.message} like={item.like} id={item.id} />
				))}
			</div>
		</div>
	)
}

export default MyPosts
