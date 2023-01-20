export interface ICarouselProps {
  delay?: number
  className?: string
  pagination?: boolean
  navigation?: boolean
  breakPoints?: boolean
  spaceBetween: number
  slidesPerView: number
  effect: 'slide' | 'fade'
  children: React.ReactNode
}
