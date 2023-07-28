'use client';

import { dataHistory, iHistory } from '@/data/history';

const History: React.FC<iHistory> = ({ title, contents }) => {
  return (
    <section className="my-14 text-sm">
      <h3 className="mb-6">{title}</h3>
      <div className="flex flex-col gap-6">
        {contents.map((content, index) => {
          return (
            <div className="flex" key={index}>
              <div className="mr-8 max-w-[100px] w-full text-slate-400 dark:text-slate-400">
                {}
              </div>
              <div className="flex flex-col flex-1">
                <h4>{content.summary}</h4>
                <p className="text-slate-600 dark:text-gray-400">
                  {}
                </p>
                {content.description ? (
                  <p className="text-slate-600 dark:text-gray-400 mt-2">
                    {content.description}
                  </p>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default function ComponentHistory({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      {
        dataHistory.map((history, index) => {
          return <History {...history} key={index} />;
        })
      }
    </div>
  )
}