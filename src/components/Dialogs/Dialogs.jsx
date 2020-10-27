import s from './Dialogs.module.css'

const Dialogs = (props) => {
  return (
    <div className="dialogs">
      <div className="dialogs-items">
        <div className="dialog">
          Dimych
        </div>
        <div className="dialog">
          Andrey
        </div>
        <div className="dialog">
          Sveta
        </div>
        <div className="dialog">
          Sasha
        </div>
        <div className="dialog">
          Victor
        </div>
        <div className="dialog">
          Valera
        </div>
      </div>
      <div className="messages">
        <div className="message">Hi</div>
        <div className="message">How are you</div>
        <div className="message">Yo</div>
      </div>
    </div>
  )
}

export default Dialogs
