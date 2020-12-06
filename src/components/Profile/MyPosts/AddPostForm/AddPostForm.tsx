import React from 'react'
import { InjectedFormProps, reduxForm } from 'redux-form'
import { maxLengthCreator, required } from '../../../../utils/validators/validators'
import { createField, GetStringKeys, Input } from '../../../common/FormsControls/FormsControls'

const maxLength = maxLengthCreator(10)

type PropsType = {

}

export type AddPostFormValuesType = {
  newPostText: string
}

type AddPostFormValuesTypeKeys = GetStringKeys<AddPostFormValuesType>

const AddPostForm: React.FC<InjectedFormProps<AddPostFormValuesType, PropsType> & PropsType> = props => (
  <form onSubmit={props.handleSubmit}>
    <div>
      { createField<AddPostFormValuesTypeKeys>('Your post', 'newPostText', [required, maxLength], Input) }
    </div>
    <div>
      <button>Add post</button>
    </div>
  </form>
)

export default reduxForm<AddPostFormValuesType, PropsType>({form: 'profile-add-post'})(AddPostForm)
