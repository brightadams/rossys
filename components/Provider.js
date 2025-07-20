'use client'
//the auth uses browser capabilities that's why we do the above..
import { SessionProvider } from 'next-auth/react'

const Provider = ({children, session}) => {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
}

export default Provider