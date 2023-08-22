import 'server-only';
import { Request } from '@/utilities/request';
import ComponentTag from '@/components/tag';

async function DataTags({
  children,
}: {
  children: React.ReactNode,
}) {
  const resultJson = await Request('./tags.json');
  const jsonTags: string[] = resultJson as unknown as string[];

  return (
    <div>
      <ComponentTag children={children} dataTags={jsonTags}></ComponentTag>
    </div>
  )
}

export {
  DataTags
}