import Head from 'next/head'
import styles from '../styles/Home.module.css'
import CloudRight from '../components/cloudRight'
import BigName from '../components/bigname'
import Header from '../components/header'

export default function Home() {
  return (
    <div className='h-screen '>
        <Header/>
        <BigName/>


    </div>
  )
}
