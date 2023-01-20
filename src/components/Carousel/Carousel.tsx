import React, { FC } from 'react'

import { Swiper } from 'swiper/react'
import { Navigation, Autoplay, EffectFade, Pagination } from 'swiper'

import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import { ICarouselProps } from './Carousel.types'

import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'

export const Carousel: FC<ICarouselProps> = ({
  className,
  pagination,
  navigation,
  spaceBetween,
  slidesPerView,
  children,
  effect,
  delay,
  breakPoints,
}) => {
  return (
    <Swiper
      className={`relative group ${className}`}
      breakpoints={breakPoints ? breakPointsValues : {}}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      autoplay={{ delay: delay ? delay : 6000 }}
      effect={effect}
      pagination={pagination ? { clickable: true, dynamicBullets: true } : false}
      navigation={navigation ? { prevEl: '.btn-prev-slide', nextEl: '.btn-next-slide' } : false}
      modules={[Navigation, Autoplay, EffectFade, Pagination]}
    >
      {children}
      {navigation && (
        <>
          <div className="z-10 ease-in duration-300 cursor-pointer bg-blue-500/40 text-white absolute top-[calc(50%-16px)] group-hover:left-0 -left-10 btn-prev-slide">
            <BiChevronLeft className="w-8 h-8" />
          </div>
          <div className="z-10 ease-in duration-300 cursor-pointer bg-blue-500/40 text-white absolute top-[calc(50%-16px)] group-hover:right-0 -right-10 btn-next-slide ">
            <BiChevronRight className="w-8 h-8" />
          </div>
        </>
      )}
    </Swiper>
  )
}

const breakPointsValues = {
  1024: {
    slidesPerView: 4,
    spaceBetween: 10,
  },

  768: {
    slidesPerView: 3,
    spaceBetween: 10,
  },

  640: {
    slidesPerView: 2,
  },

  100: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
}
