/** @format */

import { prisma } from '@/utils/connect'
import { NextResponse, NextRequest } from 'next/server'



export const POST = async (req: NextRequest) => {
    try {
        const body = await req.json()
        const appointment = await prisma.appointment.create({ data: body })
        return new NextResponse(JSON.stringify(appointment), { status: 201 })

    } catch (error) {
        console.log(error)
        return new NextResponse(JSON.stringify({ message: 'Something went wrong' }), { status: 500 })
    }
}