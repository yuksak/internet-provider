import React, { useState } from 'react'
import { useScrollPosition } from 'hooks'

import { Modal, Button } from 'components'

import { IoRocket, IoMenu } from 'react-icons/io5'
import istvLogo from 'assets/istv-logo.svg'
import istvGrayLogo from 'assets/istv-logo-gray.svg'

export const NavbarBottom = () => {
  const { scrollPosition } = useScrollPosition()
  const [modal, setModal] = useState<Boolean>(false)

  const modalFn = () => {
    setModal(true)
    console.log('true')
  }

  const isScrollTrue = scrollPosition > 35

  return (
    <>
      <nav
        className={`px-2 sm:px-4 ease-in duration-500 bg-white py-2.5 ${
          isScrollTrue ? `shadow-md py-2.5` : ''
        }`}
      >
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="/">
            <img
              src={isScrollTrue ? istvGrayLogo : istvLogo}
              className={`h-10 mr-3 ease-in duration-500 hover:animate-pulse ${
                isScrollTrue ? 'h-8' : 'sm:h-14'
              }`}
              alt="Company Logo"
            />
          </a>

          <div className="flex flex-row md:order-2">
            <Button name="Ulanish" onClick={modalFn}>
              <IoRocket className="h-3 sm:h-4 w-4 mr-1" />
            </Button>

            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex border items-center p-2 text-sm text-gray-500 md:hidden hover:bg-gray-100"
            >
              <IoMenu className="h-4 sm:h-6 w-6" />
            </button>
          </div>

          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
              {navRoutes.map(({ name, url }) => (
                <li key={name}>
                  <a
                    href={url}
                    className="block text-gray-700 rounded uppercase hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      {modal && <Modal />}
    </>
  )
}

const navRoutes = [
  { name: 'Internet', url: '#' },
  { name: 'Televizor', url: '#' },
  { name: 'IPTV', url: '#' },
  { name: 'Xizmatlar', url: '#' },
  { name: "Ish o'rni", url: '#' },
]
