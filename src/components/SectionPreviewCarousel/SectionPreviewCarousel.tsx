import React from 'react'

import { SwiperSlide } from 'swiper/react'
import { Carousel, Button } from 'components'

const images = [
  'https://istv.uz/uploads/IMG_6228.JPG',
  'https://istv.uz/uploads/IMG_4313.JPG',
  'https://istv.uz/uploads/IMG_4586.JPG',
  'https://istv.uz/uploads/banners/4k-min.png',
  'https://istv.uz/uploads/banners/IMG_5958.JPG',
]

export const SectionPreviewCarousel = () => {
  return (
    <Carousel navigation={true} spaceBetween={0} slidesPerView={1} effect="fade">
      {images.map((image) => (
        <SwiperSlide key={image}>
          <img src={image} className="w-full" />
          <Button
            name="Batafsil"
            className="absolute right-[10%] bottom-[10%] opacity-50 hover:opacity-100"
          />
        </SwiperSlide>
      ))}
    </Carousel>
  )
}
