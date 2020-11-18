import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, required } from '../../../utils/validators/validators'
import { Textarea } from '../../common/FormsControls/FormsControls'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const maxLength = maxLengthCreator(10)

let AddNewPostForm = (props) => (
  <form onSubmit={props.handleSubmit}>
    <div>
      <Field 
        name='newPostText' 
        component={Textarea} 
        placeholder='Post message'
        validate={[required, maxLength]}
      />
    </div>
    <div>
      <button>Add post</button>
    </div>
  </form>
)

let AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

class MyPosts extends Component {

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  render() {
    console.log('RENDER')
    let postsElements = this.props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

    let onAddPost = values => {
      this.props.addPost(values.newPostText)
    }

    return (
      <div className={s.postsBlock}>
        <h3>My posts</h3>
        <AddNewPostFormRedux onSubmit={onAddPost} />
        <div className={s.posts}>
          { postsElements }
        </div>
      </div>
    )
  }
}

export default MyPosts
