import { DataProfile } from '@/data/profile';
import { DataTags } from '@/data/tags';
import { DataSummary } from '@/data/summary';
import { DataHistory } from '@/data/history';
import { CONSTANT } from '@/lib/contant';

export default function Home({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`paper-join paper-join-vertical flex mx-auto paper-artboard paper-view ${CONSTANT.desktopWidth}`}>
    
      <div>
        <DataProfile>
        </DataProfile>
      </div>
      <div>
        <DataTags>
        </DataTags>
      </div>
      <div>
        <DataSummary>
        </DataSummary>
      </div>
      <div>
        <DataHistory>
        </DataHistory>
      </div>
    </div>
  )
}