/** @format */
'use client'

import { Stethoscope } from 'lucide-react'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

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
        <div className='flex gap-2 items-center'>
          <Avatar>
            <AvatarImage src={session?.user?.image!} alt='profil' />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span className='cursor-pointer' onClick={() => signOut()}>
            Logout
          </span>
        </div>
      )}
    </header>
  )
}

export default Header
