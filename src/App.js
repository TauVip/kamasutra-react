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
              addPost={props.addPost}
              updateNewPostText={props.updateNewPostText} /> } />
        </div>
      </div>
  )
}

export default App

// 34. Уроки React JS - Вынос мозга (FLUX-круговорот на каждый символ) | 29:07 / 36:27
