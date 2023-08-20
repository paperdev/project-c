'use client';

import Image from 'next/image';
import Link from 'next/link';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { dataProfile } from '@/data/profile';

let isToast = false;
const delayTime = 2000;
const copyText = async (text: string) => {
  navigator.clipboard.writeText(text);
  if (isToast) {
    return;
  }
  const toastId = toast.success(
    'Email is copied',
    {
      autoClose: delayTime,
    }
  );
  isToast = true;
  setTimeout(() => {
    isToast = false;
  }, delayTime)
}

export default function ComponentProfile({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='py-8 px-8 max-w-md mx-auto rounded-xl shadow-md md:max-w-2xl space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6'>
      <Image className='block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0' src={dataProfile.avatar} width={100} height={100} alt={dataProfile.name}/>
      <div className='text-center space-y-2 sm:text-left'>
        <div className='space-y-0.5'>
          <p className='text-lg text-black font-semibold'>
            {dataProfile.name}
          </p>
          <p className='text-gray-500 font-medium'>
            {dataProfile.jobTitle}
          </p>
          <p>
            <Link href={dataProfile.github} target='_blank' className='text-sm text-purple-600 font-semibold hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2'>
              {dataProfile.github}
            </Link>
          </p>
          <button onClick={() => {copyText(dataProfile.email)}} title='click to copy'>
            {dataProfile.email}
          </button>
          <ToastContainer/>
        </div>
      </div>
    </div>
  )
}