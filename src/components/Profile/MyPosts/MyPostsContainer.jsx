import MyPosts from './MyPosts'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  posts: state.profilePage.posts,
  newPostText: state.profilePage.newPostText
})
const mapDispatchToProps = dispatch => ({
  updateNewPostText: text => {
    let action = updateNewPostTextActionCreator(text)
    dispatch(action)
  },
  addPost: () => {
    dispatch(addPostActionCreator())
  }
})

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
