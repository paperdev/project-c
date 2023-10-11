import SubHeader from '@/components/subHeader';
import dataProfile from '@/data/profile.json';

export default function Header({
  title,
}: {
  title: string;
}) {
  return (
    <>
      <div className='paper-nav-top'>
        <div className='flex-1'>
          <a className='paper-btn paper-btn-ghost capitalize text-xl'>{title}</a>
        </div>

        <div className='flex-none gap-2'>
          <div className='paper-dropdown paper-dropdown-end'>
            <label tabIndex={0} className='paper-btn paper-btn-ghost paper-btn-circle paper-avatar'>
              <div className='paper-icon-width paper-icon-height rounded-full'>
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
    </>
  );
}
