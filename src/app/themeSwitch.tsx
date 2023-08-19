'use client';

import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeSwitch() {
  const switchTheme = (name: string) => {
    const html = document.getElementsByTagName('html')[0];
    html.setAttribute('data-theme', name);
  }

  return (
    <label className="swap swap-rotate">
      {/* this hidden checkbox controls the state */}
      <input type="checkbox"/>
      
      {/* sun icon */}
      <FiSun onClick={() => switchTheme('light')} className="swap-on fill-current w-8 h-8">
      </FiSun>
      
      {/* moon icon */}
      <FiMoon  onClick={() => switchTheme('dark')} className="swap-off fill-current w-8 h-8">
      </FiMoon>
    </label>
  )
}
