import React from 'react'

import { SectionTitle, Tabs } from 'components'
import { IoAlbums, IoGift, IoMegaphone, IoNewspaper, IoCalendar } from 'react-icons/io5'

export const SectionNotifications = () => {
  const clickHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const value = (e.target as HTMLAnchorElement).innerText
  }

  return (
    <div className="px-2">
      <SectionTitle title="Xabarlar" />
      <Tabs titles={titles} onClick={clickHandler} data={news} />
      <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-2 py-5">
        {news.map(({ title, date, message }) => (
          <div className="text-zinc-400 flex flex-col" key={title}>
            <p className="flex flex-row items-center gap-1 uppercase text-xs text-zinc-400">
              <IoCalendar />
              {date}
            </p>
            <h1 className="text-sm sm:text-base text-zinc-600 md:text-lg font-semibold uppercase">
              {title}
            </h1>

            <p className="text-xs sm:text-base text-zinc-500 md:text-lg">{message}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <a
          href="#"
          className="text-xs sm:text-base uppercase text-zinc-400 hover:text-blue-600 underline flex gap-1 items-center"
        >
          <IoAlbums className="w-4 h-4 sm:h-5 sm:w-5" />
          Barcha yangiliklar
        </a>
      </div>
    </div>
  )
}

const titles = [
  { name: 'Yangiliklar', logo: <IoNewspaper className="sm:h-6 sm:w-6" /> },
  { name: 'Tanlovlar', logo: <IoGift className="sm:h-6 sm:w-6" /> },
  { name: 'Bildirmalar', logo: <IoMegaphone className="sm:h-6 sm:w-6" /> },
]

const news = [
  {
    title: 'Yangi tarif rejalari',
    date: '20 okt',
    message:
      'Hurmatli abonentlar sizni yangi tarif rejalari bilan xursand qilishga shoshiladilar. Yangi HomeFree va HomeWiFi tariflar tizimi bu — maksimal tezlikda cheksiz internet!',
  },
  {
    title: 'O‘qituvchi va murabbiylar kuni bilan!',
    date: '01 okt',
    message:
      'Hammaga sog‘lik va baxt tilaymiz. Sizning sharafli kasbingiz sizga ulkan muvaffaqiyatlar, eng asosiysi, qilgan ishingiz rohat va mamnuniyat olib kelsin. Bayramingiz bilan!',
  },
  {
    title: 'Gpon',
    date: '16 avg',
    message: 'GPON texnologiyasini ulashning afzalliklari.',
  },
]
