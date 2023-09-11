'use client';

import { useState } from 'react';

const nameSender = 'Anonymous';
const nameAdmin = 'Admin';

export default function ComponentChatInput() {
  const [inputValue, setInputValue] = useState('');
  const [chatList, setChatList] = useState([]);

  const checkKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.code === 'Enter') {
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
    chatList.push(
      {
        avatar: '',
        name: nameSender,
        text: text,
        time: new Date().toString(),
        isSender: true,
      }
    );
    setChatList(chatList);
  }
  
  return(
    <>
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
    </>
  )
}