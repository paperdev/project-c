'use client';

import { LuUser2 } from 'react-icons/lu';

export default function ComponentComment({
  dataComments
}: {
  dataComments: string[],
}) {
  const iconWeight = 'w-6';
  const iconHeight = 'h-6';

  if (!dataComments) {
    return;
  }

  return (
    <>
      <ol className='relative border-l border-gray-200 dark:border-gray-700'>
        {
          dataComments.map((comment, index) => {
            return (
              <li key={index} className={`${(index !== dataComments.length - 1) ? 'mb-10' : ''} ml-6`}>
                <div className={`absolute flex items-center justify-center ${iconHeight} ${iconWeight} bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900`}>
                  <LuUser2 className={`${iconHeight} ${iconWeight} text-gray-600 cursor-pointer`}></LuUser2>
                </div>
                <div className='p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600'>
                  <div className='items-center justify-between mb-3 sm:flex'>
                    <time className='mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0'>{`${index + 1} hours ago`}</time>
                    <div className='text-sm font-normal text-gray-500 lex dark:text-gray-300'>{comment}</div>
                  </div>
                  <div className='p-3 text-xs italic font-normal text-gray-500 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300'>{`sub comment ${comment}`}</div>
                  <div className='p-3 mt-1 text-xs italic font-normal text-gray-500 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300'>{`sub comment ${comment} again`}</div>
                </div>
              </li>
              )
          })
        }
      </ol>
    </>
  )
}
