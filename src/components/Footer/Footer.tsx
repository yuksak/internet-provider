import React from 'react'
import istvLogo from 'assets/istv-logo.svg'
import { FaTelegramPlane, FaFacebookF } from 'react-icons/fa'

const footerRoutes = [
  {
    title: 'Tariflar',
    links: [
      { name: 'Internet', url: '#' },
      { name: 'Televizor', url: '#' },
      { name: 'IPTV', url: '#' },
    ],
  },
  {
    title: 'Yordam',
    links: [
      { name: 'Ofis manzillari', url: '#' },
      { name: "Ko'p so'raladigan savollar", url: '#' },
      { name: "Ish o'rni", url: '#' },
    ],
  },
]

const socials = [
  {
    name: 'telegram',
    icon: <FaTelegramPlane className="h-4 w-4" />,
    url: 'https://t.me/ISTVonlinesupport',
  },
  {
    name: 'facebook',
    icon: <FaFacebookF className="h-4 w-4" />,
    url: 'https://www.facebook.com/ISTV.uzbekistan/',
  },
]

export const Footer = () => {
  return (
    <footer className="p-4 sm:p-6 mt-auto bg-zinc-800">
      <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0 text-xs sm:text-base flex flex-col gap-5">
          <a href="#" className="flex items-center ">
            <img src={istvLogo} className="h-10 sm:h-16" alt="Company Logo" />
          </a>
          <a className="flex flex-col" href="tel:+998-78-147-76-77">
            <span className="text-zinc-400">Qo'llab-quvvatlash</span>
            <span className="text-white font-bold">+998 (78) 147-76-77</span>
          </a>
          <a className="flex flex-col" href="mailto:info@istv.uz">
            <span className="text-zinc-400">Umumiy savollar</span>
            <span className="text-blue-500 font-semibold">info@istv.uz</span>
          </a>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          {footerRoutes.map(({ title, links }) => (
            <div key={title}>
              <h2 className="mb-6 text-xs sm:text-lg font-semibold text-white uppercase">
                {title}
              </h2>
              <ul className="text-zinc-400 text-xs sm:text-base">
                {links.map(({ name, url }) => (
                  <li className="mb-3 sm:mb-4" key={name}>
                    <a href={url} className="hover:underline">
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <hr className="my-6 border-zinc-200 sm:mx-auto dark:border-zinc-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-xs sm:text-sm text-zinc-500 sm:text-center dark:text-zinc-400">
          © 2023 INFORM-SERVICE TV. All Rights Reserved.
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          {socials.map(({ name, url, icon }) => (
            <a
              href={url}
              key={name}
              className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
