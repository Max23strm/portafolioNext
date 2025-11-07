import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Hero, Nav, Layout, About, Portfolio, Experience, Contact, AnimatedHero, HeroText, AnimatedSection } from '../components'
import { useEffect, useState } from 'react'

// const inter = Inter({ subsets: ['latin'] })


export default function Home() {
const [data, setData] = useState([])

useEffect(()=>{
    window.fetch('/api/')
    .then(res=> res.json())
    .then (datacion=>{setData(datacion)})
  },[])

  return (
    <>
      <Head>
        <title>Fullstack Developer</title>
        <meta name="description" content="Maximiliano Ovejak portfolio. Fullstack Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
       
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Nav/>

      {/* <Layout classStr="homeSec" active="#home"> */}
        {/* <Hero /> */}
        <AnimatedSection/>

      {/* </Layout> */}

      <Layout classStr="sec1" active="#about">
        <About data={data.about}/>
      </Layout>

      <Layout classStr="sec2" active="#work">
        <Portfolio trabajos={data.trabajos}/>
      </Layout>

      <Layout classStr="sec1" active="#skills">
        <Experience experience={data.experience}/>
      </Layout>

      <Layout classStr="sec2" active="#contact">
        <Contact />
      </Layout>

      
    </>
  )
}
