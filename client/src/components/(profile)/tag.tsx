import { iTag } from '@/shared/interface/tag';

export default function ComponentTag({
  dataTags
}: {
  dataTags: iTag[],
}) {
  return(
    <div className='flex justify-center items-center flex-wrap space-x-2 py-2 mx-auto rounded-xl shadow-md'>
      {
        dataTags.map((tag: iTag, index) => {
          return <div key={index} className=''>{`#${tag.name}`}</div>
        })
      }
    </div> 
  )
}