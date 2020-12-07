import { Formik } from 'formik/dist/Formik'
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
    <UsersSearchForm />
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

const UsersSearchForm = () => (
  <div>
    <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit}>
           <input
             type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
           />
           <button type="submit" disabled={isSubmitting}>
             Find
           </button>
         </form>
       )}
     </Formik>
  </div>
)

export default Users
