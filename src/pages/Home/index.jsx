import React from 'react'
import styles from './Home.module.sass'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner'
import Menu from '../../components/Menu'
import Cart from '../../components/Cart'
import Auth from '../../components/Auth'

function Home () {
  return (
    <>
      <Auth></Auth>
      <Cart></Cart>
      <div className={styles.Home}>
        <Banner></Banner>
        <Header></Header>
        <Menu></Menu>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Home
