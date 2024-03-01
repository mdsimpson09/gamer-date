
// 'use client'
// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { useSession } from 'next-auth/react';
// import UserAccountNav from './components/UserAccountNav';
// import { usePathname } from 'next/navigation';
// import { useRouter } from 'next/navigation'


// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const { data: session } = useSession();
//   const pathname = usePathname(); 
//   const router = useRouter();

//   useEffect(() => {
//     document.body.style.padding = '0';
//   }, []);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };


//   const handleLinkClick = (href: string) => {
//     toggleMenu(); 
//     router.push(href); 
//   };

//   const isActive = (path: string) => {
//     const active = pathname === path;
//     return `block text-right mt-2 md:mt-0 cursor-pointer px-4 py-2 rounded-full transition-colors duration-200 ${active ? 'highlight-nav text-white custom-ring' : 'highlight text-white'} custom-ring`;
//   };

//   const linkStyle = (path: string) => {
//     const baseStyles = "block text-right mt-2 md:mt-0 cursor-pointer px-4 py-2 rounded-full transition-colors duration-200";
//     const activeStyles = "highlight-nav text-white ring-2 ring-#eaac8b"; 
//     const inactiveStyles = "hover:highlight hover:text-white";
//     return `${baseStyles} ${pathname === path ? activeStyles : inactiveStyles}`;
//   };

//   return (
//     <div className='nav-background border-b border-s-zinc-200 fixed w-full z-10 top-0 text-white text-lg overflow-visible'>
//     <div className='flex items-center justify-between pr-2'>
//       <Link href='/'>
      
//       <img src="/logo.png" alt="logo" className='logo-small cursor-pointer' />

//       </Link>

     
//       <button 
//         onClick={() => setIsMenuOpen(!isMenuOpen)}
//         className="block md:hidden"
//       >
//         Menu
//       </button>

//         {/* Navigation Links */}
//         <div className={`open-background absolute right-0 md:relative top-24 md:top-0 w-full p-4 transition-all duration-300 ease-in-out ${isMenuOpen ? 'flex' : 'hidden'} mx-auto flex-col items-center space-y-1 rounded-lg md:flex md:flex-row md:items-center md:justify-between md:p-0 md:space-x-4 md:space-y-0`}>
  
//   <Link href='/about' onClick={(e) => { e.preventDefault(); handleLinkClick('/about'); }}><span className={isActive('/about')}>About</span></Link>

//   <Link href='/profile' onClick={(e) => { e.preventDefault(); handleLinkClick('/profile'); }}>
//     <span className={isActive('/profile')}>Profile</span>
//   </Link>

//   <Link href='/meet' onClick={(e) => { e.preventDefault(); handleLinkClick('/meet'); }}><span className={isActive('/meet')}>Meet</span></Link>

//   <Link href='/matches' onClick={(e) => { e.preventDefault(); handleLinkClick('/matches'); }}><span className={isActive('/matches')}>Matches</span></Link>

//   <Link href='/faqs' onClick={(e) => { e.preventDefault(); handleLinkClick('/profile'); }}><span className={isActive('/faqs')}>FAQS</span></Link>

//   <Link href='/sign-up' onClick={(e) => { e.preventDefault(); handleLinkClick('/sign-up'); }}><span className={isActive('/sign-up')}>Register</span></Link>
  
//   {session?.user ? (
//     <UserAccountNav />
//   ) : (
//     <Link href='/login'><span className='btn block text-right mt-2 md:mt-0 cursor-pointer'>Login</span></Link>
//   )}
// </div>
//       </div>
//     </div>
//   );
// };


// export default Navbar;

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
    toggleMenu(); // Close the menu upon navigating
    router.push(href);
  };

  const isActive = (path: string) => {
    const active = pathname === path;
    return `block mt-2 cursor-pointer px-4 py-2 rounded-full text-white transition-colors duration-200 ${active ? 'bg-indigo-900 text-white ring-2 ring-white' : 'hover:bg-indigo-900 hover:text-white'} hover:ring-2 hover:ring-white`;

  };

  return (
    <div className='bg-indigo-900 fixed w-full z-10 top-0 text-lg overflow-visible '>
      <div className='flex items-center justify-between p-4'>
      <Link href='/'>
  <div className="flex justify-center -ml-8 w-44 h-44 -mt-6 -mb-24" style={{ borderRadius: '50%', position: 'relative' }}>
    <img src="/logo.png" alt="Logo" className='w-auto h-36 cursor-pointer' style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
  </div>
</Link>
        {/* Hamburger Menu Button always visible */}
        <button onClick={toggleMenu} className="#e56b6f text-4xl">
          {isMenuOpen ? '✕' : '☰'}
        </button>

        {/* Dropdown Menu */}
        <div className={`bg-indigo-400 w-[200px] absolute right-1 top-full -mt-2 p-4 flex flex-col items-center space-y-1 shadow-md rounded-lg transition-all duration-300 ease-in-out ${isMenuOpen ? 'block' : 'hidden'}`}>
  <Link href='/'><span onClick={() => handleLinkClick('/about')} className={isActive('/')}>Home</span></Link>
  <Link href='/about'><span onClick={() => handleLinkClick('/about')} className={isActive('/about')}>About</span></Link>
  <Link href='/profile'><span onClick={() => handleLinkClick('/profile')} className={isActive('/edit')}>Profile</span></Link>
  <Link href='/edit'><span onClick={() => handleLinkClick('/about')} className={isActive('/edit')}>Edit Profile</span></Link>
  <Link href='/meet'><span onClick={() => handleLinkClick('/meet')} className={isActive('/meet')}>Meet</span></Link>
  <Link href='/matches'><span onClick={() => handleLinkClick('/matches')} className={isActive('/matches')}>Matches</span></Link>
  <Link href='/faqs'><span onClick={() => handleLinkClick('/faqs')} className={isActive('/faqs')}>FAQs</span></Link>
  <Link href='/sign-up'><span onClick={() => handleLinkClick('/sign-up')} className={isActive('/sign-up')}>Register</span></Link>
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