'use client';

import { dataTags } from '@/data/tags';

export default function ComponentTag({children}: {children: React.ReactNode}) {
  return(
  <div className="flex justify-center items-center flex-wrap space-x-2 py-2 mx-auto rounded-xl shadow-md max-w-md md:max-w-2xl">
    {
      dataTags.map((tag, index) => {
        return <div key={index} className="badge badge-primary badge-outline">{`#${tag}`}</div>
      })
    }
  </div> 
  )
}