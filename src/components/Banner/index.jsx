import React from 'react'
import styles from './Banner.module.sass'

function Banner () {
  return (
    <div className={styles.Banner}>
      <div className={styles.BannerContainer}>
        <h1>Онлайн-сервис доставки еды на дом</h1>
        <p>
          Блюда из любимого ресторана привезет курьер в перчатках, маске и с
          антисептиком
        </p>
      </div>
      <img
        src='/images/Banner.png'
        alt='BannerImg'
        className={styles.BannerImg}
      />
    </div>
  )
}

export default Banner
