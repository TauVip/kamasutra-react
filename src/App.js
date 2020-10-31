import { Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

const App = (props) => {
  return (
      <div className='app-wrapper'>
        <Header />

        <Navbar />

        <div className='app-wrapper-content'>
          <Route path='/dialogs' render={ () => <Dialogs state={props.state.dialogsPage} /> } />
          <Route path='/profile' 
            render={ () => <Profile 
              profilePage={props.state.profilePage} 
              dispatch={props.dispatch} /> } />
        </div>
      </div>
  )
}

export default App

// 40 - React JS Практика - добавление Сообщения | 5:23 / 53:26
