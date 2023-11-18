'use client';

import { LuCodesandbox, LuSmartphone } from 'react-icons/lu';
import { iChatData } from '@/shared/interface/chat';
import React from 'react';
import { Input } from '@nextui-org/react';

export default function ComponentChatData({
  chatData
}: {
  chatData: iChatData,
}) {
  const chatPosition = chatData.isSender ? 'justify-end' : 'justify-start';
  
  return(
    <div className={`flex ${chatPosition}`}>
      <div className='mt-7'>
          {
            chatData.avatar 
            ? (
                <div className='paper-icon-width paper-icon-height rounded-full'>
                  <img src={chatData.avatar} />
                </div>
              ) 
            : (
                chatData.isSender
                ? (<LuSmartphone className='paper-icon-width paper-icon-height'></LuSmartphone>)
                : (<LuCodesandbox className='paper-icon-width paper-icon-height'></LuCodesandbox>)
              )
          }
      </div>

      <div className='ml-1'>
        <Input
          label={chatData.name}
          labelPlacement='outside'
          isReadOnly
          value={chatData.text}
          description={chatData.time}
        />
      </div>
    </div>
  )
}