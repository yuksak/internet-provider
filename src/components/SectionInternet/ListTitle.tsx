import React, { FC } from 'react'

interface InfoTitleProps {
  children: React.ReactNode
  title: string
  value: string
}

export const CardInfoTitle: FC<InfoTitleProps> = ({ title, value, children }) => {
  return (
    <li className="flex space-x-3 text-sm sm:text-base">
      <span className="text-blue-300">{children}</span>
      <span className=" font-normal leading-tight text-zinc-500">
        <span className="text-zinc-800 font-bold">{title}: </span>
        {value}
      </span>
    </li>
  )
}
