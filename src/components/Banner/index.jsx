import React from 'react'
import styles from './Banner.module.sass'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Banner1 from './Banner1.png'
import Banner2 from './Banner2.png'
import Banner3 from './Banner3.png'
import Banner4 from './Banner4.png'

const slideContent = [
  {
    title: 'Онлайн-сервис доставки еды на дом',
    description:
      'Закажите изысканные блюда прямо к своему порогу. Курьер, одетый в стиле шеф-повара, доставит вам настоящий кулинарный праздник!',
    image: Banner1
  },
  {
    title: 'Кулинарные шедевры прямо к вам',
    description:
      'Наши повара создают настоящие шедевры. Откройте для себя мир вкуса в каждом бите!',
    image: Banner2
  },
  {
    title: 'Безопасная доставка в любое время суток',
    description:
      'Наши курьеры работают 24/7, чтобы удовлетворить ваш вкус в любое время. Всегда в перчатках, маске и с антисептиком для вашей безопасности.',
    image: Banner3
  },
  {
    title: 'Эксклюзивные предложения для постоянных клиентов',
    description:
      'Станьте постоянным клиентом, и мы удивим вас эксклюзивными предложениями и скидками. Ощутите привилегии вкуса с нашим онлайн-сервисом!',
    image: Banner4
  }
]

const settings = {
  arrows: false,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000
}

function Banner () {
  return (
    <Slider {...settings}>
      {slideContent.map((slide, index) => (
        <div key={index} className={styles.sliderItem}>
          <img
            src={slide.image}
            alt={`slide-${index}`}
            className={styles.img}
          />
          <div className={styles.slideContent}>
            <h1>{slide.title}</h1>
            <p>{slide.description}</p>
          </div>
        </div>
      ))}
    </Slider>
  )
}

export default Banner
