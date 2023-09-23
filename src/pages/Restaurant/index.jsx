import React from 'react'
import styles from './Restaurant.module.sass'
import Header from '../../components/Header'
import Assortiment from '../../components/Assortiment'
import Footer from '../../components/Footer'
import Cart from '../../components/Cart'

function Restaurant () {
  return (
    <>
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
