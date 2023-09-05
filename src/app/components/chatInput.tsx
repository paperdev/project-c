'use client';

import ComponentChat, { iChatData } from '@/components/chat';
import { useRef, useState } from 'react';

const nameSender = 'Anonymous';
const nameAdmin = 'Admin';

const textList: iChatData[] = [
  {
    avatar: '',
    name: nameAdmin,
    text: 'How can I help you?',
    time: '2020-1-1',
    isSender: false,
  },
  {
    avatar: '',
    name: nameSender,
    text: 'Hello world!',
    time: '2020-1-1',
    isSender: true,
  },
  {
    avatar: '',
    name: nameAdmin,
    text: 'Hello world again!',
    time: '2020-1-1',
    isSender: false,
  },
  {
    avatar: '',
    name: nameSender,
    text: 'Hello world?',
    time: '2020-1-1',
    isSender: true,
  },
  {
    avatar: '',
    name: nameAdmin,
    text: 'Hello world again?',
    time: '2020-1-1',
    isSender: false,
  },
];

export default function ComponentChatInput({
  children,
}: {
  children: React.ReactNode,
}) {
  const paperChatRef = useRef<HTMLDivElement>(null);
  const [inputValue, setInputValue] = useState('');
  const [chatList, setChatList] = useState(textList);

  const checkKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.keyCode === 13) {
      if (!inputValue) {
        return;
      }
      sendText(inputValue);
      setInputValue('');
    }
  }

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const currentValue = event.currentTarget.previousElementSibling?.getAttribute('value');
    if (!currentValue) {
      return;
    }
    sendText(currentValue);
    setInputValue(event.currentTarget.value);
  }

  const sendText = (text: string) => {
    textList.push(
      {
        avatar: '',
        name: nameSender,
        text: text,
        time: new Date().toString(),
        isSender: true,
      }
    );
    setChatList(textList);
    paperChatRef.current!.scrollTop = paperChatRef.current!.scrollHeight;
  }
  
  return(
    <div className="flex flex-col h-full">
      <div className='flex-grow overflow-y-auto' ref={paperChatRef}>
        {
          chatList.map((text, index) => {
            return (
              <ComponentChat key={index} chatData={text}><></></ComponentChat>
            )
          })
        }
      </div>

      <div className='paper-join w-full px-2 py-2 sticky bottom-0 bg-base-100'>
        <input type='text' placeholder='Ask me anything' value={inputValue}
          className='paper-input paper-input-bordered paper-join-item w-full paper-input-chat-text overscroll-auto' 
          onKeyDown={(event: React.KeyboardEvent) => {checkKeyDown(event);}}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setInputValue(event.currentTarget.value);}}
          />
        <button type='submit' className='paper-btn paper-btn-outline paper-join-item' 
          onClick={(event: React.MouseEvent<HTMLButtonElement>) => {onClick(event);}}>
          Send
        </button>
      </div>

    </div>
  )
}