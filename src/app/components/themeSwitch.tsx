'use client';

import { useState } from "react";
import { FiSun, FiMoon, FiSmartphone, FiMonitor } from 'react-icons/fi';
import { CONSTANT } from '@/lib/contant';

const THEMES = ['retro', 'halloween', 'valentine'];

export default function ThemeSwitch() {
  const [selected, setSelected] = useState('default');

  const onChangeEvent = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const html = document.getElementsByTagName('html')[0];
    html.setAttribute('data-theme', event.target.value);
    setSelected(event.target.value);
  }

  const switchTheme = (theme: string) => {
    const html = document.getElementsByTagName('html')[0];
    html.setAttribute('data-theme', theme);
    setSelected(theme);
  }

  const switchView = (view: string) => {
    const htmlView = document.getElementsByClassName('paper-view')[0];
    const htmlNavViewList: Element[] = Array.from(document.getElementsByClassName(CONSTANT.navView));

    if ('mobile' === view) {
      htmlView.classList.remove(CONSTANT.desktopWidth);
      htmlView.classList.add(CONSTANT.mobileWidth);

      for (const navView of htmlNavViewList) {
        navView.classList.remove(CONSTANT.desktopWidth);
        navView.classList.add(CONSTANT.mobileWidth);
      }
    }
    else {
      htmlView.classList.remove(CONSTANT.mobileWidth);
      htmlView.classList.add(CONSTANT.desktopWidth);

      for (const navView of htmlNavViewList) {
        navView.classList.remove(CONSTANT.mobileWidth);
        navView.classList.add(CONSTANT.desktopWidth);
      }
    }
  }

  return (
    <div className='paper-join space-x-2 mx-2'>

      {
        /* 
        <select className='paper-select paper-select-ghost focus:outline-none paper-select-theme' value={selected} onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {onChangeEvent(event)}}>
          <option value='default'>default</option>
          {THEMES.map((theme, index) => {
            return(
              <option key={index} value={theme}>{theme}</option>
            );
          })}
        </select>
        */
      }

      <label className='paper-swap paper-swap-rotate'>
        <input type='checkbox'/>
        
        <FiSun onClick={() => switchTheme('light')} className={`paper-swap-on ${CONSTANT.iconWidth} ${CONSTANT.iconHeight}`}>
        </FiSun>
        
        <FiMoon onClick={() => switchTheme('dark')} className={`paper-swap-off ${CONSTANT.iconWidth} ${CONSTANT.iconHeight}`}>
        </FiMoon>
      </label>

      <label className='paper-swap paper-swap-rotate'>
        <input type='checkbox'/>
        
        <FiSmartphone onClick={() => switchView('mobile')} className={`paper-swap-on ${CONSTANT.iconWidth} ${CONSTANT.iconHeight}`}>
        </FiSmartphone>
        
        <FiMonitor onClick={() => switchView('desktop')} className={`paper-swap-off ${CONSTANT.iconWidth} ${CONSTANT.iconHeight}`}>
        </FiMonitor>
      </label>

    </div>
  )
}
