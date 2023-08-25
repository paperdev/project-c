'use client';

import { iProfile } from '@/data/profile';
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
    <div className='flex flex-col justify-center items-center text-center sm:flex sm:flex-row sm:justify-center sm:items-center sm:text-left sm:py-4 mx-auto rounded-xl shadow-md'>
      <div className="paper-avatar ">
        <div className="w-24 rounded-full">
          <img src={dataProfile.avatar}/>
        </div>
      </div>
      
      <div className='paper-join sm:pl-4'>
        <div className='py-2'>
          <p className='text-primary text-lg font-semibold'>
            {dataProfile.name}
          </p>

          <p className='font-medium'>
            {dataProfile.jobTitle}
          </p>
          
          <p className='paper-join text-accent pt-1'>
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