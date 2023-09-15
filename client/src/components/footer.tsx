'use client';

import Link from 'next/link';
// NOTE: https://react-icons.github.io/react-icons/icons?name=sl
import { SlHome, SlCup, SlChart } from 'react-icons/sl';
import { useRef } from 'react';
import { usePathname } from 'next/navigation';

const CLASS_NAME_BUTTON_ACTIVE = 'paper-active';
const URL_HOME = '/home';
const URL_CHAT = '/chat';
const URL_STATS = '/stats';

export default function Footer() {
  const currentUrl = usePathname();
  const navBottomRef = useRef<HTMLDivElement>(null);

  const activateNav = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const previousButton = navBottomRef.current.getElementsByClassName(CLASS_NAME_BUTTON_ACTIVE)[0];
    previousButton.classList.remove(CLASS_NAME_BUTTON_ACTIVE);
  }

  return (
    <>
      <div className='paper-nav-bottom' ref={navBottomRef}>

        <Link href={URL_HOME} className={`paper-btn-outline ${URL_HOME === currentUrl ? CLASS_NAME_BUTTON_ACTIVE : ''}`} onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {activateNav(event);}}>
          <SlHome className='paper-icon-width paper-icon-height'></SlHome>
        </Link>
        
        <Link href={URL_CHAT} className={`paper-btn-outline ${URL_CHAT === currentUrl ? CLASS_NAME_BUTTON_ACTIVE : ''}`} onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {activateNav(event);}}>
          <SlCup className='paper-icon-width paper-icon-height'></SlCup>
        </Link>
        
        <Link href={URL_STATS} className={`paper-btn-outline ${URL_STATS === currentUrl ? CLASS_NAME_BUTTON_ACTIVE : ''}`} onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {activateNav(event);}}>
          <SlChart className='paper-icon-width paper-icon-height'></SlChart>
        </Link>

      </div>
    </>
  );
}
