import MyPosts from './MyPosts'
import { addPostActionCreator } from '../../../redux/profile-reducer'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  posts: state.profilePage.posts,
  newPostText: state.profilePage.newPostText
})
const mapDispatchToProps = dispatch => ({
  addPost: (newPostText) => {
    dispatch(addPostActionCreator(newPostText))
  }
})

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
