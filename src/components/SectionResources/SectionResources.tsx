import React from 'react'

import { SectionTitle } from 'components/SectionTitle'
import { IoFilm, IoGameController, IoGrid, IoHappy, IoMusicalNotes } from 'react-icons/io5'

export const SectionResources = () => {
  return (
    <div className="sm:py-5">
      <SectionTitle title="Bizning resurslar" classes="px-2" />
      <ul className="grid grid-cols-5">
        {links.map(({ name, logo, website, classes }) => (
          <li
            key={name}
            className={`${classes} ease-in duration-150 group hover:scale-110 hover:shadow-xl flex flex-col items-center justify-center p-4 sm:p-8 text-center`}
          >
            <a
              href={website}
              className="flex flex-col font-medium text-xs sm:text-base text-white gap-1 w-full items-center"
            >
              {logo}
              <h1 className=" uppercase">{name}</h1>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

const links = [
  {
    name: 'Games',
    logo: <IoGameController className="h-10 w-10 sm:h-20 sm:w-20" />,
    website: 'http://games.istv.uz/',
    classes: 'bg-[#234C63]',
  },
  {
    name: 'Apps',
    logo: <IoGrid className="h-10 w-10 sm:h-20 sm:w-20" />,
    website: 'http://soft.istv.uz/',
    classes: 'bg-[#3FC5F0]',
  },
  {
    name: 'Anime',
    logo: <IoHappy className="h-10 w-10 sm:h-20 sm:w-20" />,
    website: 'http://animedia.uz/',
    classes: 'bg-[#FD5959]',
  },
  {
    name: 'Music',
    logo: <IoMusicalNotes className="h-10 w-10 sm:h-20 sm:w-20" />,
    website: 'http://music.istv.uz/',
    classes: 'bg-[#94DD4D]',
  },
  {
    name: 'Movies',
    logo: <IoFilm className="h-10 w-10 sm:h-20 sm:w-20" />,
    website: 'http://media.istv.uz/',
    classes: 'bg-[#FFD102]',
  },
]
