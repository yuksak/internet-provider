import React, { useState } from 'react'

import { FaTelegramPlane, FaFacebookF, FaKey, FaPhoneAlt, FaLanguage } from 'react-icons/fa'

export const NavbarTop = () => {
  return (
    <div className="px-4 py-2 text-xs sm:text-sm bg-zinc-800 border-b  flex flex-col gap-5  md:flex-row md:items-center md:justify-between">
      <div className="flex mt-4 space-x-6 justify-center md:mt-0 items-center">
        {socials.map(({ name, icon, url, content }) => (
          <a
            key={name}
            href={url}
            className="text-zinc-300 hover:underline flex items-center gap-2"
          >
            {icon}
            {content && content}
          </a>
        ))}
      </div>

      <div className="flex gap-5 justify-between md:justify-start">
        {actions.map(({ name, url, icon }) => (
          <a
            href={url}
            key={name}
            className="text-zinc-300 hover:underline flex items-center gap-1.5"
          >
            {icon}
            {name}
          </a>
        ))}
      </div>
    </div>
  )
}

const socials = [
  {
    name: 'telegram',
    icon: <FaTelegramPlane className="h-4 w-4" />,
    url: 'https://t.me/ISTVonlinesupport',
    content: '',
  },
  {
    name: 'facebook',
    icon: <FaFacebookF className="h-4 w-4" />,
    url: 'https://www.facebook.com/ISTV.uzbekistan/',
    content: '',
  },
  {
    name: 'telephone',
    icon: <FaPhoneAlt className="h-4 w-4" />,
    url: 'tel:+998-78-147-76-77',
    content: '+998 (78) 147-76-77',
  },
]

const actions = [
  {
    name: "Tilni o'zgartirish",
    icon: <FaLanguage className="h-5 w-5" />,
    url: '#',
  },
  {
    name: 'Shaxsiy kabinet',
    icon: <FaKey className="h-4 w-4" />,
    url: 'https://cabinet.istv.uz',
  },
]
