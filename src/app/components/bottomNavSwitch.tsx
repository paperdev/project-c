'use client';

// NOTE: https://react-icons.github.io/react-icons/icons?name=sl
import { SlHome, SlCup, SlChart } from 'react-icons/sl';
import { CONSTANT } from '@/lib/contant';

const CLASS_NAME_BOTTOM_NAV = 'paper-btm-nav';
const CLASS_NAME_BUTTON_ACTIVE = 'paper-active';

export default function BottomNavSwitch() {
  const activateNav = (event: React.MouseEvent<HTMLButtonElement>) => {
    const previousButton = document.getElementsByClassName(CLASS_NAME_BOTTOM_NAV)[0].getElementsByClassName(CLASS_NAME_BUTTON_ACTIVE)[0];
    previousButton.classList.remove(CLASS_NAME_BUTTON_ACTIVE);
    event.currentTarget.classList.add(CLASS_NAME_BUTTON_ACTIVE);
  }

  return (
    <div className={`${CONSTANT.navView} ${CLASS_NAME_BOTTOM_NAV} sticky bottom-0 z-50 mx-auto rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] ${CONSTANT.desktopWidth}`}>

      <button className={`paper-btn-outline ${CLASS_NAME_BUTTON_ACTIVE}`} onClick={(event: React.MouseEvent<HTMLButtonElement>) => {activateNav(event);}}>
        <SlHome className={`${CONSTANT.iconWidth} ${CONSTANT.iconHeight}`}></SlHome>
      </button>
      
      <button className='paper-btn-outline' onClick={(event: React.MouseEvent<HTMLButtonElement>) => {activateNav(event);}}>
        <SlCup className={`${CONSTANT.iconWidth} ${CONSTANT.iconHeight}`}></SlCup>
      </button>
      
      <button className='paper-btn-outline' onClick={(event: React.MouseEvent<HTMLButtonElement>) => {activateNav(event);}}>
        <SlChart className={`${CONSTANT.iconWidth} ${CONSTANT.iconHeight}`}></SlChart>
      </button>

    </div>
  )
}
