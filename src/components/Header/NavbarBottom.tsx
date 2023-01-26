import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import { useScrollPosition } from 'hooks'
import { Modal, Button } from 'components'

import { IoRocket, IoMenu } from 'react-icons/io5'
import istvLogo from 'assets/istv-logo.svg'
import istvGrayLogo from 'assets/istv-logo-gray.svg'

export const NavbarBottom = () => {
  const { scrollPosition } = useScrollPosition()
  const [modal, setModal] = useState<Boolean>(false)
  const [burgerMenu, setBurgerMenu] = useState<Boolean>(false)

  const modalFn = () => {
    setModal(true)
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
          <Link to="/">
            <img
              src={isScrollTrue ? istvGrayLogo : istvLogo}
              className={`h-10 mr-3 ease-in duration-500 hover:animate-pulse ${
                isScrollTrue ? 'h-8' : 'sm:h-14'
              }`}
              alt="Company Logo"
            />
          </Link>

          <div className="flex flex-row md:order-2">
            <Button name="Ulanish" onClick={modalFn}>
              <IoRocket className="h-3 sm:h-4 w-4 mr-1" />
            </Button>

            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex border items-center p-2 text-sm text-gray-500 md:hidden hover:bg-gray-100"
              onClick={() => setBurgerMenu((prev) => !prev)}
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <IoMenu className="h-4 sm:h-6 w-6" />
            </button>
          </div>

          <div
            className={`items-center overflow-hidden animation-[height] duration-500 ease-in justify-between w-full md:flex md:w-auto md:order-1 ${
              burgerMenu ? 'h-full' : 'max-h-0 md:max-h-80'
            }`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col border text-center border-gray-200  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
              {navRoutes.map(({ name, url }) => (
                <li key={name}>
                  <NavLink
                    to={url}
                    className={({ isActive }) =>
                      `block  uppercase p-2  md:hover:text-blue-700 ${
                        isActive
                          ? 'bg-zinc-100 text-blue-500 hover:bg-gray-200'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`
                    }
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      {modal && <Modal onClick={setModal} />}
    </>
  )
}

const navRoutes = [
  { name: 'Bosh bet', url: '/' },
  { name: 'Internet', url: '/Internet' },
  { name: 'Televizor', url: '/Televizor' },
  { name: 'IPTV', url: '/IPTV' },
  { name: "Ish o'rni", url: '/vacancies' },
]
