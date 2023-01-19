import React, { FC } from 'react'

interface IButtonProps {
  name: string
  onClick?: () => void
  children?: React.ReactNode
}

export const Button: FC<IButtonProps> = ({ name, onClick, children }) => {
  return (
    <button
      type="button"
      className="text-white ease-in duration-200 w-full text-center hover:text-blue-500 uppercase flex items-center justify-center gap-0.5 bg-blue-500 hover:bg-white font-medium text-xs px-2 sm:px-5 py-2.5 mr-2 md:mr-0"
      onClick={onClick}
    >
      {children && children}
      {name}
    </button>
  )
}
