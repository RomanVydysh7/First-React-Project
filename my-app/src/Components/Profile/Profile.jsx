import MyPosts from './MyPosts/MyPosts'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'

function Profile(Props) {
	return (
		<div>
			<ProfileInfo />
			<MyPosts
				changeStroke={Props.changeStroke}
				posts={Props.posts}
				addPost={Props.addPost}
			/>
		</div>
	)
}

export default Profile
