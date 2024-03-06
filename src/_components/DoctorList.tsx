/** @format */

import { publicRequest } from '@/utils/request'
import { DoctorType } from '@/types/types'
import Image from 'next/image'

const getData = async () => {
  const res = await fetch(publicRequest + 'doctors', {
    cache: 'no-store'
  })

  if (!res.ok) {
    throw new Error('Failed')
  }

  return res.json()
}

const DoctorList = async () => {
  const doctors: DoctorType[] = await getData()

  return (
    <div className='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 my-10'>
      <h2 className='font-bold text-xl'>Popular Doctors</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-4'>
        {doctors &&
          doctors.map((doctor) => (
            <div
              key={doctor.id}
              className='border-[1px] rounded-lg p-3 cursor-pointer hover:border-primary hover:shadow-lg transition-all ease-in-out'
            >
              <Image
                src={doctor.image}
                alt='doctor'
                width={500}
                height={200}
                className='h-[200px] w-full object-cover rounded-lg'
              />
              <div className='mt-3 flex items-baseline flex-col gap-1'>
                <h2 className='text-[10px] bg-blue-100 py-1 px-4 rounded-lg text-primary'>
                  {doctor.catSlug}
                </h2>
                <h3 className='font-bold'>{doctor.name}</h3>
                <span className='text-primary text-sm'>
                  {doctor.experiences} Years
                </span>
                <p className='text-gray-500 text-sm'>{doctor.address}</p>
                <button className='p-2 px-3 border-[1px] border-primary text-primary rounded-full w-full text-center text-[11px] mt-2 hover:bg-primary hover:text-white'>
                  Book now
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default DoctorList
