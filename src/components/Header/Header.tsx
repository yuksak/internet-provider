import React from 'react'
import { useScrollPosition } from 'hooks/useScrollPosition'

import { NavbarTop } from './NavbarTop'
import { NavbarBottom } from './NavbarBottom'

export const Header = () => {
  const { scrollPosition } = useScrollPosition()
  const isScrollTrue = scrollPosition > 35

  return (
    <>
      <header
        className={`transition-all ease-in duration-500 fixed left-0 w-full z-50 ${
          isScrollTrue ? '-top-[90px] md:-top-[37px]' : 'top-0'
        }`}
      >
        <NavbarTop />
        <NavbarBottom />
      </header>
      <div className="mt-36 md:mt-28" />
    </>
  )
}
