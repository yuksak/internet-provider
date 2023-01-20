import React, { FC } from 'react'
import { Button } from 'components/Button'
import { CardInfoTitle } from './ListTitle'

import {
  IoInfinite,
  IoTv,
  IoStorefront,
  IoSunny,
  IoMoon,
  IoSpeedometer,
  IoPricetag,
  IoRocket,
} from 'react-icons/io5'
import { SiExpertsexchange } from 'react-icons/si'
import { TiStarburst } from 'react-icons/ti'
import { ICard } from './SectionInternet.types'

export const InternetItem: FC<ICard> = ({
  title,
  price,
  priceForOneMb,
  speed,
  speedAfter1,
  speedAfter20,
  tasix,
  istv,
  iptv,
  newBadge,
  limit,
}) => {
  return (
    <div className="w-full p-10 bg-white border sm:p-12">
      <h5 className="mb-4 text-2xl font-medium text-zinc-500 flex gap-2 items-center">
        <mark className={`px-2 text-white bg-[#${newBadge ? 'FD5959' : '94DD4D'}]`}>{title}</mark>
      </h5>
      {newBadge && (
        <span className="inline-flex absolute top-5 right-5 items-center bg-[#FD5959]/20 text-[#FD5959] text-xs font-medium mr-2 px-2.5 py-0.5">
          <TiStarburst className="w-3 h-3 mr-1 text-[#FD5959]" />
          New
        </span>
      )}
      <div className="flex items-center gap-1 text-zinc-800 dark:text-white">
        <span className="text-3xl text-zinc-800 font-bold tracking-tight">{price}</span>
        <span className="ml-1 font-normal text-sm text-zinc-500 flex flex-col">
          <span>so'm</span>
          <span>/oy</span>
        </span>
      </div>
      <ul role="list" className="space-y-5 my-7">
        {speedAfter1 && (
          <CardInfoTitle title="01:00-20:00" value={speedAfter1}>
            <IoSunny className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5" />
          </CardInfoTitle>
        )}

        {speedAfter20 && (
          <CardInfoTitle title="20:00-01:00" value={speedAfter20}>
            <IoMoon className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5" />
          </CardInfoTitle>
        )}

        {speed && (
          <CardInfoTitle title="Tezlik" value={speed}>
            <IoSpeedometer className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5" />
          </CardInfoTitle>
        )}

        {priceForOneMb && (
          <CardInfoTitle title="1 MB narxi" value={priceForOneMb}>
            <IoPricetag className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5" />
          </CardInfoTitle>
        )}

        {limit && (
          <CardInfoTitle title="Trafik" value={limit}>
            <IoInfinite className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5" />
          </CardInfoTitle>
        )}

        <CardInfoTitle title="ISTV" value={istv}>
          <IoStorefront className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5" />
        </CardInfoTitle>

        <CardInfoTitle title="IPTV" value={`${iptv} dan ortiq telekanal`}>
          <IoTv className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5" />
        </CardInfoTitle>

        <CardInfoTitle title="TAS-IX" value={tasix}>
          <SiExpertsexchange className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5" />
        </CardInfoTitle>
      </ul>

      <Button name="Ulanish">
        <IoRocket className="h-4 w-4 mr-1" />
      </Button>
    </div>
  )
}
