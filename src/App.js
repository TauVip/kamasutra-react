import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, Route, Switch, withRouter } from 'react-router-dom'
import { compose } from 'redux'
import './App.css'
import Preloader from './components/common/Preloader/Preloader'
import HeaderContainer from './components/Header/HeaderContainer'
import LoginPage from './components/Login/Login'
import Navbar from './components/Navbar/Navbar'
import UsersContainer from './components/Users/UsersContainer'
import { withSuspense } from './hoc/withSuspense'
import { initializeApp } from './redux/app-reducer'

// import DialogsContainer from './components/Dialogs/DialogsContainer';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))

// import ProfileContainer from './components/Profile/ProfileContainer'
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))

class App extends Component {
  catchAllUnhandledErrors = (promiseRejectionEvent) => {
    alert('Some error occured')
    // console.error(promiseRejectionEvent)
  }
  componentDidMount() {
    this.props.initializeApp()
    window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
  }
  componentWillUnmount() {
    window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Switch>
            <Route 
              exact
              path='/'
              render={() => <Redirect to='/profile' />}
            />
            <Route 
              path='/dialogs' 
              render={ withSuspense(DialogsContainer) } 
            />
            <Route 
              path='/profile/:userId?' 
              render={ withSuspense(ProfileContainer) } 
            />
            <Route 
              path='/users'
              render={ () => <UsersContainer /> }
            />
            <Route 
              path='/login'
              render={ () => <LoginPage />}
            />
            <Route 
              path='*'
              render={() => <div>404 NOT FOUND</div>}
            />
          </Switch>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  initialized: state.app.initialized
})

export default compose(withRouter, connect(mapStateToProps, { initializeApp }))(App)
