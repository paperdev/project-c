import { Request } from '@/lib/request';
import ComponentHistory from '@/components/history';

interface iHistory {
  companyName: string;
  beginYear: number;
  beginMonth: number;
  endYear: number;
  endMonth: number;
  description: string;
};

const getDataHistory = async (): Promise<iHistory[]> => {
  const resultJson = await Request('history.json');
  const jsonHistory: iHistory[] = resultJson as unknown as iHistory[];
  return jsonHistory;
}

async function DataHistory({
  children,
}: {
  children: React.ReactNode,
}) {
  const jsonHistory = await getDataHistory();

  return (
    <div>
      <ComponentHistory dataHistory={jsonHistory}><></></ComponentHistory>
    </div>
  )
}

export {
  type iHistory,
  getDataHistory,
  DataHistory,
}