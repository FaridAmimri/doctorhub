/** @format */

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'

const Category = () => {
  return (
    <div className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16'>
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
      </div>
    </div>
  )
}

export default Category
