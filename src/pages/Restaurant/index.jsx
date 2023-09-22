import React from 'react'
import styles from './Restaurant.module.sass'
import Header from '../../components/Header'
import Assortiment from '../../components/Assortiment'
import Footer from '../../components/Footer'

function Restaurant () {
  return (
    <>
      <div className={styles.Restaurant}>
        <Header></Header>
        <Assortiment></Assortiment>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Restaurant
