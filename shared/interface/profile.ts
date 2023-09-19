import { iTag } from '@/shared/interface/tag';
import { iSummary } from '@/shared/interface/summary';
import { iHistory } from '@/shared/interface/history';

interface iProfile {
  name: string;
  avatar: string;
  jobTitle: string;
  github: string;
  linkedin: string;
  email: string;
};

interface iProfileAll {
  profile: iProfile;
  tags: iTag[];
  history: iHistory[];
  summary: iSummary;
}

export {
  iProfile,
  iProfileAll
}