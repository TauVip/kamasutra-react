import { Route } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';

const App = () => {
  return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route 
            path='/dialogs' 
            render={ () => <DialogsContainer /> } 
          />

          <Route 
            path='/profile/:userId?' 
            render={ () => <ProfileContainer /> } 
          />

          <Route 
            path='/users'
            render={ () => <UsersContainer /> }
          />

          <Route 
            path='/login'
            render={ () => <Login />}
          />
        </div>
      </div>
  )
}

export default App

// 75 - React JS - redux-form введение (login) | 15:59 / 40:36
