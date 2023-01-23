import React, { FC } from 'react'
import { IButtonProps } from './Button.types'

export const Button: FC<IButtonProps> = ({ name, onClick, children, className }) => {
  return (
    <button
      type="button"
      className={`${
        className ? className : ''
      } text-white ease-in duration-200 text-center hover:text-blue-500 uppercase flex items-center justify-center gap-0.5 bg-blue-500 hover:bg-white font-medium text-xs px-2 py-1 sm:px-5 sm:py-2.5 mr-2 md:mr-0`}
      onClick={onClick}
    >
      {children && children}
      {name}
    </button>
  )
}
