"use client"

import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'
import { signOut, useSession } from 'next-auth/react'
import './Navbar.css'

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Portfolio', href: '/portfolio', current: false },
  { name: 'Blog', href: '/blog', current: false },
  { name: 'Contact', href: '/contact', current: false },
  { name: 'Dashboard', href: '/dashboard', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const session = useSession()
  return (
    <div className='flex justify-center mt-2'>
        <ul className='nav-links'>
          <DarkModeToggle />
          {navigation.map((item) => (
            <li
              key="0"
              class="center"
              aria-current={item.current ? 'page' : undefined}
            >
              <Link href={item.href}> {item.name} </Link>
            </li>
          ))}
        </ul>
    </div>
  )
}
