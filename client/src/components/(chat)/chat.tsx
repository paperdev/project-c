import ComponentChatData from '@/components/(chat)/chatData';
import { chatList } from 'shared/data/chat';

export default function ComponentChat() {
  return(
    <>
      <div className=''>
        {
          chatList.map((text, index) => {
            return (
              <ComponentChatData key={index} chatData={text} />
            )
          })
        }
      </div>
    </>
  )
}