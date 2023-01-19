import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, EffectFade } from 'swiper'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'

import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'

const images = [
  'https://istv.uz/uploads/IMG_6228.JPG',
  'https://istv.uz/uploads/IMG_4313.JPG',
  'https://istv.uz/uploads/IMG_4586.JPG',
  'https://istv.uz/uploads/banners/4k-min.png',
  'https://istv.uz/uploads/banners/IMG_5958.JPG',
]

export const SectionPreviewCarousel = () => {
  return (
    <Swiper
      className="relative group"
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{ delay: 6000 }}
      effect="fade"
      navigation={{ prevEl: '.btn-prev-slide', nextEl: '.btn-next-slide' }}
      modules={[Navigation, Autoplay, EffectFade]}
    >
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
      <div className="z-10 ease-in duration-300 cursor-pointer bg-zinc-800/60 text-white absolute top-[calc(50%-16px)] group-hover:left-0 -left-10 btn-prev-slide">
        <BiChevronLeft className="w-8 h-8" />
      </div>
      <div className="z-10 ease-in duration-300 cursor-pointer bg-zinc-800/60 text-white absolute top-[calc(50%-16px)] group-hover:right-0 -right-10 btn-next-slide ">
        <BiChevronRight className="w-8 h-8" />
      </div>
    </Swiper>
  )
}
