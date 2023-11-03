import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { PostService } from './post.service';
import { iPost, iPostUpdateBody } from '@/shared/interface/post';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  async create(@Body() postData: iPost): Promise<iPost> {
    return this.postService.create(postData);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() commentData: iPostUpdateBody): Promise<iPost | undefined> {
    return this.postService.update(id, commentData);
  }

  @Get()
  async findAll(): Promise<iPost[]> {
    return this.postService.findAll();
  }
}
