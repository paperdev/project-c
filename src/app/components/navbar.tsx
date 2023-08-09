import Link from "next/link";
// NOTE: https://react-icons.github.io/react-icons/icons?name=sl
import { SlBadge, SlBag, SlBan, SlBulb, SlBubbles, SlBubble, SlCheck, SlChart } from "react-icons/sl";
import { dataProfile } from '@/data/profile';

const LINK_STYLE_TOP = 'p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100';
const LINK_STYLE_BOTTOM = 'p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100';

export default function Navbar({
  children,
}: {
  children: React.ReactNode
}) {
  return (
  <div className="flex flex-col items-center w-16 h-screen py-8 overflow-y-auto bg-white border-r rtl:border-l rtl:border-r-0 dark:bg-gray-900 dark:border-gray-700">
    <nav className="flex flex-col flex-1 space-y-6">
        <Link href="#">
          <img className="w-auto h-6 " src={dataProfile.avatar} alt=""/>
        </Link>

        <Link href="#" className={LINK_STYLE_TOP}>
          <SlBadge>
          </SlBadge>
        </Link>

        <Link href="#" className={LINK_STYLE_TOP}>
          <SlBag>
          </SlBag>
        </Link>

        <Link href="#" className={LINK_STYLE_TOP}>
          <SlBan>
          </SlBan>
        </Link>

        <Link href="#" className={LINK_STYLE_TOP}>
          <SlBulb>
          </SlBulb>
        </Link>

        <Link href="#" className={LINK_STYLE_TOP}>
          <SlBubbles>
          </SlBubbles>
        </Link>

        <Link href="#" className={LINK_STYLE_TOP}>
          <SlBubble>
          </SlBubble>
        </Link>
    </nav>

    <div className="flex flex-col space-y-6">
        <Link href="#" className={LINK_STYLE_BOTTOM}>
          <SlCheck>
          </SlCheck>
        </Link>

        <Link href="#" className={LINK_STYLE_BOTTOM}>
          <SlChart>
          </SlChart>
        </Link>

        <Link href="#">
            <img className="object-cover w-8 h-8 rounded-full" src={dataProfile.avatar} alt="" />
        </Link>
    </div>
  </div>
  )
}