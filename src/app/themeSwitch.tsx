'use client';

import 'tailwindcss/tailwind.css'
import { FiSun, FiMoon } from "react-icons/fi";
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function ThemeSwitch() {
  const [ mounted, setMounted ] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, [])

  if (!mounted) {
    return null;
  }

  return (
    <label className="swap swap-rotate">
      {/* this hidden checkbox controls the state */}
      <input type="checkbox"/>
      
      {/* sun icon */}
      <FiSun onClick={() => setTheme('light')} className="swap-on fill-current w-8 h-8">
      </FiSun>
      
      {/* moon icon */}
      <FiMoon  onClick={() => setTheme('dark')} className="swap-off fill-current w-8 h-8">
      </FiMoon>
    </label>
  )
}
