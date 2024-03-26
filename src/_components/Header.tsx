/** @format */
'use client'

import { Stethoscope } from 'lucide-react'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import Image from 'next/image'

const Header = () => {
  const { data: session } = useSession()

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
      path: '/contact'
    }
  ]
  return (
    <header className='mx-auto max-w-screen-xl p-4 flex items-center justify-between shadow-sm'>
      <div className='flex items-center w-full'>
        <Link href='/' className='flex gap-2 items-center'>
          <Stethoscope className='text-primary' />
          <span className='text-primary font-bold'>DoctorHub</span>
        </Link>

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
      {!session ? (
        <Link
          href='/login'
          className='bg-primary p-2 rounded-lg text-white text-sm w-28 text-center'
        >
          Get Started
        </Link>
      ) : (
        <Popover>
          <PopoverTrigger>
            {session.user.image ? (
              <Image
                src={session.user.image}
                alt='profile-image'
                width={40}
                height={40}
                className='rounded-full'
              />
            ) : (
              <Image
                src={
                  'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'
                }
                alt='profile-image'
                width={40}
                height={40}
                className='rounded-full'
              />
            )}
          </PopoverTrigger>
          <PopoverContent className='w-44'>
            <ul className='flex  flex-col gap-2'>
              <Link
                href={'/my-booking'}
                className='cursor-pointer
             hover:bg-slate-100 p-2 rounded-md'
              >
                My Booking
              </Link>
              <li
                className='cursor-pointer
             hover:bg-slate-100 p-2 rounded-md'
                onClick={() => signOut()}
              >
                Logout{' '}
              </li>
            </ul>
          </PopoverContent>
        </Popover>
      )}
    </header>
  )
}

export default Header
