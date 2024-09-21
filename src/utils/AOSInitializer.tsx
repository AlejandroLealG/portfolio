
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSInitializer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,  // Duración de las animaciones
      easing: "ease-in-out", // Suavizado
      once: false, // Permite que las animaciones se repitan
    });
  }, []);

  return null; // No renderiza nada, solo inicializa AOS
};

export default AOSInitializer;