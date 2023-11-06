'use client';

import { iPost } from '@/shared/interface/post';
import { LuHeart, LuMessageSquare, LuShare2, LuBookmark } from 'react-icons/lu';
import ComponentComment from '@/components/(post)/comment';
import ComponentPostInput from '@/components/(post)/postInput';
import ComponentPostImage from '@/components/(post)/postImage';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ComponentPost({
  dataPost
}: {
  dataPost: iPost[]
}) {
  const iconWeight = 'w-7';
  const iconHeight = 'h-7';
  const maxNumber = 100;

  const [dataComments, setDataComments] = useState([]);
  const [likeEventTriggered, setLikeEventTriggered] = useState(false);
  const router = useRouter();

  const onClickComment = (event: React.MouseEvent, comments: string[]) => {
    setDataComments(comments);

    const commentsElement = event.currentTarget.parentElement.parentElement.parentElement.nextElementSibling;
    const isHidden = commentsElement.classList.contains('hidden');
    isHidden ? commentsElement.classList.remove('hidden') : commentsElement.classList.add('hidden');
  }

  const onClickLike = async (event: React.MouseEvent) => {
    if (!event.currentTarget) {
      return;
    }

    const postId = event.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.getAttribute('data-postid');
    await fetch(process.env.POST_URL + '/' + postId, 
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          {
            likeCount: 1,
          }
        )
      }
    );    

    const divLikeButtonAni = document.getElementById('likeButtonAni');
    divLikeButtonAni.classList.remove('invisible');
    divLikeButtonAni.classList.add('animate__animated', 'animate__fadeOutUp');
    if (!likeEventTriggered) { 
      divLikeButtonAni.addEventListener('animationend', () => {
        divLikeButtonAni.classList.add('invisible');
        divLikeButtonAni.classList.remove('animate__animated', 'animate__fadeOutUp');
          setLikeEventTriggered(true);
      });
    }
    
    router.refresh();
  }

  return (
    <div className='flex flex-col'>
      {
        dataPost.map((post, index) => {
          return (
            <div key={index} data-postid={post.id} className='mx-auto rounded-xl shadow-lg transform transition duration-500 py-2'>
              <div>
                <div className='text-2xl mt-2 ml-4 font-bold text-gray-800 cursor-pointer hover:text-gray-900 transition duration-100'>{post.title}</div>
                <span className='text-xs mt-2 ml-6 dark:text-gray-400'>{post.time}</span>
                <div className='flex'>
                {
                  post.tags.map((tag, index) => {
                    return <div key={index} className='ml-4 mt-1 mb-2 text-gray-700 hover:underline cursor-pointer'>{`#${tag}`}</div>
                  })
                }
              </div> 
              </div>
              
              <div>
                <ComponentPostImage imgUrls={post.urls}></ComponentPostImage>
              </div>
              
              <div className='flex p-4 justify-between'>
                <div className='flex items-center space-x-4'>
                  <LuBookmark className={`${iconHeight} ${iconWeight} text-gray-600 cursor-pointer`}></LuBookmark>
                  <LuShare2 className={`${iconHeight} ${iconWeight} text-gray-600 cursor-pointer`}></LuShare2>
                </div>
                
                <div className='flex space-x-2'>

                  <div className='flex space-x-1 items-center'>
                    <LuMessageSquare onClick={(event: React.MouseEvent) => {onClickComment(event, post.comments);}} className={`${iconHeight} ${iconWeight} text-gray-600 cursor-pointer`}></LuMessageSquare>
                    <div>{(maxNumber < post.comments.length ? `${maxNumber}+` : `${post.comments.length}`) }</div>
                  </div>

                  <div className='flex space-x-1 items-center'>
                    <div className='flex relative'>
                      <LuHeart onClick={(event: React.MouseEvent) => {onClickLike(event);}} className={`${iconHeight} ${iconWeight} text-gray-600 cursor-pointer fill-red-500`}></LuHeart>
                      <div>{(maxNumber < post.likeCount ? `${maxNumber}+` : `${post.likeCount}`)}</div>

                      <div id='likeButtonAni' className='flex absolute invisible'>
                        <LuHeart className={`${iconHeight} ${iconWeight} text-gray-600 cursor-pointer fill-red-500`}></LuHeart>
                        <div>+1</div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <div className='hidden p-6'>
                <ComponentComment dataComments={dataComments}></ComponentComment>
              </div>
            </div>
            )
        })
      }
      <ComponentPostInput />
    </div>
  )
}
