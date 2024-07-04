import { authOptions } from '@/app/api/auth/[...nextauth]/auth';
import SignUp from '@/components/authentication/SignUp';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';



const page = async () => {
    const session = await getServerSession(authOptions);
    console.log("🚀 ~ file: page.tsx:12 ~ page ~ session:", session)
    if(session) {
        // redirect('/');
    }
    return (
        <main className='w-full'>
            <h1 className='text-2xl text-center font-bold' >Sign Up</h1>
            <SignUp></SignUp>
            <div className='flex justify-center items-center mt-5 mx-auto'>
                <h1>Already have an account?</h1>
                <Link href={'/sign-in'}>Sign In</Link>
            </div>
        </main>
    );
};

export default page;