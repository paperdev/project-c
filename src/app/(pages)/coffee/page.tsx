import { CONSTANT } from '@/lib/contant';
import ComponentChat, { iChatData } from '@/components/chat';

export default function Coffee({
  children,
}: {
  children: React.ReactNode
}) {
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
  ]

  return (
    <div className={`paper-join paper-join-vertical flex mx-auto paper-artboard paper-view ${CONSTANT.desktopWidth}`}>
      {textList.map((text, index) => {
        return <ComponentChat chatData={text}><></></ComponentChat>
      })}
      
    </div>
  )
}