/** @format */


import { getAuthSession } from '@/utils/auth'
import { prisma } from '@/utils/connect'
import { NextResponse, NextRequest } from 'next/server'


// CREATE APPOINTMENT
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

// GET APPOINTMENTS BY USER EMAIL
export const GET = async (req: NextRequest, res: NextResponse) => {
    const session = await getAuthSession()

    if (session) {
        const appointments = await prisma.appointment.findMany({
            where: {
                userEmail: session.user.email!
            }
        })
        return new NextResponse(JSON.stringify(appointments), { status: 200 })
    } else {
        return new NextResponse(
            JSON.stringify({ message: 'You are not authenticated !' }),
            { status: 401 }
        )
    }
}

