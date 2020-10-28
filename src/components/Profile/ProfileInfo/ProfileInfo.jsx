import s from './ProfileInfo.module.css'

const ProfileInfo = () => (
  <div>
    <div>
      <img width='1000' height='400' src='https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701372504.jpg' />
    </div>
    <div className={s.descriptionBlock}>
      ava + description
    </div>
  </div>
)

export default ProfileInfo
