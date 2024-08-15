import React from 'react'
import Head from './components/Head/Head'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Head/>
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout