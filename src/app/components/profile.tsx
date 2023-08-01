'use client';

import Image from 'next/image';
import Link from 'next/link';
import { dataProfile } from '@/data/profile';

export default function ComponentProfile({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md md:max-w-2xl space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      <Image className="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0" src={dataProfile.avatar} width={100} height={100} alt={dataProfile.name}/>
      <div className="text-center space-y-2 sm:text-left">
        <div className="space-y-0.5">
          <p className="text-lg text-black font-semibold">
            {dataProfile.name}
          </p>
          <p className="text-gray-500 font-medium">
            {dataProfile.jobTitle}
          </p>
        </div>
        <Link href={dataProfile.homepage} target="_blank" className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
          Homepage
        </Link>
      </div>
    </div>
  )
}