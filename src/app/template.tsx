import { DataProfile } from '@/data/profile';
import { DataTags } from '@/data/tags';
import { DataSummary } from '@/data/summary';
import { DataHistory } from '@/data/history';
import paperCSS from '@/paper.module.scss';

export default function Template({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`paper-join paper-join-vertical flex mx-auto paper-artboard paper-view ${paperCSS.desktopWidth}`}>
    
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