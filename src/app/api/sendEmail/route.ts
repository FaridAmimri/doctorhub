import { Resend } from 'resend';
import EmailTemplate from '../../../../emails';
import { NextResponse, NextRequest } from 'next/server'


const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async (req: NextRequest, res: NextResponse) => {
    const response = await req.json();

    try {
        const email = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: 'farid.amimri@gmail.com',
            subject: 'Appointment booking confirmation',
            react: EmailTemplate(response)
        })
        return new NextResponse(JSON.stringify(email), { status: 201 })
    } catch (error) {
        console.log(error)
        return new NextResponse(JSON.stringify({ message: 'Something went wrong' }), { status: 500 })
    }
}