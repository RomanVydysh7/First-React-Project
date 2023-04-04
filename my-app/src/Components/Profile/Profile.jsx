import MyPosts from './MyPosts/MyPosts'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'

function Profile(Props) {
	return (
		<div>
			<ProfileInfo />
			<MyPosts store={Props.store} />
		</div>
	)
}

export default Profile
