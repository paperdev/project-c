import { Controller, Get, Param } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { iProfileAll, tProfileAll } from '@/shared/interface/profile';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get()
  async findAll(): Promise<iProfileAll> {
    return this.profileService.findAll();
  }

  @Get(':type')
  async findOne(@Param('type') type: string): Promise<tProfileAll | undefined> {
    return this.profileService.findOne(type)
      ? this.profileService.findOne(type)
      : undefined;
  }
}
