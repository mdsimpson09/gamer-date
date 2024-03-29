'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import UserAccountNav from './components/UserAccountNav';
import { usePathname, useRouter } from 'next/navigation';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session } = useSession();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    document.body.style.padding = '0';
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (href: string) => {
    toggleMenu(); 
    router.push(href);
  };

  const isActive = (path: string) => {
    const active = pathname === path;
    return `block mt-2 cursor-pointer px-4 py-2 rounded-full text-white transition-colors duration-200 ${active ? 'bg-indigo-700 text-white ring-2 ring-white' : 'hover:bg-indigo-700 hover:text-white'} hover:ring-2 hover:ring-white`;

  };

  return (
    <div className='bg-indigo-400 fixed w-full z-10 top-0 text-lg overflow-visible'>
      <div className='flex items-center justify-between p-4'>
      <Link href='/'>
  <div className="flex justify-center -ml-8 w-44 h-44 -mt-6 -mb-24" style={{ borderRadius: '50%', position: 'relative' }}>
    <img src="/logo.png" alt="Logo" className='w-auto h-36 cursor-pointer' style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
  </div>
</Link>
    
        <button onClick={toggleMenu} className="text-4xl">
          {isMenuOpen ? '✕' : '☰'}
        </button>

    
        <div className={`bg-indigo-300 w-[200px] navfont absolute right-1 top-full -mt-2 p-4 flex flex-col items-center space-y-1 shadow-md rounded-lg transition-all duration-300 ease-in-out py-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
  <Link href='/'><span onClick={() => handleLinkClick('/about')} className={isActive('/')}>Home</span></Link>
  <Link href='/about'><span onClick={() => handleLinkClick('/about')} className={isActive('/about')}>About</span></Link>
  <Link href='/profile'><span onClick={() => handleLinkClick('/profile')} className={isActive('/edit')}>Profile</span></Link>
  <Link href='/edit'><span onClick={() => handleLinkClick('/about')} className={isActive('/edit')}>Edit Profile</span></Link>
  <Link href='/meet'><span onClick={() => handleLinkClick('/meet')} className={isActive('/meet')}>Meet</span></Link>
  <Link href='/matches'><span onClick={() => handleLinkClick('/matches')} className={isActive('/matches')}>Matches</span></Link>
  <Link href='/faqs'><span onClick={() => handleLinkClick('/faqs')} className={isActive('/faqs')}>FAQs</span></Link>
  <Link href='/sign-up'><span onClick={() => handleLinkClick('/sign-up')} className={isActive('/sign-up')}>Register</span></Link>
  <Link href='/contact'><span onClick={() => handleLinkClick('/contact')} className={isActive('/contact')}>Contact Us</span></Link>
  {session?.user ? (
    <UserAccountNav />
  ) : (
    <Link href='/login'><span onClick={() => handleLinkClick('/login')} className='block mt-2 cursor-pointer'>Login</span></Link>
  )}
</div>
      </div>
    </div>
  );
};

export default Navbar;