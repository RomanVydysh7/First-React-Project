import classes from './Post.module.css'
import img from '../../../../img/Avatarpost.png'

function Post(Props) {
	return (
		<div className={classes.posts}>
			<div className={classes.posttext}>
				<img src={img} className={classes.Avatarpost} alt={Props.id}></img>
				<div className={classes.item}>{Props.text}</div>
			</div>
			<div>
				<span>Like {Props.like}</span>
			</div>
		</div>
	)
}

export default Post
