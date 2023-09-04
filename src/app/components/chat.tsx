import { LuCodesandbox, LuSmartphone } from 'react-icons/lu';
import { CONSTANT } from '@/lib/contant';

export interface iChatData {
  avatar: string;
  name: string;
  text: string;
  time: string;
  isSender: boolean;
}

export default function ComponentChat({
  children,
  chatData
}: {
  children: React.ReactNode,
  chatData: iChatData,
}) {
  
  const chatPosition = chatData.isSender ? 'paper-chat-end' : 'paper-chat-start';
  return(
    <>
      <div className={`paper-chat ${chatPosition}`}>
        <div className='paper-chat-image avatar'>
            {
              chatData.avatar 
              ? (
                  <div className={`${CONSTANT.iconWidth} rounded-full`}>
                    <img src={chatData.avatar} />
                  </div>
                ) 
              : (
                  chatData.isSender
                  ? (<LuSmartphone className={`${CONSTANT.iconWidth} ${CONSTANT.iconHeight}`}></LuSmartphone>)
                  : (<LuCodesandbox className={`${CONSTANT.iconWidth} ${CONSTANT.iconHeight}`}></LuCodesandbox>)
                )
            }
        </div>

        <div className='paper-chat-header'>
          {chatData.name}
          <time className='ml-2 text-xs opacity-50'>
            {chatData.time}
          </time>
        </div>

        <div className='paper-chat-bubble'>
          {chatData.text}
        </div>

      </div>
    </>
  )
}