import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, Route, Switch, withRouter } from 'react-router-dom'
import { compose } from 'redux'
import './App.css'
import Preloader from './components/common/Preloader/Preloader'
import HeaderContainer from './components/Header/HeaderContainer'
import { LoginPage } from './components/Login/Login'
import Navbar from './components/Navbar/Navbar'
import { UsersPage } from './components/Users/UsersContainer'
import { withSuspense } from './hoc/withSuspense'
import { initializeApp } from './redux/app-reducer'
import { AppStateType } from './redux/redux-store'

// import DialogsContainer from './components/Dialogs/DialogsContainer';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))

// import ProfileContainer from './components/Profile/ProfileContainer'
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = { initializeApp: () => void }

const SuspendedDialogs = withSuspense(DialogsContainer)
const SuspendedProfile = withSuspense(ProfileContainer)

class App extends Component<MapPropsType & DispatchPropsType> {
  catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
    console.error(e)
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
              render={() => <SuspendedDialogs /> } 
            />
            <Route 
              path='/profile/:userId?' 
              render={() => <SuspendedProfile /> } 
            />
            <Route 
              path='/users'
              render={ () => <UsersPage pageTitle={'Самураи'} /> }
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

const mapStateToProps = (state: AppStateType) => ({
  initialized: state.app.initialized
})

export default compose<React.ComponentType>(withRouter, connect(mapStateToProps, { initializeApp }))(App)

// 15 - Hooks, оно нам надо? / React TypeScript - Путь Самурая 2.0 | 22:51
