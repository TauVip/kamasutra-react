import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='http://pornzwezdy.ru/uploads/posts/2014-06/1402057502_b5296e4f6d3dbb33a40179df046b9c2c.17.jpg' />
      { props.message }
      <div>
        <span>like</span> { props.likesCount }
      </div>
    </div>
  )
}

export default Post
