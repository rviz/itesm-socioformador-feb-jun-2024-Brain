"use client";
import React from "react";
import { WavyBackground } from "@/src/components/ui/wavy-background";

export default function HeroSection() {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40">
      <p className="text-2xl md:text-4xl lg:text-6xl text-black font-bold inter-var text-center">
        Descubre y mejora tu calidad de vida con nuestro análisis
      </p>
      <p className="text-base md:text-lg mt-4 text-black font-normal inter-var text-center pt-5">
        Responde las diferentes categorias para analizar tu calidad de vida
      </p>
    </WavyBackground>
  );
}
