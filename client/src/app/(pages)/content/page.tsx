import ComponentContent from '@/components/(content)/content';
import { iContent } from '@/shared/interface/content';

async function getContentList() {
  const res = await fetch(
    process.env.CONTENT_URL,
    {
      headers: {
        'Content-type': 'application/json;',
      },
    }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Page() {
  const dataContent: iContent[]= await getContentList();

  return (
    <>
      <ComponentContent dataContent={dataContent} />
    </>
  )
}
