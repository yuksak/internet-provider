import React from 'react'

import { SwiperSlide } from 'swiper/react'
import { Carousel } from 'components/Carousel'

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
          <button
            type="button"
            className="absolute right-[10%] bottom-[10%] text-white font-medium text-[10px] sm:text-sm ease-in duration-200 hover:text-blue-500 uppercase flex items-center gap-0.5 bg-zinc-800/60 hover:bg-white px-2 py-1 sm:px-5 sm:py-2.5 text-center mr-2 md:mr-0"
          >
            Batafsil
          </button>
        </SwiperSlide>
      ))}
    </Carousel>
  )
}
