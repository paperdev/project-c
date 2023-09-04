'use client';

// NOTE: https://react-icons.github.io/react-icons/icons?name=sl
import { SlHome, SlCup, SlChart } from 'react-icons/sl';
import { CONSTANT } from '@/lib/contant';
import Link from 'next/link';

const CLASS_NAME_TOP_NAV_TITLE = 'paper-nav-title';
const CLASS_NAME_BOTTOM_NAV = 'paper-btm-nav';
const CLASS_NAME_BUTTON_ACTIVE = 'paper-active';

export default function BottomNavSwitch() {

  const activateNav = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const previousButton = document.getElementsByClassName(CLASS_NAME_BOTTOM_NAV)[0].getElementsByClassName(CLASS_NAME_BUTTON_ACTIVE)[0];
    previousButton.classList.remove(CLASS_NAME_BUTTON_ACTIVE);
    event.currentTarget.classList.add(CLASS_NAME_BUTTON_ACTIVE);
    const navTopHtml = document.getElementsByClassName(CLASS_NAME_TOP_NAV_TITLE)[0];
    navTopHtml.innerHTML = event.currentTarget.href.substring(event.currentTarget.href.lastIndexOf('/') + 1);
  }

  return (
    <div className={`${CONSTANT.navView} ${CLASS_NAME_BOTTOM_NAV} sticky bottom-0 mx-auto rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] `}>

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