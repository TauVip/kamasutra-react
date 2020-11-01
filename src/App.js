import { Route } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

const App = (props) => {
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
        </div>
      </div>
  )
}

export default App

// 44 - React JS Практика - Context API | 18:29 / 43:17
