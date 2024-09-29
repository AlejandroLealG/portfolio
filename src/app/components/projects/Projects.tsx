"use client";

import './projects.css';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const Carousel = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const totalSlides = 3;            // Cantidad de imagenes del slide

  // Movimiento del slide
  const moveSlide = (direction:any) => {
    const newIndex = (slideIndex + direction + totalSlides) % totalSlides;
    setSlideIndex(newIndex);

    if (sliderRef.current) {
      const slide = sliderRef.current.children[newIndex] as HTMLElement;
      sliderRef.current.scrollTo({
        left: slide.offsetLeft,
        behavior: 'smooth',
      });
    }
  };

  // Loop automático
  useEffect(() => {
    const interval = setInterval(() => {
      moveSlide(1);
    }, 6000); // Cambia cada 6 segundos automaticamente
    return () => clearInterval(interval);
  }, [slideIndex]);

  return (
    <div className="relative m-8">
      <div className="slider-container" ref={sliderRef}>
        {/* Slide 1 */}
        <div className="slide relative">
          <img src="/3.jpg" alt="Imagen 1" className="slider-item" />
          <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 p-4 rounded-lg flex flex-col space-y-2">
            <p className="text-white">Clon de spotify, aprendiendo a usar Astro con react y svelte.</p>
            <Link href="/pagina1">
              <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded">
                Visitar
              </button>
            </Link>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="slide relative">
          <img src="/3.jpg" alt="Imagen 2" className="slider-item" />
          <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 p-4 rounded-lg flex flex-col space-y-2">
            <p className="text-white">
              clon de la pagina de spaceX, unicamente con el objetivo de aprender y practicar Astro
            </p>
            <Link href="/pagina2">
              <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded">
                Visitar
              </button>
            </Link>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="slide relative">
          <img src="/3.jpg" alt="Imagen 3" className="slider-item" />
          <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 p-4 rounded-lg flex flex-col space-y-2">
            <p className="text-white">tari-app, Pagina web astro con enrutamiento</p>
            <Link href="/pagina3">
              <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded">
                Visitar
              </button>
            </Link>
          </div>
        </div>
      </div>

      <button className="prev sli hover:text-[#f3c242]" onClick={() => moveSlide(-1)}>
        &#10094;
      </button>
      <button className="next sli hover:text-[#f3c242]" onClick={() => moveSlide(1)}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
