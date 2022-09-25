import React from 'react'
import './Home.css'
import Header from '../../components/Header'
import SideBar from '../../components/SideBar'
import './Home.css'
import Blogs from '../Blogs'

export default function Home() {
  return (
    <>
      <Header />
      <div className='home'>
        <Blogs />
        <SideBar />
      </div>
    </>
  )
}
