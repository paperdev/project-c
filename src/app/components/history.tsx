'use client';

import { dataHistory, iHistory } from '@/data/history';

const History: React.FC<iHistory> = ({ title, contents }) => {
  return (
    <div className="mt-2 max-w-md mx-auto rounded-xl shadow-md shadow-gray-500 overflow-hidden md:max-w-2xl">
      <p className="mt-1 tracking-wide text-sm text-blue-500 font-semibold">
        {title}
      </p>
      {contents.map((content, index) => {
        let bgColor = index % 2 === 0 ? 'bg-gray-100' : 'bg-white';
        return (
          <div key={index} className={`max-w-md mx-auto rounded-xl ${bgColor}`}>
            <p className="mt-1 text-lg text-black-500">
              {content.summary}
            </p>
            <p className="mt-2 text-slate-500">
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