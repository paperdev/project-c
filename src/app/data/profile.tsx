import 'server-only';
import { Request } from '@/utilities/request';
import ComponentProfile from '@/components/profile';

interface iProfile {
  name: string;
  avatar: string;
  jobTitle: string;
  github: string;
  email: string;
};

// TODO: delete
const dataProfile: iProfile = {
  name: 'Kevin',
  avatar: 'https://github.com/paperdev.png',
  jobTitle: 'Mobile game server developer',
  github: 'https://github.com/paperdev',
  email: 'paperdev0@gmail.com',
};

async function DataProfile({
  children,
}: {
  children: React.ReactNode,
}) {
  const resultJson = await Request('profile.json');
  const jsonProfile: iProfile = resultJson as unknown as iProfile;
  
  return (
    <div>
      <ComponentProfile dataProfile={jsonProfile}><></></ComponentProfile>
    </div>
  )
}

export {
  type iProfile,
  dataProfile,
  DataProfile
}