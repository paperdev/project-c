'use client';

import { dataTags } from '@/data/tags';

export default function ComponentTag({children}: {children: React.ReactNode}) {
  return(
  <div className="flex justify-center items-center flex-wrap space-x-2 py-2 mx-auto rounded-xl max-w-md md:max-w-2xl bg-white">
    {
      dataTags.map((tag) => {
        return <div className="inline-flex items-center px-2 py-1 bg-purple-200 hover:bg-purple-300 rounded-full text-sm text-purple-600">{`#${tag}`}</div>
      })
    }
  </div> 
  )
}