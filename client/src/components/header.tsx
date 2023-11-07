'use client';

import React from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar } from '@nextui-org/react';
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

        <div className='flex items-center gap-4'>
          <Dropdown placement='bottom-end'>

            <DropdownTrigger>
              <Avatar
                isBordered
                as='button'
                className='transition-transform'
                src={dataProfile.avatar}
              />
            </DropdownTrigger>

            <DropdownMenu>
              <DropdownItem className='h-14 gap-2'>
                <div className='font-semibold'>Profile</div>
                <div className='font-semibold text-gray-500'>{dataProfile.email}</div>
              </DropdownItem>
              <DropdownItem>
                <div className='font-semibold'>Settings</div>
              </DropdownItem>
              <DropdownItem>
                <div className='font-semibold'>Log Out</div>
              </DropdownItem>
            </DropdownMenu>

          </Dropdown>
        </div>

      </div>
    </>
  );
}