import React, { FC } from 'react'
import { ISectionTitleProps } from './SectionTitle.types'

export const SectionTitle: FC<ISectionTitleProps> = ({ title, classes }) => {
  return (
    <h1
      className={`${
        classes ? classes : ''
      } text-2xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:text-5xl py-4 md:py-8`}
    >
      <span className="underline underline-offset-3 decoration-4 sm:decoration-8 decoration-blue-400 ">
        {title}
      </span>
    </h1>
  )
}
