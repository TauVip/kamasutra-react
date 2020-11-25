import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { reduxForm } from 'redux-form'
import { login } from '../../redux/auth-reducer'
import { required } from '../../utils/validators/validators'
import { createField, Input } from '../common/FormsControls/FormsControls'
import style from '../common/FormsControls/FormsControls.module.css'

const LoginForm = props => {
  return (
  <form onSubmit={props.handleSubmit}>
    { createField('Email', 'email', [required], Input) }
    { createField('Password', 'password', [required], Input, {type: 'password'}) }
    { createField(null, 'rememberMe', [], Input, {type: 'checkbox'}, 'remember me') }

    {props.captchaUrl && <img src={props.captchaUrl} />}
    {props.captchaUrl && createField('Symbols from image', 'captcha', [required], Input, {})}

    { props.error && <div className={style.formSummaryError}>
      {props.error}
    </div> }

    <div>
      <button>Login</button>
    </div>
  </form>
)
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const LoginPage = props => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
  }

  if (props.isAuth) {
    return <Redirect to={'/profile'} />
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  )
}

const mapStateToProps = state => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(LoginPage)
