import React, { FC } from 'react'
import { ITabsProps } from './Tabs.types'

export const Tabs: FC<ITabsProps> = ({ titles, onClick, data }) => {
  return (
    <ul className="text-xs sm:text-lg font-medium border border-b-0 text-center overflow-y-auto text-gray-500 divide-x divide-gray-200 shadow flex">
      {titles.map(({ name, logo }) => (
        <li className="w-full" key={name}>
          <a
            href="#"
            className={`inline-block w-full p-2 sm:p-4 ${
              data[0].title.includes(name)
                ? 'text-gray-900 bg-gray-100 active'
                : 'bg-white hover:text-gray-700 hover:bg-gray-50'
            }  focus:outline-none flex gap-1 justify-center items-center`}
            aria-current="page"
            onClick={onClick}
          >
            <>
              {logo && logo}
              {name}
            </>
          </a>
        </li>
      ))}
    </ul>
  )
}
