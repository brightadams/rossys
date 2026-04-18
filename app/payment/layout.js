import React from 'react'
import Provider from '@/components/Provider'
import Nav from '../../components/Nav'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">

      <Nav />
      {children}
    </div>
  )
}
