import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://thumb-p0.xhcdn.com/a/_qVvqyLHoEEETScvi7zArg/000/252/582/720_1000.jpg' />
      { props.message }
      <div>
        <span>like</span> { props.likesCount }
      </div>
    </div>
  )
}

export default Post
