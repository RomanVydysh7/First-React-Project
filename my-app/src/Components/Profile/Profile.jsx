import MyPosts from './MyPosts/MyPosts'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'

function Profile(Props) {
	return (
		<div>
			<ProfileInfo />
			<MyPosts posts={Props.posts} />
		</div>
	)
}

export default Profile
