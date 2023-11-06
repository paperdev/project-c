'use client';

import { LuPlus, LuX } from 'react-icons/lu';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function ComponentPostInput({
}: {
  }) {
  const iconWeight = 'w-7';
  const iconHeight = 'h-7';

  const newPostDialogRef = useRef(null);
  const inputMessagesRef = useRef(null);
  const inputTagsRef = useRef(null);
  const inputFilesRef = useRef(null);
  const router = useRouter();

  const onClickShowDialog = (event: React.MouseEvent) => {
    if (!newPostDialogRef) {
      return;
    }

    newPostDialogRef.current.showModal();
  }

  const onClickNewPost = (event: React.MouseEvent) => {
    if (!inputMessagesRef.current.value && !inputTagsRef.current.value && !inputFilesRef.current.value) {
      return;
    }

    sendPost(inputMessagesRef.current.value, [inputTagsRef.current.value], [inputFilesRef.current.value]);
  }

  const sendPost = async (inputMessages: string, inputTags: string[], inputFiles: string[]) => {
    await fetch(process.env.POST_URL, 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          {
            title: inputMessages,
            tags: inputTags,
            urls: inputFiles
          }
        )
      }
    );
    router.refresh();
  }

  return (
    <>
      <div className='paper-btn paper-btn-circle sticky ml-auto bottom-5 right-5 animate-pulse' onClick={(event: React.MouseEvent) => { onClickShowDialog(event); }}>
        <LuPlus className={`${iconHeight} ${iconWeight} cursor-pointer`}></LuPlus>
      </div>

      <dialog id='newPostDialog' ref={newPostDialogRef} className='paper-modal'>
        
        <div className='paper-modal-box'>
          <div className='flex items-center justify-center'>
              <form className='p-5 w-full'>

                <div className='py-2 '>
                  <input ref={inputMessagesRef} type='text' placeholder='Input some messages' className='paper-input paper-input-bordered w-full' />
                </div>

                <div className='py-2 '>
                  <input ref={inputTagsRef} type='text' placeholder='Input some tags' className='paper-input paper-input-bordered w-full' />
                </div>
                
                <div className='py-2'>
                  <input ref={inputFilesRef} type='file' className='paper-file-input paper-file-input-bordered w-full' />
                </div>
                
                <div className='py-2'>
                  <button className='paper-btn w-full paper-glass bg-indigo-500 hover:bg-indigo-500 hover:bg-opacity-90 text-white text-base capitalize' onClick={(event: React.MouseEvent) => { onClickNewPost(event); }}>Post</button>
                </div>
                
              </form>
          </div>
        </div>

        <form method='dialog' className='paper-modal-backdrop'>
          <button>close</button>
        </form>

      </dialog>
    </>
  )
}