import SignIn from '@/components/authentication/SignIn';
import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div>
            <h1 className='text-2xl text-center font-bold'>Sign In</h1>
            {/* <SignUp></SignUp> */}
            <SignIn></SignIn>
            <div className='flex justify-center items-center mt-5 mx-auto'>
                <h1>Already have an account?</h1>
                <Link href={'/sign-up'}>Sign up</Link>
            </div>
        </div>
    );
};

export default page;