'use client';

import { iProfile } from '@/data/profile';
import Image from 'next/image';
import Link from 'next/link';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LuGithub, LuMail } from 'react-icons/lu';

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

export default async function ComponentProfile({
  children,
  dataProfile
}: {
  children: React.ReactNode,
  dataProfile: iProfile
}) {
  return (
    <div className='py-8 px-8 max-w-md mx-auto rounded-xl shadow-md md:max-w-2xl space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6'>
      <Image className='block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0' src={dataProfile.avatar} width={100} height={100} alt={dataProfile.name}/>
      
      <div className='text-center space-y-2 sm:text-left'>
        <div className='space-y-0.5'>

          <p className='text-lg font-semibold'>
            {dataProfile.name}
          </p>

          <p className='text-gray-500 font-medium'>
            {dataProfile.jobTitle}
          </p>
          
          <p className='paper-join text-accent pt-2'>
            <Link className='paper-tooltip' data-tip='click to open' href={dataProfile.github} target='_blank'>
                <LuGithub className='w-6 h-6'></LuGithub>
            </Link>
            <button className='px-2 paper-tooltip' data-tip='click to copy' onClick={() => {copyText(dataProfile.email)}}>
              <LuMail className='w-6 h-6'></LuMail>
            </button>
          </p>

          <ToastContainer/>
        </div>
      </div>
    </div>
  )
}