import { iHistory } from '@/data/history';

const History: React.FC<iHistory> = ({ companyName, contents }) => {
  return (
    <div>
      {contents.map((content, index) => {
        return (
          <div key={index} className='max-w-md mx-auto rounded-xl'>
            <div className="my-2 ml-2 md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <p className="font-semibold title-font text-gray-500">{companyName}</p>
              <p className="mt-1 text-indigo-500 text-sm">{content.beginDate} ~ {content.endDate}</p>
            </div>
            <p className='my-2 mx-2 text-gray-500'>
              {content.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default function ComponentHistory({
  children,
  dataHistory
}: {
  children: React.ReactNode
  dataHistory: iHistory[]
}) {
  return (
    <div className='py-8 px-8 max-w-md mx-auto rounded-xl shadow-md md:max-w-2xl space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6'>
      <div className='tracking-wide text-sm text-indigo-500 font-semibold'>
        History
      </div>
      <div>
        {
          dataHistory.map((history, index) => {
            return (
              <div key={index}>
                {
                  (index !== 0) && <hr className="h-px my-8 bg-base-300 border-0"></hr>
                }
                <History {...history} />
              </div>)
          })
        }
      </div>
    </div>
  )
}