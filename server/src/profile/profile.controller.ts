import { Controller, Get, Param } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { iProfileAll } from '@/shared/interface/profile';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get()
  async findAll(): Promise<iProfileAll> {
    return this.profileService.findAll();
  }

}
