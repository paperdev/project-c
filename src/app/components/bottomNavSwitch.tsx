'use client';

// NOTE: https://react-icons.github.io/react-icons/icons?name=sl
import { SlHome, SlCup, SlChart } from 'react-icons/sl';
import { CONSTANT } from '@/lib/contant';
import Link from 'next/link';

const CLASS_NAME_BOTTOM_NAV = 'paper-btm-nav';
const CLASS_NAME_BUTTON_ACTIVE = 'paper-active';

export default function BottomNavSwitch() {
  const activateNav = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const previousButton = document.getElementsByClassName(CLASS_NAME_BOTTOM_NAV)[0].getElementsByClassName(CLASS_NAME_BUTTON_ACTIVE)[0];
    previousButton.classList.remove(CLASS_NAME_BUTTON_ACTIVE);
    event.currentTarget.classList.add(CLASS_NAME_BUTTON_ACTIVE);
  }

  return (
    <div className={`${CONSTANT.navView} ${CLASS_NAME_BOTTOM_NAV} fixed bottom-0 z-50 mx-auto rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] ${CONSTANT.desktopWidth}`}>

      <Link href='/home' className={`paper-btn-outline ${CLASS_NAME_BUTTON_ACTIVE}`} onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {activateNav(event);}}>
        <SlHome className={`${CONSTANT.iconWidth} ${CONSTANT.iconHeight}`}></SlHome>
      </Link>
      
      <Link href='/coffee' className='paper-btn-outline' onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {activateNav(event);}}>
        <SlCup className={`${CONSTANT.iconWidth} ${CONSTANT.iconHeight}`}></SlCup>
      </Link>
      
      <Link href='/stats' className='paper-btn-outline' onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {activateNav(event);}}>
        <SlChart className={`${CONSTANT.iconWidth} ${CONSTANT.iconHeight}`}></SlChart>
      </Link>

    </div>
  )
}