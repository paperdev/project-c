'use client';

import React from 'react';
import { Divider } from '@nextui-org/react';
import { iHistory } from '@/shared/interface/history';

export default function ComponentHistory({
  dataHistory
}: {
  dataHistory: iHistory[]
}) {
  return (
    <>
      <div className='py-2 px-8 mx-auto space-y-2 sm:py-2 sm:flex sm:items-center sm:space-y-0 sm:space-x-6'>
        <div className='tracking-wide text-primary-500 font-semibold'>
          History
        </div>
        <div>
          {
            dataHistory.map((history, index) => {
              return (
                <div key={index} className='mx-auto'>
                  {
                    (index !== 0) && <hr className='h-px bg-base-300 border-0'></hr>
                  }
                  <div className='ml-2 flex-shrink-0 flex flex-col'>
                    <div className='font-semibold text-primary-300'>{history.companyName}</div>
                    <div className='mt-1 ml-2 text-warning-500 text-sm'>{`${history.beginYear}-${history.beginMonth}`} ~ {`${history.endYear}-${history.endMonth}`}</div>
                  </div>
                  <div className='mt-2 ml-2 text-default-500 whitespace-pre-wrap'>
                    {
                      history.description.map((description, index) => {
                        return <>• {description}<br /></>;
                      })
                    }
                  </div>

                  <Divider className="my-4" />
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}