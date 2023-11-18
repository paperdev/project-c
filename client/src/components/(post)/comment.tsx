'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Input, Button, Avatar } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

export default function ComponentComment({
  postId,
  dataComments
}: {
  postId: number,
  dataComments: string[],
}) {
  const iconWeight = 'w-6';
  const iconHeight = 'h-6';

  const inputCommentRef = useRef(null);
  const [recentComments, setRecentComments] = useState(dataComments);
  const router = useRouter();

  useEffect(() => {
    setRecentComments(dataComments);
  }, [dataComments]);

  const sendComment = async (comment: string) => {
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

    setRecentComments([comment, ...recentComments]);

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

      await sendComment(inputCommentRef.current.value);

      resetInputComment();
    }
  }

  const onClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!inputCommentRef.current.value) {
      return;
    }
    await sendComment(inputCommentRef.current.value);

    resetInputComment();
  }

  return (
    <>
      <div className='w-full px-2 pb-6 bg-base-100'>
        <Input
          type='text'
          variant='underlined'
          placeholder='Leave a comment'
          endContent={
            <Button
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => { onClick(event); }}
            >
              Reply
            </Button>
          }
          ref={inputCommentRef}
          onKeyDown={(event: React.KeyboardEvent) => { checkKeyDown(event); }}
        />
      </div>

      <ol className='relative border-l border-dotted border-gray-200 dark:border-gray-700'>
        {
          recentComments.map((comment, index) => {
            return (
              <li key={index} className={`${(index !== recentComments.length - 1) ? 'mb-3' : ''} ml-6`}>
                <div className={`absolute flex items-center justify-center ${iconHeight} ${iconWeight} -left-3 mt-4`}>
                  <Avatar showFallback src='' className={`${iconHeight} ${iconWeight} cursor-pointer`}></Avatar>
                </div>

                <Input
                  type='text'
                  isDisabled
                  variant='underlined'
                  value={comment}
                  endContent={
                    <time className='whitespace-nowrap text-default-400 text-small'>{`${index + 1} hours ago`}</time>
                  }
                />
              </li>
            )
          })
        }
      </ol>
    </>
  )
}
