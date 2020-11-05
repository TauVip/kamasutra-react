import s from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader'

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      <div>
        <img width='1000' height='400' src='https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701372504.jpg' />
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} />
        ava + description
      </div>
    </div>
  )
}

export default ProfileInfo
