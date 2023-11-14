'use client';

import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, Link, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar, User } from '@nextui-org/react';
import SubHeader from '@/components/subHeader';
import dataProfile from '@/data/profile.json';

// TODO:
const pageMenuItems = [
  'Home',
  'Chat',
  'Post',
  'Stats',
];

// TODO:
const profileMenuItems = [
  'Profile',
  'Activity',
  'Analytics',
  'Help',
  'Log Out',
];

function PageMenu({
    pageMenuItems,
  }: {
    pageMenuItems: string[]
  }) {
  return (
    <>
      {pageMenuItems.map((item: string, index: number) => (
        <NavbarMenuItem key={`${item}-${index}`}>
          <Link
            color='foreground'
            className='w-full'
            href={item.toLocaleLowerCase()}
            size='lg'
          >
            {item}
          </Link>
        </NavbarMenuItem>
      ))}
    </>
  )
}

export default function Header({
  title,
}: {
  title: string
}) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <>
      <Navbar onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className='sm:hidden'
          />
          <NavbarBrand>
            <p className='font-bold text-inherit'>{title}</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className='hidden sm:flex gap-4' justify='center'>
          <PageMenu pageMenuItems={pageMenuItems}/>
        </NavbarContent>

        <NavbarContent as='div' justify='end'>
          <Dropdown placement='bottom-end'>
            <DropdownTrigger>
              <Avatar
                isBordered
                as='button'
                className='transition-transform'
                color='secondary'
                size='sm'
                src={dataProfile.avatar}
              />
            </DropdownTrigger>
            <DropdownMenu aria-label='Profile' variant='flat'>
              {profileMenuItems.map((item, index) => (
                <DropdownItem key={`${item}-${index}`}>
                  {
                    0 === index 
                      ? 
                        <>
                          <User
                            name={dataProfile.name}
                            description={dataProfile.email}
                            avatarProps={{
                              src: dataProfile.avatar,
                              size: 'sm',
                            }}
                          />
                        </> 
                      : 
                        <>
                          <div className={index === profileMenuItems.length - 1 ? 'text-danger-500' : 'text-foreground-500'}>{item}</div>
                        </>
                  }
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>

        <NavbarMenu>
          <PageMenu pageMenuItems={pageMenuItems}/>
        </NavbarMenu>
      </Navbar>
    </>
  );
}
