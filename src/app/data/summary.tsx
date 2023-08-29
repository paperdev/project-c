import 'server-only';
import { Request } from '@/lib/request';
import ComponentSummary from '@/components/summary';

interface iSummary {
  contents: string;
};

async function DataSummary({
  children,
}: {
  children: React.ReactNode,
}) {
  const resultJson = await Request('summary.json');
  const jsonSummary: iSummary = resultJson as unknown as iSummary;

  return (
    <div>
      <ComponentSummary dataSummary={jsonSummary}><></></ComponentSummary>
    </div>
  )
}

export {
  type iSummary,
  DataSummary
}