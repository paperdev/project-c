import { Injectable } from '@nestjs/common';
import { iProfileAll, tProfileAll } from '@/shared/interface/profile';
import { profileAll } from '@/shared/data/profile';

@Injectable()
export class ProfileService {
  private profileAll: iProfileAll = profileAll;

  findAll(): iProfileAll {
    return this.profileAll;
  }

  findOne(type: string): tProfileAll | undefined {
    return this.profileAll[type];
  }
}
