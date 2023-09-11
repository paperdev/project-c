export default function ComponentTag({
  dataTags
}: {
  dataTags: string[],
}) {
  return(
    <div className='flex justify-center items-center flex-wrap space-x-2 py-2 mx-auto rounded-xl shadow-md'>
      {
        dataTags.map((tag, index) => {
          return <div key={index} className='paper-badge paper-badge-primary paper-badge-outline'>{`#${tag}`}</div>
        })
      }
    </div> 
  )
}