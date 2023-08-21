import 'server-only';
import { Request } from '@/utilities/request';
import ComponentHistory from '@/components/history';

interface iHistory {
  companyName: string;
  contents: {
    beginDate: string;
    endDate: string;
    description: string;
  }[];
};

async function DataHistory({
  children,
}: {
  children: React.ReactNode,
}) {
  const resultJson = await Request('./history.json');
  const jsonHistory: iHistory[] = resultJson as unknown as iHistory[];

  return (
    <div>
      <ComponentHistory children={children} dataHistory={jsonHistory}></ComponentHistory>
    </div>
  )
}

export {
  type iHistory,
  DataHistory
}