"use client";
import React from 'react';
import { signOut } from 'next-auth/react';

const page = () => {
  
  return (
    <main>
      <div className='md:border w-fit rounded-md text-[#7D879C] text-base bg-white'>
        <div className='lg:flex gap-5 items-center px-6 py-4'>
          <h1 className='text-black text-2xl'>Order Details</h1>
          <h3>Order ID</h3>
          <h3>Order Products</h3>
          <button onClick={() => signOut()} className='bg-[#7D879C] text-white px-6 py-3 rounded-md mt-6 flex items-start justify-center'>Log Out</button>
          <button onClick={async () => {
            await fetch('/api/user').then(res => res.json()).then(data => console.log(data))
          }} className='bg-[#7D879C] text-white px-6 py-3 rounded-md mt-6 flex items-start justify-center'>User</button>

        </div>
        <hr className='' />
        <div className='lg:flex items-start '>
          <div className='m-6 md:flex items-center md:border rounded-md  w-fit'>
            <div className='border rounded-md md:border-none md:rounded-none'>
              <h1 className='p-6 uppercase'>Billing Address</h1>
              <hr className='mb-6' />
              <div className='p-6 m-6 border rounded-md'>
                <h1 className='text-black text-lg'>Al Mamun</h1>
                <p className='pb-10'>4140 Parker Rd. Allentown, New Mexico 31134</p>
                <h1>Email</h1>
                <p className='pb-4 text-black'>dainne.ressell@gmail.com</p>
                <h1>Phone</h1>
                <p className='text-black'>(671) 555-0110</p>
              </div>
            </div>
            <div className='md:border-l mt-8 md:mt-0 rounded-md md:rounded-none border md:border-y-0 md:border-r-0'>
              <h1 className='p-6 uppercase'>Billing Address</h1>
              <hr className='mb-6' />
              <div className='p-6 m-6 border rounded-md'>
                <h1 className='text-black text-lg'>Al Mamun</h1>
                <p className='pb-10'>4140 Parker Rd. Allentown, New Mexico 31134</p>
                <h1>Email</h1>
                <p className='pb-4 text-black'>dainne.ressell@gmail.com</p>
                <h1>Phone</h1>
                <p className='text-black'>(671) 555-0110</p>
              </div>
            </div>
          </div>

          <div className='border rounded-md mr-6 mt-6 ml-6 mb-6 lg:ml-0 lg:mb-0 h-full '>
            <div className='flex items-center justify-between p-6'>
              <div>
                <h1>Order ID:</h1>
                <p>#4152</p>
              </div>
              <div className='w-[1px] h-12 bg-[#7D879C] mx-6'></div>
              <div>
                <h1>Payment Method:</h1>
                <p>Paypal</p>
              </div>

            </div>
            <hr className='pb-1' />
            <div className='p-6 space-y-5'>
              <div className='flex justify-between items-center'>
                <h1>Total</h1>
                <h1>$100</h1>
              </div>
              <hr />
              <div className='flex justify-between items-center'>
                <h1>Discount</h1>
                <h1>20%</h1>
              </div>
              <hr />
              <div className='flex justify-between items-center'>
                <h1>Shipping</h1>
                <h1>Free</h1>
              </div>
              <hr />
              <div className='flex justify-between items-center text-xl'>
                <h1>Total</h1>
                <h1>$84.00</h1>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
};

export default page;