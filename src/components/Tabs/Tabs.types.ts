import { ICard } from 'components/SectionInternet/SectionInternet.types'
import { SVGProps } from 'react'

interface ITitle {
  name: string
  logo?: SVGProps<SVGElement>
}

interface INews {
  date: string
  title: string
  message: string
}

export interface ITabsProps {
  data: ICard[] | INews[]
  titles: ITitle[]
  children?: React.ReactNode
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void
}
