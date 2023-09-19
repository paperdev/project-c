import { Injectable } from '@nestjs/common';
import { chatList as defaulChatList, nameAdmin } from '@/shared/data/chat';
import { iChatData } from '@/shared/interface/chat';

@Injectable()
export class ChatService {
  private chatList: iChatData[] = defaulChatList;

  create(chatData: iChatData): iChatData {
    const localTime = new Date();
    const localTimeFormat = localTime.getFullYear() 
      + '-' + localTime.getMonth() 
      + '-' + localTime.getDate()
      + ' ' + localTime.getHours()
      + ':' + localTime.getMinutes()
      + ':' + localTime.getSeconds();
    chatData.time = localTimeFormat;
    chatData.isSender = true;

    // TODO: 
    const resChatData: iChatData = {
      avatar: '',
      name: nameAdmin,
      text: chatData.text + ' again.',
      time: localTimeFormat,
      isSender: false,
    };
    
    this.chatList.push(chatData);
    this.chatList.push(resChatData);
    return resChatData;
  }

  findAll(): iChatData[] {
    return this.chatList;
  }

  findOne(id: string): iChatData | undefined {
    return this.chatList[parseInt(id)] ? this.chatList[parseInt(id)] : undefined ;;
  }
}
