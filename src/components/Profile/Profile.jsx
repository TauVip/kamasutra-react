import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'

const Profile = () => (
  <div>
    <div>
      <img width='1000' height='200' src='https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701372504.jpg' />
    </div>
    <div>
      ava + description
    </div>
    <MyPosts />
  </div>
)

export default Profile
