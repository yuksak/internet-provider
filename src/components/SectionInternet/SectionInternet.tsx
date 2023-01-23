import React, { useState } from 'react'
import { SwiperSlide } from 'swiper/react'

import { Carousel, Tabs, SectionTitle } from 'components'
import { InternetItem } from './InternetItem'

import { fresh, homeFree, homeOptical, homeWifi, tariffs } from './mock'
import { ICard } from './SectionInternet.types'

export const SectionInternet = () => {
  const [cards, setCards] = useState<ICard[]>(homeWifi)

  const clickHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const value = (e.target as HTMLAnchorElement).innerText

    if (value === 'HomeWifi') {
      setCards(homeWifi)
    }
    if (value === 'HomeFree') {
      setCards(homeFree)
    }
    if (value === 'HomeOptical') {
      setCards(homeOptical)
    }
    if (value === 'Fresh') {
      setCards(fresh)
    }
  }

  return (
    <div className="py-0 sm:py-5 px-2">
      <SectionTitle title="Uy uchun internet" />
      <Tabs titles={tariffs} onClick={clickHandler} data={cards} />
      <Carousel
        className="sm:py-3"
        pagination={true}
        navigation={true}
        spaceBetween={5}
        slidesPerView={4}
        breakPoints={true}
        effect="slide"
      >
        {cards.map((datas) => (
          <SwiperSlide key={datas.title}>
            <InternetItem {...datas} />
          </SwiperSlide>
        ))}
      </Carousel>
    </div>
  )
}
