'use client';

import { useState } from "react";
import { FiSun, FiMoon, FiSmartphone, FiMonitor } from 'react-icons/fi';
import paperCSS from '@/paper.module.scss';

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
    const html = document.getElementsByClassName('paper-view')[0];
    if ('mobile' === view) {
      html.classList.remove(paperCSS.desktopWidth);
      html.classList.add(paperCSS.mobileWidth);
    }
    else {
      html.classList.remove(paperCSS.mobileWidth);
      html.classList.add(paperCSS.desktopWidth);
    }
  }

  return (
    <div className='paper-join space-x-2 mx-2'>

      <select className='paper-select paper-select-ghost focus:outline-none paper-select-theme' value={selected} onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {onChangeEvent(event)}}>
        <option value='default'>default</option>
        {THEMES.map((theme, index) => {
          return(
            <option key={index} value={theme}>{theme}</option>
          );
        })}
      </select>

      <label className='paper-swap paper-swap-rotate'>
        <input type='checkbox'/>
        
        <FiSun onClick={() => switchTheme('light')} className={`paper-swap-on w-${paperCSS.iconWidth} h-${paperCSS.iconHeight}`}>
        </FiSun>
        
        <FiMoon onClick={() => switchTheme('dark')} className={`paper-swap-off w-${paperCSS.iconWidth} h-${paperCSS.iconHeight}`}>
        </FiMoon>
      </label>

      <label className='paper-swap paper-swap-rotate'>
        <input type='checkbox'/>
        
        <FiSmartphone onClick={() => switchView('mobile')} className={`paper-swap-on w-${paperCSS.iconWidth} h-${paperCSS.iconHeight}`}>
        </FiSmartphone>
        
        <FiMonitor onClick={() => switchView('desktop')} className={`paper-swap-off w-${paperCSS.iconWidth} h-${paperCSS.iconHeight}`}>
        </FiMonitor>
      </label>

    </div>
  )
}
