import { NextAuthOptions, getServerSession, User } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { prisma } from './connect';


// Add to User session isAdmin property
declare module 'next-auth' {
    interface Session {
        user: User & {
            isAdmin: Boolean;
        }
    }
}

// Add to jwt isAdmin property
declare module 'next-auth/jwt' {
    interface JWT {
        isAdmin: Boolean;
    }
}

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: 'jwt'
    },
    providers: [

        GoogleProvider({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string
        })
    ],
    callbacks: {
        async session({ token, session }) {
            if (token) {
                session.user.isAdmin = token.isAdmin
            }
            return session
        },
        async jwt({ token }) {
            const user = await prisma.user.findUnique({
                where: {
                    email: token.email as string,
                }
            })
            token.isAdmin = user?.isAdmin as boolean
            return token
        }
    }
}

export const getAuthSession = () => getServerSession(authOptions)