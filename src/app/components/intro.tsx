'use client';

import Image from 'next/image';
import { dataIntro } from '@/data/intro';

export default function ComponentIntro({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <section className="flex items-center">
        <Image
          alt="Author"
          src={dataIntro.avatar}
          width={80}
          height={80}
          className="rounded-full object-cover"
        />
        <div className="ml-4">
          <h1 className="mb-0.5 text-xl text-slate-900 dark:text-slate-100">
            {dataIntro.name}
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-sm">
            {dataIntro.jobTitle}
          </p>
          {dataIntro.website ? (
            <span className="text-sm text-slate-400 dark:text-slate-400">
              <a
                href={dataIntro.website}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {dataIntro.website
                  .replace(/(^\w+:|^)\/\//, "")
                  .replace("www.", "")}
              </a>
            </span>
          ) : null}
        </div>
      </section>
      <section className="my-9 text-sm">
        <h3 className="mb-1 text-slate-900 dark:text-slate-100">About</h3>
        <div className="text-slate-600 dark:text-slate-300">
          <p>{dataIntro.about}</p>
        </div>
      </section>
    </div>
  )
}