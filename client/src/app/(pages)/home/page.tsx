import ComponentProfile from '@/components/(profile)/profile';
import ComponentTag from '@/components/(profile)/tag';
import ComponentSummary from '@/components/(profile)/summary';
import ComponentHistory from '@/components/(profile)/history';

import dataProfile from '@/data/profile.json';
import dataTags from '@/data/tags.json';
import dataSummary from '@/data/summary.json';
import dataHistory from '@/data/history.json';

export default function Page() {
  return (
    <>
      <ComponentProfile dataProfile={dataProfile} />
      <ComponentTag dataTags={dataTags} />
      <ComponentSummary dataSummary={dataSummary} />
      <ComponentHistory dataHistory={dataHistory} />
    </>
  )
}
