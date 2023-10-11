import { iHistory } from '@/shared/interface/history';

export default function ComponentHistory({
  dataHistory
}: {
  dataHistory: iHistory[]
}) {
  return (
    <div className='py-8 px-8 mx-auto rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6'>
      <div className='tracking-wide text-sm text-indigo-500 font-semibold'>
        History
      </div>
      <div>
        {
          dataHistory.map((history, index) => {
            return (
              <div key={index} className='mx-auto rounded-xl'>
                {
                  (index !== 0) && <hr className='h-px my-8 bg-base-300 border-0'></hr>
                }
                <div className='my-2 ml-2 sm:w-64 sm:mb-0 mb-6 flex-shrink-0 flex flex-col'>
                  <p className='font-semibold title-font text-gray-500'>{history.companyName}</p>
                  <p className='mt-1 text-indigo-500 text-sm'>{`${history.beginYear}-${history.beginMonth}`} ~ {`${history.endYear}-${history.endMonth}`}</p>
                </div>
                <p className='my-2 mx-2 text-gray-500'>
                  {history.description}
                </p>
              </div>
              )
          })
        }
      </div>
    </div>
  )
}