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
    <nav className='p-4 flex items-center justify-between shadow-sm'>
      <div className='flex items-center gap-10'>
        <Image src='/logo.svg' alt='logo' width={180} height={80} />
        <ul className='hidden md:flex gap-8'>
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
    </nav>
  )
}

export default Header
