import { Controller, Get, Post, Body } from '@nestjs/common';
import { PostService } from './post.service';
import { iPost } from '@/shared/interface/post';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  async create(@Body() postData: iPost): Promise<iPost> {
    return this.postService.create(postData);
  }

  @Get()
  async findAll(): Promise<iPost[]> {
    return this.postService.findAll();
  }
}
