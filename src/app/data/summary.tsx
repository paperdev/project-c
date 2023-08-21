import 'server-only';
import { Request } from '@/utilities/request';
import ComponentSummary from '@/components/summary';

interface iSummary {
  contents: string;
};

async function DataSummary({
  children,
}: {
  children: React.ReactNode,
}) {
  const resultJson = await Request('./summary.json');
  const jsonSummary: iSummary = resultJson as unknown as iSummary;

  return (
    <div>
      <ComponentSummary children={children} dataSummary={jsonSummary}></ComponentSummary>
    </div>
  )
}

export {
  type iSummary,
  DataSummary
}