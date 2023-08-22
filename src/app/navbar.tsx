// NOTE: https://react-icons.github.io/react-icons/icons?name=sl
import { SlMenu } from 'react-icons/sl';
import { dataProfile } from '@/data/profile';
import ThemeSwitch from './themeSwitch'

export default function Navbar({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='paper-navbar bg-base-100 sticky top-0 '>

      <div className='paper-navbar-start'>
        <div className='paper-dropdown'>
          <label tabIndex={0} className='paper-btn paper-btn-ghost paper-btn-circle'>
            <SlMenu className='h-8 w-8' ></SlMenu>
          </label>
          <ul tabIndex={0} className='paper-menu paper-menu-sm paper-dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'>
            <li><a>menu 1</a></li>
            <li><a>menu 2</a></li>
            <li><a>menu 3</a></li>
          </ul>
        </div>
      </div>

      <div className='paper-navbar-center'>
        <a className='paper-btn paper-btn-ghost normal-case text-xl'>Home</a>
      </div>

      <div className='paper-navbar-end'>
        <div>
          <ThemeSwitch></ThemeSwitch>
        </div>

        <div className='paper-dropdown paper-dropdown-end'>
          <label tabIndex={0} className='paper-btn paper-btn-ghost paper-btn-circle paper-avatar'>
            <div className='w-10 rounded-full'>
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

    </div>
  )
}