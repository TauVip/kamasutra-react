import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />

        <Navbar />

        <div className='app-wrapper-content'>
          <Route path='/dialogs' component={ Dialogs } />
          <Route path='/profile' component={ Profile } />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App

// 26. Уроки React JS (структура проекта, ещё раз про ui - bll) - react курсы бесплатно, 2019 | 10:20 / 32:44
