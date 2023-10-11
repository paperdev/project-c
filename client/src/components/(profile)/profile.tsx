'use client';

import { iProfile } from '@/shared/interface/profile';
import Link from 'next/link';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LuGithub, LuMail, LuLinkedin } from 'react-icons/lu';

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
  dataProfile
}: {
  dataProfile: iProfile
}) {
  return (
    <div className='flex flex-col justify-center items-center text-center sm:flex sm:flex-row sm:justify-center sm:items-center sm:text-left sm:py-4 mx-auto rounded-xl shadow-md'>
      <div className='paper-avatar '>
        <div className='w-24 rounded-full'>
          <img src={dataProfile.avatar}/>
        </div>
      </div>
      
      <div className='paper-join sm:pl-4'>
        <div className='py-2'>
          <div className='text-primary text-lg font-semibold'>
            {dataProfile.name}
          </div>

          <div className='font-medium'>
            {dataProfile.jobTitle}
          </div>
          
          <div className='paper-join text-accent pt-2'>
            <Link className='px-1' href={dataProfile.github} target='_blank'>
                <LuGithub className='w-6 h-6'></LuGithub>
            </Link>
            <Link className='px-1' href={dataProfile.linkedin} target='_blank'>
                <LuLinkedin className='w-6 h-6'></LuLinkedin>
            </Link>
            <button className='px-1 paper-tooltip' data-tip='click to copy' onClick={() => {copyText(dataProfile.email)}}>
              <LuMail className='w-6 h-6'></LuMail>
            </button>
          </div>

          <ToastContainer/>
        </div>
      </div>
    </div>
  )
}