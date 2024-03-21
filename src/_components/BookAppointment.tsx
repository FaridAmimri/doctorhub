/** @format */
'use client'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Calendar } from '@/components/ui/calendar'
import { useState, useEffect } from 'react'
import { CalendarDays, Clock } from 'lucide-react'

const BookAppointment = () => {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [timeSlot, setTimeSlot] = useState<{}[]>([{}])
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | undefined>()

  useEffect(() => {
    getTime()
  }, [])

  const getTime = () => {
    const timeList: {}[] = []
    for (let i = 10; i <= 12; i++) {
      timeList.push({
        time: i + ':00 AM'
      })
      timeList.push({
        time: i + ':30 AM'
      })
    }
    for (let i = 1; i <= 6; i++) {
      timeList.push({
        time: i + ':00 PM'
      })
      timeList.push({
        time: i + ':30 PM'
      })
    }

    setTimeSlot(timeList)
  }

  const isPastDay = (day: Date) => {
    return day <= new Date()
  }

  const saveBooking = () => {
    const data = {
      data: {
        // UserName: user.given_name + ' ' + user.family_name,
        // Email: user.email,
        // Time: selectedTimeSlot,
        // Date: date,
        // doctor: doctor.id,
        // Note: note
      }
    }
    // console.log(data)
  }

  return (
    <Dialog>
      <DialogTrigger>
        <Button className='mt-3 rounded-full'>Book Appointment</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Book Appointment</DialogTitle>
          <DialogDescription>
            <div>
              <div className='grid grid-cols-1 md:grid-cols-2 mt-5'>
                {/* Calendar  */}
                <div className='flex flex-col gap-3 items-baseline'>
                  <h2 className='flex gap-2 items-center'>
                    <CalendarDays className='text-primary h-5 w-5' />
                    Select Date
                  </h2>
                  <Calendar
                    mode='single'
                    selected={date}
                    onSelect={setDate}
                    disabled={isPastDay}
                    className='rounded-md border'
                  />
                </div>
                {/* Time Slot */}
                <div className=' mt-3 md:mt-0'>
                  <h2 className='flex gap-2 items-center mb-3'>
                    <Clock className='text-primary h-5 w-5' />
                    Select Time Slot
                  </h2>
                  <div className='grid grid-cols-3 gap-2 border rounded-lg p-5'>
                    {timeSlot?.map((item: any, index) => (
                      <h2
                        key={index}
                        onClick={() => setSelectedTimeSlot(item.time)}
                        className={`p-2 border cursor-pointer text-center hover:bg-primary hover:text-white
                            rounded-full
                            ${
                              item.time == selectedTimeSlot &&
                              'bg-primary text-white'
                            }`}
                      >
                        {item.time}
                      </h2>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className='sm:justify-end'>
          <DialogClose asChild>
            <>
              <Button
                type='button'
                className='text-red-500 border-red-500'
                variant='outline'
              >
                Close
              </Button>
              <Button
                type='button'
                disabled={!(date && selectedTimeSlot)}
                onClick={() => saveBooking()}
              >
                Submit
              </Button>
            </>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default BookAppointment
