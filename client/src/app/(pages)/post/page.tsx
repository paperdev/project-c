import ComponentPost from '@/components/(post)/post';
import { iPost } from '@/shared/interface/post';

async function getPostList() {
  const res = await fetch(
    process.env.POST_URL,
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
  const dataPost: iPost[]= await getPostList();

  return (
    <>
      <ComponentPost dataPost={dataPost} />
    </>
  )
}
