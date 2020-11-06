import { Route } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
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
        </div>
      </div>
  )
}

export default App

// 67 - React JS - урок redux-thunk 2 в деталях (практика) | 13:39 / 22:29
