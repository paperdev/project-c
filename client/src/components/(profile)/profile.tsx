'use client';

import React from "react";
import {Avatar} from "@nextui-org/react";
import Link from 'next/link';
import { toast, ToastContainer } from 'react-toastify';
import { LuGithub, LuMail, LuLinkedin } from 'react-icons/lu';
import { iProfile } from '@/shared/interface/profile';
import 'react-toastify/dist/ReactToastify.css';


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
    <div className='flex flex-col justify-center items-center text-center sm:flex sm:flex-row sm:justify-center sm:items-center sm:py-4 mx-auto rounded-xl shadow-md'>
      <Avatar src={dataProfile.avatar} className="w-24 h-24"></Avatar>

      <div className='sm:pl-4'>
        <div className='py-2'>
          <div className='text-primary text-lg font-semibold'>
            {dataProfile.name}
          </div>

          <div className='font-medium'>
            {dataProfile.jobTitle}
          </div>
          
          <div className='flex space-x-2 mt-2'>
            <Link href={dataProfile.github} target='_blank'>
                <LuGithub className='w-6 h-6'></LuGithub>
            </Link>
            <Link href={dataProfile.linkedin} target='_blank'>
                <LuLinkedin className='w-6 h-6'></LuLinkedin>
            </Link>
            <button data-tip='click to copy' onClick={() => {copyText(dataProfile.email)}}>
              <LuMail className='w-6 h-6'></LuMail>
            </button>
          </div>

          <ToastContainer/>
        </div>
      </div>
    </div>
  )
}