// NOTE: https://react-icons.github.io/react-icons/icons?name=sl
import { SlMenu, SlMagnifier, SlHome, SlSettings } from "react-icons/sl";
import { dataProfile } from '@/data/profile';
import ThemeSwitch from './themeSwitch'

export default function Navbar({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="navbar bg-base-100">

      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <SlMenu className="h-8 w-8" ></SlMenu>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>menu 1</a></li>
            <li><a>menu 2</a></li>
            <li><a>menu 3</a></li>
          </ul>
        </div>
      </div>

      <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-xl">Home</a>
      </div>

      <div className="navbar-end">
        <div className="form-control">
          <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
        </div>
        
        <button className="btn btn-ghost btn-circle">
          <ThemeSwitch></ThemeSwitch>
        </button>

        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={dataProfile.avatar}/>
            </div>
          </label>
          <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge badge-xs badge-primary indicator-item"></span>
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