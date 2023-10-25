import { Injectable } from '@nestjs/common';
import { iPost } from '@/shared/interface/post';
import { postList } from '@/shared/data/post';

@Injectable()
export class PostService {
  private postList: iPost[] = postList;

  findAll(): iPost[] {
    return this.postList;
  }
}
