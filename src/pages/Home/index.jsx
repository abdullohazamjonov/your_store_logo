import React from 'react'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import Sindebar from '../../components/Sidebar'
import Cart from '../../components/Card'

const Home = () => {
  return (
    <div>
        <Header />
        <Hero />
        <Sindebar />
        <Cart />
    </div>
  )
}

export default Home