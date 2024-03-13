/** @format */
'use client'

import { DoctorType } from '@/types/types'
import Image from 'next/image'
import { Skeleton } from '@/components/ui/skeleton'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { publicRequest } from '@/utils/request'

const DoctorList = ({ title = 'Popular Doctors' }) => {
  const { data: session } = useSession()
  const router = useRouter()

  const { isLoading, error, data } = useQuery({
    queryKey: ['doctors'],
    queryFn: () => fetch(publicRequest + 'doctors').then((res) => res.json())
  })

  const handleBooking = async () => {
    !session ? router.push('/login') : null
  }

  return (
    <div className='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 my-10'>
      <h2 className='font-bold text-xl'>{title}</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-4'>
        {data
          ? data.map((doctor: DoctorType) => (
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
                  <button
                    className='p-2 px-3 border-[1px] border-primary text-primary rounded-full w-full text-center text-[11px] mt-2 hover:bg-primary hover:text-white'
                    onClick={handleBooking}
                  >
                    Book now
                  </button>
                </div>
              </div>
            ))
          : [0, 1, 2, 3].map((item, index) => (
              <div
                key={index}
                className='border-[1px] p-3 rounded-lg flex flex-col space-y-3'
              >
                <Skeleton className='h-[200px] w-[260px] rounded-lg' />
                <div className='space-y-2'>
                  <Skeleton className='h-6 w-[100px]' />
                  <Skeleton className='h-4 w-[150px]' />
                  <Skeleton className='h-4 w-[100px]' />
                  <Skeleton className='h-4 w-[200px]' />
                  <Skeleton className='h-8 w-full' />
                </div>
              </div>
            ))}
      </div>
    </div>
  )
}

export default DoctorList
