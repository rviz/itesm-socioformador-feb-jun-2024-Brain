import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function HeroSectionBiz() {
  return (
    <div className="relative w-full aspect-[10/4]">
      <Image src={"/HeroSection.jpg"} fill className="object-cover" alt={""} />
      <div className="absolute inset-0 bg-black bg-opacity-60 flex justify-center items-center">
        <div className="text-center text-white px-4 py-8">
          <h2 className="text-4xl uppercase font-normal max-w-2xl mx-auto pt-24">
            Mejora el bienestar de tu organización
          </h2>
          <h3 className="text-base mt-3 mb-3 max-w-md mx-auto">
            Para una mejor colaboración, hay que contar con una buena calidad de
            vida. Con una evaluación que diagnosticará y retroalimentará tus
            áreas de crecimiento personal.
          </h3>
          <div className="mt-8">
            <button className="bg-[#292929] border-2 border-[#3e3e3e] rounded-lg text-white px-6 py-3 text-base hover:border-[#fff] cursor-pointer transition">
              <Link href="/licenses">Ver Planes</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default HeroSection;
