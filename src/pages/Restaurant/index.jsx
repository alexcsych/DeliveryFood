import React from 'react'
import styles from './Restaurant.module.sass'
import Header from '../../components/Header'
import Assortiment from '../../components/Assortiment'
import Footer from '../../components/Footer'
import Cart from '../../components/Cart'
import Auth from '../../components/Auth'

function Restaurant () {
  return (
    <>
      <Auth></Auth>
      <Cart></Cart>
      <div className={styles.Restaurant}>
        <Header></Header>
        <Assortiment></Assortiment>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Restaurant
