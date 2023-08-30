import { CONSTANT } from '@/lib/contant';

export default function Stats({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`paper-join paper-join-vertical flex mx-auto paper-artboard paper-view ${CONSTANT.desktopWidth}`}>
     
      <div role="status" className="border rounded shadow md:p-6 ">
        <div className='py-5 text-3xl'>Comming Soon</div>
        <div className="h-2.5 bg-gray-400 rounded-full  w-32 mb-2.5"></div>
        <div className="w-48 h-2 mb-10 bg-gray-400 rounded-full "></div>
        <div className="flex items-baseline mt-4 space-x-6">
          <div className="w-full bg-gray-400 rounded-t-lg h-72 "></div>
          <div className="w-full h-56 bg-gray-400 rounded-t-lg "></div>
          <div className="w-full bg-gray-400 rounded-t-lg h-72 "></div>
          <div className="w-full h-64 bg-gray-400 rounded-t-lg "></div>
          <div className="w-full bg-gray-400 rounded-t-lg h-80 "></div>
          <div className="w-full bg-gray-400 rounded-t-lg h-72 "></div>
          <div className="w-full bg-gray-400 rounded-t-lg h-80 "></div>
          <div className="w-full bg-gray-400 rounded-t-lg h-80 "></div>
          <div className="w-full bg-gray-400 rounded-t-lg h-80 "></div>
          <div className="w-full bg-gray-400 rounded-t-lg h-80 "></div>
        </div>
      </div>

    </div>
  )
}