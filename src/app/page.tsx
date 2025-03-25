"use client";

import { useEffect, useState } from 'react';
import Navbar from '../ui/Navbar';
import Footer from '@/ui/Footer';
import Image from 'next/image';


export default function Page() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {

        setIsNavbarVisible(false);
      } else {

        setIsNavbarVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      style={{
        backgroundImage: "url('/images/grid-line-graph.png')",
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto',
        backgroundColor: '#8F192A', 
        minHeight: '100vh', 
      }}
    >
      <div
        style={{
          position: 'fixed',
          top: isNavbarVisible ? 0 : '-150px',
          left: 0,
          width: '100%', 
          zIndex: 1000, 
          transition: 'top 0.3s ease-in-out', 
        }}
      >
        <Navbar />
      </div>
      <div
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(150, 23, 47, 0.79) 25%, rgba(232, 83, 137, 0.68) 67%, rgba(118, 23, 45, 0.77) 100%), url('/images/download_1.gif')`, // Linear gradient with transparency and the GIF
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover', 
          padding: '20px', 
          minHeight: '100vh', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
        }}
      >
        <Image
          src="/images/CC_contentlogo.png"
          alt="Content Logo"
          width={600} 
          height={600} 
        />
      </div>
      <Footer />
    </div>
  );
}