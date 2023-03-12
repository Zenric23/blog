import React from 'react'
import Body from '../components/pages/Home/Body'
import Hero from '../components/pages/Home/Hero'
import Login_register from '../components/pages/Home/Login_register'
import Navbar from '../components/pages/Home/Navbar'
import Trending from '../components/pages/Home/Trending'

const Home = () => {
  return (
    <>
      <Navbar isRead={false} />
      <Hero />
      <Trending />
      <Body />
    </>
  )
}

export default Home