import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative w-full aspect-[10/4]">
      <Image src={"/HeroSection.jpg"} fill className="object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-60 flex justify-center items-center">
        <div className="text-center text-white px-4 py-8">
          <h2 className="text-4xl uppercase font-normal max-w-2xl mx-auto pt-24">
            Mejora el bienestar de tu organización
          </h2>
          <h3 className="text-xs mt-3 mb-3 max-w-md mx-auto">
            Para una mejor colaboración, hay que contar con una buena calidad de
            vida. Con una evaluación que diagnosticará y retroalimentará tus
            áreas de crecimiento personal.
          </h3>
          <div className="mt-8">
            <button className="text-white font-semibold border-solid rounded-lg border-2 px-24 py-2 tracking-wide text-[10px] hover:bg-[#23A28B]">
              Iniciar evaluación
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
