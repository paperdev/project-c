import { iContent } from '@/shared/interface/content';

export default function ComponentContent({
  dataContent
}: {
  dataContent: iContent[]
}) {
  return (
    <div className='py-8 px-8 mx-auto rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6'>
      <div>
        {
          dataContent.map((content, index) => {
            return (
              <div key={index} className='mx-auto rounded-xl'>
                {
                  (index !== 0) && <hr className='h-px my-8 bg-base-300 border-0'></hr>
                }
                <div className='my-2 ml-2 sm:w-64 sm:mb-0 mb-6 flex-shrink-0 flex flex-col'>
                  <p className='font-semibold title-font text-gray-500'>{content.companyName}</p>
                  <p className='mt-1 text-indigo-500 text-sm'>{`${content.beginYear}-${content.beginMonth}`} ~ {`${content.endYear}-${content.endMonth}`}</p>
                </div>
                <p className='my-2 mx-2 text-gray-500 whitespace-pre-wrap'>
                  {
                    content.description.map((description, index) => {
                      return <>• {description}<br/></>;
                    })
                  }
                </p>
              </div>
              )
          })
        }
      </div>
    </div>
  )
}