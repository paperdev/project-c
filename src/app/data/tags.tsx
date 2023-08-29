import 'server-only';
import { Request } from '@/lib/request';
import ComponentTag from '@/components/tag';

async function DataTags({
  children,
}: {
  children: React.ReactNode,
}) {
  const resultJson = await Request('tags.json');
  const jsonTags: string[] = resultJson as unknown as string[];

  return (
    <div>
      <ComponentTag dataTags={jsonTags}><></></ComponentTag>
    </div>
  )
}

export {
  DataTags
}