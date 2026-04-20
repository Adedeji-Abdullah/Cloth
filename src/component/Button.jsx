import React from 'react'

const Button = ({children, className}) => {
  return (
    <div className={`${className ? className : ''} p-2 rounded-lg bg-gray-500 backdrop:bg-slate-400`}>{children}</div>
  )
}

export default Button