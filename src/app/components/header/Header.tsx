"use client";

import { useState, useEffect } from "react";

export default function Header() {

  const [bgColor, setBgColor] = useState('bg-transparent');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100){
        setBgColor('bg-[#1f2937e6]');
      } else {
        setBgColor('bg-transparent');
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className="sticky top-0 text-white z-20">
    <nav className={`flex p-4 justify-between duration-500 md:px-24 px-12 ${bgColor}`}>
      {/* <img className="w-28 h-12" src="/logo.png"/> */}
      <h1 className="text-center">// ALG <span className="text-[#f3c242]">Dev</span></h1>
      <ul className="flex flex-row gap-4 px-8 hover:cursor-default text-center items-center ">
        <li className="hover:text-[#f3c242]">Cualidades</li>
        <li className="hover:text-[#f3c242]">Proyectos</li>
        <li className="hover:text-[#f3c242]">Sobre mi</li>
        <li className="hover:text-[#f3c242]">Contacto</li>
      </ul>
    </nav>
    </div>
  );
}