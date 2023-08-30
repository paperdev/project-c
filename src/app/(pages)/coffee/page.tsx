import { CONSTANT } from '@/lib/contant';

export default function Coffee({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`paper-join paper-join-vertical flex mx-auto paper-artboard paper-view ${CONSTANT.desktopWidth}`}>
      
      <div className='mx-auto py-10 '>
        <div className='py-5 text-3xl'>Comming Soon</div>
      </div>

    </div>
  )
}