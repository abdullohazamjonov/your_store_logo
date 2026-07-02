import React from 'react'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import Sindebar from '../../components/Sidebar'
import Card from '../../components/Card'
import Input from '../../components/Input'
import Test from '../../components/Test'

const Home = () => {
  return (
    <>
      <Hero />
      <Sindebar />
      <Card />
      <Input />
      <Test />
    </>
  )
}

export default Home