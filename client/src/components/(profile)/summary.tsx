import { iSummary } from '@/shared/interface/summary';

export default function ComponentSummary({
  dataSummary
}: {
  dataSummary: iSummary
}) {
  return (
    <>
      <div className='py-2 px-8 mx-auto space-y-2 sm:py-2 sm:flex sm:items-center sm:space-y-0 sm:space-x-6'>
        <div className='tracking-wide text-primary-500 font-semibold'>
          Summary
        </div>
        <div className='mt-2 ml-2 text-default-500 whitespace-pre-wrap'>
          {dataSummary.contents}
        </div>
      </div>
    </>
  )
}