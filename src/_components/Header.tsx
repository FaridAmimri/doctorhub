/** @format */

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  const Menu = [
    {
      id: 1,
      name: 'Home',
      path: '/'
    },
    {
      id: 2,
      name: 'Explore',
      path: '/explore'
    },
    {
      id: 3,
      name: 'Contact Us',
      path: '/'
    }
  ]
  return (
    <header className='mx-auto max-w-screen-xl p-4 flex items-center justify-between shadow-sm'>
      <div className='flex items-center w-full'>
        <Image src='/logo.svg' alt='logo' width={180} height={80} />
        <ul className='hidden justify-center md:flex gap-8 md:w-full'>
          {Menu.map((item) => (
            <Link key={item.id} href={item.path}>
              <li className='hover:text-primary hover:scale-105 transition-all ease-in-out cursor-pointer'>
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <Button>Get Started</Button>
    </header>
  )
}

export default Header
