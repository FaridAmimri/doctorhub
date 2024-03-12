/** @format */

import { prisma } from '@/utils/connect'
import { NextResponse, NextRequest } from 'next/server'



// FETCH ALL DOCTORS
export const GET = async (req: NextRequest) => {
    const { searchParams } = new URL(req.url)
    const cat = searchParams.get('cat')

    try {
        const doctors = await prisma.doctor.findMany({
            where: {
                ...(cat && { catSlug: cat }),
            }
        })
        return new NextResponse(JSON.stringify(doctors), { status: 200 })
    } catch (error) {
        console.log(error)
        return new NextResponse(
            JSON.stringify({ message: 'Something went wrong' }),
            { status: 500 }
        )
    }
}

