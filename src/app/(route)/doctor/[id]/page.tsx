/** @format */

import { getData } from '@/utils/getData'
import { DoctorType } from '@/types/types'
import Image from 'next/image'
import { GraduationCap, Linkedin, MapPin, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const DoctorPage = async ({ params }: { params: { id: string } }) => {
  const doctorId = params.id
  const doctor: DoctorType = await getData(`doctors/${doctorId}`)
  const doctorList: DoctorType[] = await getData(`doctors`)

  return (
    <div className='p-5 md:px-20'>
      <h2 className='font-bold text-[22px]'>Details</h2>
      <div className='grid grid-cols-1 md:grid-cols-4'>
        {/* Doctor Details */}
        <div className='col-span-3'>
          <div className='col-span-3 grid grid-cols-1 md:grid-cols-3 border-[1px] p-5 mt-5 rounded-lg'>
            {/* Doctor Image */}
            <div>
              <Image
                src={doctor.image}
                alt='doctor profile'
                width={200}
                height={270}
                className='rounded-lg w-full h-[270px] object-cover'
              />
            </div>

            {/* Doctor Info */}
            <div className='col-span-2 mt-5 md:px-10 flex flex-col gap-3 items-baseline'>
              <h2 className='font-bold text-2xl'>{doctor.name}</h2>
              <div className='flex gap-2 text-gray-500 text-md'>
                <GraduationCap />
                <span>{doctor.experiences} Years of Experience</span>
              </div>
              <div className='flex gap-2 text-gray-500 text-md'>
                <MapPin />
                <span>{doctor.address}</span>
              </div>
              <div className='text-[10px] bg-blue-100 py-1 px-4 rounded-lg text-primary'>
                {doctor.catSlug}
              </div>
              <div className='flex gap-3'>
                <Linkedin />
                <X />
              </div>
              <Button className='mt-3 rounded-full'>Book Appointment</Button>
            </div>
          </div>

          <div className=' border-[1px] p-5 mt-5 rounded-lg'>
            <h2 className='font-bold text-xl'>About Me</h2>
            <p className='col-span-2 text-gray-500 tracking-wide'>
              {doctor.about}
            </p>
          </div>
        </div>

        {/* Doctor Suggestion */}
        <div className=' p-4 border-[1px] mt-5 md:ml-5 rounded-lg '>
          <h2 className='mb-3 font-bold'>Suggestions</h2>

          {doctorList.map((doctor) => (
            <Link
              key={doctor.id}
              href={'/details/' + doctor.id}
              className=' mb-4 p-3 shadow-sm w-full 
            cursor-pointer hover:bg-slate-100
            rounded-lg flex items-center gap-3'
            >
              <Image
                src={doctor.image}
                alt='Doctorprofile'
                width={70}
                height={70}
                className='w-[70px] h-[70px] rounded-full object-cover'
              />
              <div className='mt-3 flex-col flex gap-1 items-baseline'>
                <h2
                  className='text-[10px] bg-blue-100 p-1 rounded-full px-2
                     text-primary'
                >
                  {doctor.catSlug}
                </h2>
                <h2 className='font-medium text-sm'>{doctor.name}</h2>
                <h2 className='text-primary text-xs flex gap-2'>
                  {/* <GraduationCap/> */}
                  {doctor.experiences}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DoctorPage
