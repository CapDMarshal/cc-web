"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { kavoon } from './fonts';
import clsx from 'clsx';

export default function Navbar() {
  const pathname = usePathname(); // Get the current pathname

  return (
    <nav className={`${kavoon.className} navbar w-full flex justify-between items-center px-16 py-4`}>
      <Image 
        src="/images/CC_logo.png" 
        alt="My Homepage Logo" 
        width={150} 
        height={100} 
        className="h-auto w-auto"
      />
      <ul className="flex space-x-12 text-4xl">
        <li className={clsx('p-2 rounded', pathname === '/' ? 'text-[#F595B1]' : 'text-[#FDEAE6]')}>
          <Link href="/">Home</Link>
        </li>
        <li className={clsx('p-2 rounded', pathname === '/about' ? 'text-[#F595B1]' : 'text-[#FDEAE6]')}>
          <Link href="/about">About Me</Link>
        </li>
        <li className={clsx('p-2 rounded', pathname === '/merch' ? 'text-[#F595B1]' : 'text-[#FDEAE6]')}>
          <Link href="/merch">Merch</Link>
        </li>
        <li className={clsx('p-2 rounded', pathname === '/other' ? 'text-[#F595B1]' : 'text-[#FDEAE6]')}>
          <Link href="/other">Other</Link>
        </li>
      </ul>
    </nav>
  );
}