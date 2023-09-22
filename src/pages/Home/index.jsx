import React from 'react'
import styles from './Home.module.sass'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner'
import Menu from '../../components/Menu'

function Home () {
  return (
    <>
      <div className={styles.Home}>
        <Header></Header>
        <Banner></Banner>
        <Menu></Menu>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Home
