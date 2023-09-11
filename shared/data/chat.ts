import { iChatData } from '../interface/chat';

const nameSender = 'Anonymous';
const nameAdmin = 'Admin';

let chatList: iChatData[] = [
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

export {
  chatList
}