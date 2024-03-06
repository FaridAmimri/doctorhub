/** @format */

import { prisma } from '@/utils/connect'
import { NextResponse } from 'next/server'


// FETCH ALL DOCTORS
export const GET = async () => {
    try {
        const doctors = await prisma.doctor.findMany()
        return new NextResponse(JSON.stringify(doctors), { status: 200 })
    } catch (error) {
        console.log(error)
        return new NextResponse(
            JSON.stringify({ message: 'Something went wrong' }),
            { status: 500 }
        )
    }
}
