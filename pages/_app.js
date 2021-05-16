import '../styles/globals.css'
import React from 'react'
import { GlobalProvider } from '../components/context/_global'
import { useRouter } from 'next/router'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter()
  const isHome = pathname === '/'

  return <div className="bg-gray-400 bg-opacity-25 min-h-screen flex flex-col">
    {!isHome && <Link href="/"><button className="self-start font-extrabold p-2">⬅ Take me home</button></Link>}
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
    <div className="w-full justify-end">
      <p className="mt-5 mb-1 text-center text-sm text-opacity-50">
        Made with NextJS and Tailwind CSS
      </p>
    </div>
  </div>
}

export default MyApp
