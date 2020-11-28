import React from 'react'
import Paginator from '../common/Paginator/Paginator'
import User from './User'

type PropsType = { 
  currentPage: number; 
  onPageChanged: (arg: number) => void; 
  totalUsersCount: number; 
  pageSize: number; 
  users: any[]; 
  followingInProgress: Array<number>; 
  unfollow: (arg: any) => void; 
  follow: (arg: any) => void 
}

let Users: React.FC<PropsType> = props => (
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