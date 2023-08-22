'use client';

import { useState } from "react";
import { FiSun, FiMoon } from 'react-icons/fi';

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

  return (
    <div className='paper-join'>
      <select className='paper-select paper-select-ghost focus:outline-none paper-select-theme' value={selected} onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {onChangeEvent(event)}}>
        <option value='default'>default</option>
        {THEMES.map((theme, index) => {
          return(
            <option key={index} value={theme}>{theme}</option>
          );
        })}
      </select>

      <label className='paper-swap paper-swap-rotate'>
        {/* this hidden checkbox controls the state */}
        <input type='checkbox'/>
        
        {/* sun icon */}
        <FiSun onClick={() => switchTheme('light')} className='paper-swap-on fill-current w-10 h-10'>
        </FiSun>
        
        {/* moon icon */}
        <FiMoon onClick={() => switchTheme('dark')} className='paper-swap-off fill-current w-10 h-10'>
        </FiMoon>
      </label>
    </div>
  )
}
