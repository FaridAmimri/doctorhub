/** @format */

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { getData } from '@/utils/getData'
import { SearchIcon } from 'lucide-react'
import Image from 'next/image'
import { CategoryType } from '@/types/types'
import { Skeleton } from '@/components/ui/skeleton'
import Link from 'next/link'

const CategoryList = async () => {
  const categories: CategoryType[] = await getData('categories')

  return (
    <div className='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'>
      <div className='flex flex-col items-center gap-2'>
        <h2 className='font-bold text-4xl tracking-wide'>
          Search <span className='text-primary'>Doctors</span>
        </h2>
        <p className='text-gray-500 text-xl'>
          Search Your Doctor and Book Appointment
        </p>

        <div className='flex w-full max-w-sm items-center space-x-2 mt-3'>
          <Input type='text' placeholder='Search...' />
          <Button type='submit'>
            <SearchIcon className='h-4 w-4 mr-2' />
            Search
          </Button>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 mt-5'>
          {categories.length > 0
            ? categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/category/${category.slug}`}
                  className='flex flex-col items-center gap-2 p-5 bg-blue-50 m-2 rounded-lg hover:scale-110 transition-all ease-in-out cursor-pointer'
                >
                  <Image
                    src={category.icon}
                    alt='icon'
                    width={40}
                    height={40}
                    className=''
                  />
                  <label className='text-sm'>{category.title}</label>
                </Link>
              ))
            : [0, 1, 2, 3, 4, 5].map((item, index) => (
                <div key={index} className='p-5'>
                  <Skeleton className='h-24 w-24 rounded-lg' />
                </div>
              ))}
        </div>
      </div>
    </div>
  )
}

export default CategoryList
