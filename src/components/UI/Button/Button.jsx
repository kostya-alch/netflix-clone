import React from 'react'
import s from './Button.module.scss'

const Button = ({ children, callback }) => {
   return (
      <button onClick={callback} className={s.button}>
         {children}
      </button>
   )
}

export default Button
