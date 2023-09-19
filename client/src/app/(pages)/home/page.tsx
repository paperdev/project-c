import ComponentProfile from '@/components/(profile)/profile';
import ComponentTag from '@/components/(profile)/tag';
import ComponentSummary from '@/components/(profile)/summary';
import ComponentHistory from '@/components/(profile)/history';

import { iProfileAll } from '@/shared/interface/profile';

async function getPofileAll() {
  const res = await fetch(process.env.PROFILE_URL);
 
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
 
  return res.json();
}

export default async function Page() {
  const profileAll: iProfileAll= await getPofileAll();

  return (
    <>
      <ComponentProfile dataProfile={profileAll.profile} />
      <ComponentTag dataTags={profileAll.tags} />
      <ComponentSummary dataSummary={profileAll.summary} />
      <ComponentHistory dataHistory={profileAll.history} />
    </>
  )
}
