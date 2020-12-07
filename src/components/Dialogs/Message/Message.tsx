import React from 'react'
import s from '../Dialogs.module.css'

type PropsType = {
  message: string
}
const Message: React.FC<PropsType> = props => (
  <div className={s.dialog}>{props.message}</div>
)

export default Message
