'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const nameSender = 'Anonymous';

const ScoollHevavior: Record<string, ScrollBehavior> = {
  smooth: 'smooth',
  instant: 'instant',
  auto: 'auto',
}

export default function ComponentChatInput() {
  const [inputValue, setInputValue] = useState('');
  const router = useRouter();

  const checkKeyDown = async (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.code === 'Enter') {
      if (!inputValue) {
        return;
      }
      await sendText(inputValue);
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

  const sendText = async (text: string) => {
    await fetch(process.env.CHAT_URL, 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          {
            avatar: '',
            name: nameSender,
            text: text,
            time: '',
            isSender: true,
          }
        )
      }
    );
    router.refresh();
    scrollToBottom(ScoollHevavior.smooth);
  }

  useEffect(() => {
    scrollToBottom(ScoollHevavior.instant);
  });

  const scrollToBottom = (behavior: ScrollBehavior) => {
    const chatBottomDiv = document.getElementById('chatBottomDiv');
    if (!chatBottomDiv) {
      return;
    }
    chatBottomDiv.scrollIntoView({ behavior: behavior, block: 'end', inline: 'nearest' });
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