import { Route } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import UsersContainer from './components/Users/UsersContainer';

const App = () => {
  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route 
            path='/dialogs' 
            render={ () => <DialogsContainer /> } 
          />

          <Route 
            path='/profile' 
            render={ () => <Profile /> } 
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

// 49 - React JS практика - страница пользователей | 57:06 / 1:02:35
