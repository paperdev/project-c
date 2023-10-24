import { Injectable } from '@nestjs/common';
import { iContent } from '@/shared/interface/content';
import { contentList } from '@/shared/data/content';

@Injectable()
export class ContentService {
  private contentList: iContent[] = contentList;

  findAll(): iContent[] {
    return this.contentList;
  }
}
