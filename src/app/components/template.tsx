import { DataProfile } from '@/data/profile';
import { DataTags } from '@/data/tags';
import { DataSummary } from '@/data/summary';
import { DataHistory } from '@/data/history';

export default function Template({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
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