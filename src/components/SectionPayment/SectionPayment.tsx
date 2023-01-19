import React from 'react'

export const SectionPayment = () => {
  return (
    <div className="py-5">
      <div className="container mx-auto flex flex-row justify-around py-8 md:py-10">
        {links.map(({ name, logo, website }) => (
          <a key={name} href={website} className="cursor-pointer">
            <img src={logo} className="h-5 sm:h-10" />
          </a>
        ))}
      </div>
    </div>
  )
}

const links = [
  {
    name: 'paynet',
    logo: 'https://paynet.uz/medias/media/big/7/logo-paynet.png',
    website: 'https://paynet.uz/',
  },
  {
    name: 'payme',
    logo: 'http://marketing.uz/uploads/articles/1331/article-original.png',
    website: 'https://payme.uz/home/main',
  },
  {
    name: 'uzumbank',
    logo: 'https://uzumbank.uz/_nuxt/img/apelsin-logo-light.2367a6d.svg',
    website: 'https://uzumbank.uz/',
  },
  {
    name: 'click',
    logo: 'https://click.uz/click/images/logo-new.png',
    website: 'https://click.uz/',
  },
]
