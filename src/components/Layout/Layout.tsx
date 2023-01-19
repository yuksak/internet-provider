import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Footer } from 'components'

export const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col content-center ">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
