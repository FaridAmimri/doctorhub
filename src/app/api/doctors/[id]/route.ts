/** @format */

import { prisma } from '@/utils/connect'
import { NextResponse, NextRequest } from 'next/server'


// GET SINGLE DOCTOR DETAILS
export const GET = async (
    req: NextRequest, { params }: { params: { id: string } }) => {
    const { id } = params;

    try {
        const doctor = await prisma.doctor.findUnique({
            where: {
                id: id,
            },
        });

        return new NextResponse(JSON.stringify(doctor), { status: 200 });
    } catch (err) {
        console.log(err);
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong!" }),
            { status: 500 }
        );
    }
};