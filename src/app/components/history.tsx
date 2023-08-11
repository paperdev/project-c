'use client';

import { dataHistory, iHistory } from '@/data/history';

const History: React.FC<iHistory> = ({ companyName, contents }) => {
  return (
    <div>
      <p className="my-2 ml-2 text-blue-500 text-base">
        {companyName}
      </p>
      {contents.map((content, index) => {
        return (
          <div key={index} className='max-w-md mx-auto rounded-xl'>
            <p className="my-2 ml-2 text-base/2 text-black-500">
              {content.beginDate} ~ {content.endDate}
            </p>
            <p className="my-2 mx-2 text-slate-500">
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
}: {
  children: React.ReactNode
}) {
  return (
    <div className="py-8 px-8 max-w-md mx-auto bg-white rounded-xl shadow-md md:max-w-2xl space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      <div className="tracking-wide text-sm text-indigo-500 font-semibold">
        History
      </div>
      <div>
        {
          dataHistory.map((history, index) => {
            return <History {...history} key={index} />;
          })
        }
      </div>
    </div>
  )
}