import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from "react"
import { motion } from 'framer-motion'
import { useGlobalContext } from '../components/context/_global'
import Link from 'next/link'

export default function Home() {
  const { isInitialLoad, setisInitialLoad } = useGlobalContext()

  console.log(isInitialLoad)

  return (
    <div className="flex flex-col items-center p-2">
      <h1 className="text-center text-3xl mt-3 font-semibold text-green-500">Veritably Nat</h1>
      <div className="flex-shrink-0 mt-6">
        <img className="rounded-full md:h-96" src="./nat.jpeg"></img>
      </div>
      <motion.div
        initial={isInitialLoad ? { opacity: .25 } : false}
        animate={isInitialLoad ? { scale: 1.05, opacity: 1 } : false}
        onAnimationStart={() => isInitialLoad && setisInitialLoad(false)}
        transition={isInitialLoad ? {
          repeat: 2,
          repeatType: "mirror",
          duration: 2,
          ease: 'easeInOut'
        } : false}
        className="sm-w-48 xs:w-96 md:w-120 mx-auto bg-white rounded-xl shadow-md p-4 mt-4"
      >
        <p><motion.span initial={{ opacity: 0 }} animate={{ scale: 2, opacity: 1 }}>👋</motion.span> &nbsp; Hello! My name is Nat <em>Veritas</em> Sadoshima.</p>
        <p className="mt-2 font-semibold">I am:</p>
        <ul>
          <li>A 二世 (second generation) Japanese 🇯🇵 &nbsp; American 🇺🇸</li>
          <li>A <b>Full Stack Web Developer</b>. </li>
          <li>Currently specialized in Javascript/Typescript, and learning to love Golang.</li>
        </ul>
      </motion.div>
      <section className="mt-6 md-w-1/2 grid grid-cols-2 gap-4">
        <div className="bg-white rounded-xl text-base font-semibold shadow-md p-5 mt-4">
          <Link href="./about-me">
            <a>🤓 More About Me</a>
          </Link>
        </div>
        <div className="bg-white rounded-xl text-base font-semibold shadow-md p-5 mt-4">
          <a>
            🔧 Things I Have Built
          </a>
        </div>
        <div className="bg-white rounded-xl text-base font-semibold shadow-md p-5 mt-4">
          <a>
            📝 Things I Have Written
          </a>
        </div>
        <div className="bg-white rounded-xl text-base font-semibold shadow-md p-5 mt-4">
          <a>
            👋 Say Hello
          </a>
        </div>
      </section>
    </div>
  )
}
