import React from 'react'
import MainHeader from '../../components/MainHeader/MainHeader'
import Footer from '../../components/Footer'

export default function MainLayout({ children }) {
  return (
    <div>
      <MainHeader />
      {children}
      <Footer />
    </div>
  )
}
