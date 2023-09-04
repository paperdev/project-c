import { dataProfile } from '@/data/profile';
import ThemeSwitch from '@/components/themeSwitch';
import BottomNavSwitch from '@/components/bottomNavSwitch';
import { CONSTANT } from '@/lib/contant';

const NavbarTop = (
  {
    children,
  }: {
    children: React.ReactNode
  }
) => {
  return (
    <div className={`${CONSTANT.navView} paper-navbar sticky top-0 mx-auto bg-base-100 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]`}>

      <div className='paper-navbar-start'>
        <div className='paper-dropdown paper-dropdown-start'>
          <label tabIndex={0} className='paper-btn paper-btn-ghost paper-btn-circle paper-avatar'>
            <div className={`${CONSTANT.iconWidth} rounded-full`}>
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
        <div className='paper-btn paper-btn-ghost capitalize paper-nav-title text-xl'>Home</div>
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
    <BottomNavSwitch></BottomNavSwitch>
  )
}

export {
  NavbarTop,
  NavbarBottom
}