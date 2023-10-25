import { Controller, Get } from '@nestjs/common';
import { PostService } from './post.service';
import { iPost } from '@/shared/interface/post';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  async findAll(): Promise<iPost[]> {
    return this.postService.findAll();
  }
}
