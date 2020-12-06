import React from 'react'
import s from './ProfileInfo.module.css'
import { InjectedFormProps, reduxForm } from "redux-form"
import { createField, GetStringKeys, Input, Textarea } from "../../common/FormsControls/FormsControls"
import style from '../../common/FormsControls/FormsControls.module.css'
import { ProfileType } from '../../../types/types'

type PropsType = {
  profile: ProfileType
}
type ProfileTypeKeys = GetStringKeys<ProfileType>

const ProfileDataForm: React.FC<InjectedFormProps<ProfileType, PropsType> & PropsType> = (props) => {
  return (
  <form onSubmit={props.handleSubmit}>
    <div>
      <button>Save</button>
    </div>
    { props.error && <div className={style.formSummaryError}>{props.error}</div> }
    <div>
      <b>Full name</b>: {createField<ProfileTypeKeys>('Full name', 'fullName', [], Input)}
    </div>
    <div>
      <b>Looking for a job</b>: {createField<ProfileTypeKeys>('', 'lookingForAJob', [], Input, {type: 'checkbox'})}
    </div>
    <div>
      <b>My professional skills</b>: { createField<ProfileTypeKeys>('My professional skills', 'lookingForAJobDescription', [], Textarea) }
    </div>
    <div>
      <b>About me</b>: 
      { createField<ProfileTypeKeys>('About me', 'aboutMe', [], Textarea) }
    </div>
    <div>
      <b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => (
        <div key={key} className={s.contact}>
          <b>{key}: {createField(key, 'contacts.' + key, [], Input)}</b>
        </div>
      ))}
    </div>
  </form>
)}

const ProfileDataFormRedux = reduxForm<ProfileType, PropsType>({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormRedux
