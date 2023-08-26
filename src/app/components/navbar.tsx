// NOTE: https://react-icons.github.io/react-icons/icons?name=sl
import { SlHome, SlCup, SlChart } from 'react-icons/sl';
import { dataProfile } from '@/data/profile';
import ThemeSwitch from '@/components/themeSwitch';
import paperCSS from '@/paper.module.scss';

const NavbarTop = (
  {
    children,
  }: {
    children: React.ReactNode
  }
) => {
  return (
    <div className={`paper-navbar sticky top-0 z-50 mx-auto bg-base-100 ${paperCSS.desktopWidth}`}>

      <div className='paper-navbar-start'>
        <div className='paper-dropdown paper-dropdown-start'>
          <label tabIndex={0} className='paper-btn paper-btn-ghost paper-btn-circle paper-avatar'>
            <div className={`w-${paperCSS.iconWidth} rounded-full`}>
              <img src={dataProfile.avatar}/>
            </div>
          </label>
          <ul tabIndex={0} className='mt-3 z-[1] p-2 shadow paper-menu paper-menu-sm paper-dropdown-content bg-base-100 rounded-box w-52'>
            <li>
              <a className='justify-between'>
                Profile
                <span className='paper-badge paper-badge-xs paper-badge-primary indicator-item'></span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>

      <div className='paper-navbar-center'>
        <a className='paper-btn paper-btn-ghost normal-case text-xl'>Home</a>
      </div>

      <div className='paper-navbar-end'>
        <ThemeSwitch></ThemeSwitch>
      </div>

    </div>
  )
}

const NavbarBottom = (
  {
    children,
  }: {
    children: React.ReactNode
  }
) => {
  return (
    <div className={`paper-btm-nav sticky bottom-0 z-50 mx-auto ${paperCSS.desktopWidth}`}>

      <button>
        <SlHome className='h-8 w-8' ></SlHome>
      </button>
      
      <button className='paper-active'>
        <SlCup className='h-8 w-8' ></SlCup>
      </button>
      
      <button>
        <SlChart className='h-8 w-8' ></SlChart>
      </button>

    </div>
  )
}

export {
  NavbarTop,
  NavbarBottom
}