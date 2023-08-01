'use client';

import { dataSummary } from '@/data/summary';

export default function ComponentSummary({children}: {children: React.ReactNode}) {
  return(
    <div className="py-8 px-8 max-w-md mx-auto bg-white rounded-xl shadow-md md:max-w-2xl space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      <div className="tracking-wide text-sm text-indigo-500 font-semibold">Summary</div>
      <p className="mt-2 text-gray-500">
        {dataSummary.contents}
      </p>
  </div>
  )
}