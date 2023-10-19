import { iSummary } from '@/shared/interface/summary';

export default function ComponentSummary({
  dataSummary
}: {
  dataSummary: iSummary
}) {
  return(
    <div className='py-8 px-8 mx-auto rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6'>
      <div className='tracking-wide text-sm text-indigo-500 font-semibold'>
        Summary
      </div>
      <p className='mt-2 text-gray-500 whitespace-pre-wrap'>
        {dataSummary.contents}
      </p>
  </div>
  )
}