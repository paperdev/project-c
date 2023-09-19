import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { ChatService } from './chat.service';
import { iChatData } from '@/shared/interface/chat';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post()
  async create(@Body() chatData: iChatData): Promise<iChatData> {
    return this.chatService.create(chatData);
  }

  @Get()
  async findAll(): Promise<iChatData[]> {
    return this.chatService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<iChatData | undefined> {
    return this.chatService.findOne(id);
  }
}
