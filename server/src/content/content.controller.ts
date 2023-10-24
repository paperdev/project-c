import { Controller, Get } from '@nestjs/common';
import { ContentService } from './content.service';
import { iContent } from '@/shared/interface/content';

@Controller('content')
export class ContentController {
  constructor(private readonly contentService: ContentService) {}

  @Get()
  async findAll(): Promise<iContent[]> {
    return this.contentService.findAll();
  }
}
