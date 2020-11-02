import styles from './users.module.css'

let Users = (props) => {
  props.setUsers([
    {
      id: 1, 
      photoUrl: 'https://foreverwavy.files.wordpress.com/2013/10/20131020-225751.jpg',
      followed: false,
      fullname: 'Dmitry', 
      status: 'I am a boss', 
      location: {
        city: 'Minsk',
        country: 'Belarus'
      }
    },
    {
      id: 2, 
      photoUrl: 'http://cdn.pichunter.com/199/5/1995000/1995000_3_o.jpg',
      followed: true,
      fullname: 'Sasha', 
      status: 'I am a boss too', 
      location: {
        city: 'Moscow',
        country: 'Russia'
      }
    },
    {
      id: 3, 
      photoUrl: 'https://cdn.pichunter.com/313/2/3132057/3132057_1_o.jpg',
      followed: false,
      fullname: 'Andrew', 
      status: 'I am a boss too', 
      location: {
        city: 'Kiev',
        country: 'Ukraine'
      }
    }
  ])

  return (
    <div> {
      props.users.map(u => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} className={styles.userPhoto} />
            </div>
            <div>
              { u.followed ? 
                <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button> :
                <button onClick={() => {props.follow(u.id)}}>Follow</button>
              }
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullname}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))
    }</div>
  )
}

export default Users
