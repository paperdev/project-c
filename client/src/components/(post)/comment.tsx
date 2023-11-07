'use client';

import { useRef } from 'react';
import { LuUser2 } from 'react-icons/lu';
import { useRouter } from 'next/navigation';


export default function ComponentComment({
  dataComments
}: {
  dataComments: string[],
}) {
  const iconWeight = 'w-6';
  const iconHeight = 'h-6';

  const inputCommentRef = useRef(null);
  const router = useRouter();

  if (!dataComments) {
    return;
  }

  const sendComment = async (div: HTMLElement, comment: string) => {
    const postId = div.parentElement.parentElement.parentElement.getAttribute('data-postid');

    await fetch(process.env.POST_URL + '/' + postId, 
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          {
            comment: comment,
          }
        )
      }
    );

    router.refresh();
  }

  const resetInputComment = () => {
    inputCommentRef.current.value = '';
  }

  const checkKeyDown = async (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.code === 'Enter') {
      if (!inputCommentRef.current.value) {
        return;
      }

      sendComment(inputCommentRef.current, inputCommentRef.current.value);

      resetInputComment();
    }
  }

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!inputCommentRef.current.value) {
      return;
    }
    sendComment(inputCommentRef.current, inputCommentRef.current.value);

    resetInputComment();
  }
  

  return (
    <>
      <div className='paper-join w-full px-2 pb-6 bg-base-100'>
        <input ref={inputCommentRef} type='text' placeholder='Leave a comment' 
          className='paper-input paper-input-bordered paper-join-item w-full' 
          onKeyDown={(event: React.KeyboardEvent) => {checkKeyDown(event);}} >
        </input>

        <button type='button' className='paper-btn paper-btn-outline paper-join-item capitalize' 
          onClick={(event: React.MouseEvent<HTMLButtonElement>) => {onClick(event);}}>
          Reply
        </button>
      </div>

      <ol className='relative border-l border-dotted border-gray-200 dark:border-gray-700'>
        {
          dataComments.map((comment, index) => {
            return (
              <li key={index} className={`${(index !== dataComments.length - 1) ? 'mb-3' : ''} ml-6`}>
                <div className={`absolute flex items-center justify-center ${iconHeight} ${iconWeight} bg-blue-100 rounded-full -left-3 mt-4 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900`}>
                  <LuUser2 className={`${iconHeight} ${iconWeight} text-gray-600 cursor-pointer`}></LuUser2>
                </div>
                <div className='p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600'>
                  <div className='items-center justify-between sm:flex'>
                    <time className='mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0'>{`${index + 1} hours ago`}</time>
                    <div className='text-sm font-normal text-gray-500 lex dark:text-gray-300'>{comment}</div>
                  </div>
                </div>
              </li>
              )
          })
        }
      </ol>
    </>
  )
}
