import { LuCodesandbox, LuSmartphone } from 'react-icons/lu';
import { iChatData } from 'shared/interface/chat';

export default function ComponentChatData({
  chatData
}: {
  chatData: iChatData,
}) {
  const chatPosition = chatData.isSender ? 'paper-chat-end' : 'paper-chat-start';
  
  return(
    <div className={`paper-chat ${chatPosition}`}>
      <div className='paper-chat-image avatar'>
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
  )
}