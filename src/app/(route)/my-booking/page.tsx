/** @format */
'use client'
import { useEffect, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import BookingList from './_components/BookingList'

const MyBookingPage = () => {
  return (
    <div className='px-4 sm:px-10 mt-10'>
      <h2 className='font-bold text-2xl'>My Booking</h2>
      <Tabs defaultValue='upcoming' className='w-full mt-5'>
        <TabsList className='w-full justify-start'>
          <TabsTrigger value='upcoming'>Upcoming</TabsTrigger>
          <TabsTrigger value='expired'>Expired</TabsTrigger>
        </TabsList>
        <TabsContent value='upcoming'>
          <BookingList
          // bookingList={filterUserBooking('upcoming')}
          // updateRecord={()=>getUserBookingList()}
          // expired={false}
          />
        </TabsContent>
        <TabsContent value='expired'>
          {/* <BookingList bookingList={filterUserBooking('expired')}
                updateRecord={()=>getUserBookingList()}
                expired={true}
                /> */}
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default MyBookingPage
