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
      <h1 className="text-center text-3xl mt-3 font-semibold"><span className="text-green-500">Veritably</span> Nat</h1>
      <div className="flex-shrink-0 mt-6">
        <img className="rounded-full xs:h-48 s:h-48 md:h-96" src="./nat.jpeg"></img>
      </div>
      <motion.div
        initial={isInitialLoad ? { scale: .75, opacity: .25, rotate: 12 } : false}
        animate={isInitialLoad ? { scale: 1.00, opacity: 1, rotate: [0, -12, 0, 12, 0, -12, 0, 12, 0] } : false}
        onAnimationStart={() => isInitialLoad && setisInitialLoad(false)}
        transition={isInitialLoad ? {
          repeatType: "mirror",
          duration: 1,
          ease: 'linear',
        } : false}
        className="sm:w-120 xs:w-48 md:w-120 mx-auto bg-white rounded-xl shadow-md p-4 mt-4"
      >
        <p><motion.span initial={{ opacity: 0 }} animate={{ scale: 2, opacity: 1 }}>👋</motion.span> &nbsp; Hello! My name is Nat <em className="text-green-500">Veritas</em> Sadoshima.</p>
        <p className="mt-2 font-semibold">I am:</p>
        <ul>
          <li>A 二世 (second generation) Japanese 🇯🇵 &nbsp; American 🇺🇸</li>
          <li>A <b>Full Stack Web Developer</b>. </li>
          <li>Currently specialized in Javascript/Typescript, and learning to love Golang.</li>
        </ul>
      </motion.div>
      <section className="mt-6 md-w-1/2 grid grid-cols-2 gap-4">
        <HomeLink emoji="🤓" title="More About Me" href="./about-me" />
        <HomeLink emoji="🔧" title="Things I Have Built" href="./projects" />
        <HomeLink emoji="📝" title="Things I Have Written" href="" />
        <HomeLink emoji="👋" title="Say Hello" href="" />
      </section>
    </div>
  )
}

function HomeLink({ emoji, title, href }) {
  return (
    <div className="homepage-link align-items-center bg-white rounded-xl text-base font-semibold shadow-md p-5 mt-4">
      <Link href={href}>
        <a><span>{emoji}</span>&nbsp;&nbsp;<span>{title}</span></a>
      </Link>
    </div>
  )
}
