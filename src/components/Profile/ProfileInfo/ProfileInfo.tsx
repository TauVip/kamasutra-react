import React, { ChangeEvent } from 'react'
import s from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'
import userPhoto from '../../../assets/images/user.png'
import { useState } from 'react'
import ProfileDataForm from './ProfileDataForm'
import { ContactsType, ProfileType } from '../../../types/types'

type PropsType = { 
  profile: ProfileType | null
  savePhoto: (file: File) => void
  saveProfile: (profile: ProfileType) => Promise<any>
  isOwner: boolean
  status: string
  updateStatus: (status: string) => void 
}

const ProfileInfo: React.FC<PropsType> = (props) => {
  let [editMode, setEditMode] = useState(false)

  if (!props.profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      props.savePhoto(e.target.files[0])
    }
  }

  const onSubmit = (formData: ProfileType) => {
    props.saveProfile(formData).then(
      () => setEditMode(false)
    )
  }

  return (
    <div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large || userPhoto} className={s.mainPhoto} />
        { props.isOwner && <input type={'file'} onChange={ onMainPhotoSelected } /> }

        { editMode ? 
          <ProfileDataForm 
            initialValues={props.profile}
            profile={props.profile} 
            onSubmit={onSubmit} 
          /> : 
          <ProfileData 
            goToEditMode={() => setEditMode(true)}
            profile={props.profile} 
            isOwner={props.isOwner} 
          />}

        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
      </div>
    </div>
  )
}

type ProfileDataPropsType = {
  profile: ProfileType
  isOwner: boolean
  goToEditMode: () => void
}
const ProfileData: React.FC<ProfileDataPropsType> = props => (
  <div>
    { props.isOwner && <div><button onClick={props.goToEditMode}>edit</button></div> }
    <div>
      <b>Full name</b>: {props.profile.fullName}
    </div>
    <div>
      <b>Looking for a job</b>: {props.profile.lookingForAJob ? 'yes' : 'no'}
    </div>
    { props.profile.lookingForAJob &&
      <div>
        <b>My professional skills</b>: {props.profile.lookingForAJobDescription}
      </div>
    }
    <div>
      <b>About me</b>: {props.profile.aboutMe}
    </div>
    <div>
      <b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => (
        <Contact 
          key={key} 
          contactTitle={key} 
          contactValue={props.profile.contacts[key as keyof ContactsType]} 
        />
      ))}
    </div>
  </div>
)

type ContactsPropsType = {
  contactTitle: string
  contactValue: string
}
const Contact: React.FC<ContactsPropsType> = ({ contactTitle, contactValue }) => (
  <div className={s.contact}>
    <b>{contactTitle}</b>: {contactValue}
  </div>
)

export default ProfileInfo
