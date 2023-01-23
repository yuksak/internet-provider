import React from 'react'
import {
  SectionInternet,
  SectionNotifications,
  SectionPayment,
  SectionPreviewCarousel,
  SectionResources,
} from 'components'

export const MainPage = () => {
  return (
    <div>
      <SectionPreviewCarousel />
      <SectionNotifications />
      <SectionResources />
      <SectionInternet />
      <SectionPayment />
    </div>
  )
}
