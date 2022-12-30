import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { Hero, Nav, Layout, About, Portfolio } from '../components'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
const [data, setData] = useState([])

useEffect(()=>{
    window.fetch('/api/')
    .then(res=> res.json())
    .then (datacion=>{setData(datacion)})
     console.log(data)
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

      <Layout >
        <Hero />
      </Layout>

      <Layout >
        <About data={data.about}/>
      </Layout>

      <Layout >
        <Portfolio/>
      </Layout>


      
    </>
  )
}
