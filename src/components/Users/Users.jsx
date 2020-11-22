import Paginator from '../common/Paginator/Paginator'
import User from './User'

let Users = props => (
  <div>
    <Paginator
      currentPage={props.currentPage}
      onPageChanged={props.onPageChanged}
      totalItemsCount={props.totalUsersCount}
      pageSize={props.pageSize}
    />
    <div> {
      props.users.map(u => (
        <User 
          key={u.id}
          user={u}
          followingInProgress={props.followingInProgress}
          unfollow={props.unfollow}
          follow={props.follow}
        />
      ))
    } </div>
  </div>
)

export default Users
