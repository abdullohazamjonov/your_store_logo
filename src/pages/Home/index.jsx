import React from 'react'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import Sindebar from '../../components/Sidebar'
import Card from '../../components/Card'
import Input from '../../components/Input'
import Test from '../../components/Test'
import Tabs from '../../components/Tabs'
import Products from '../../components/Products'
import Grid from "../../components/Grid";

const Home = () => {
  return (
    <>
      <Hero />
      <Sindebar />
      <Card />
      <Input />
      <Test />
      <Tabs />
      <Products />
      <Grid />
    </>
  )
}

export default Home