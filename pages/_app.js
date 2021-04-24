import '../styles/globals.css'
import React from 'react'
import { GlobalProvider } from './context/_global'

function MyApp({ Component, pageProps }) {
  return <div className="bg-gray-400 bg-opacity-25 min-h-screen flex flex-col">
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
