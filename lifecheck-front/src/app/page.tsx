import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/src/components/HeroSection";
import {
  ClipboardDocumentCheckIcon,
  MicrophoneIcon,
  PresentationChartBarIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <div className="relative">
      {/* Aquí entraría una función que si no ha realizado encuesta, muestra HeroSection, y una vez realizada una eval completa, desplega las stats */}
      <HeroSection />
      {/* Botón centrado encima del HeroSection */}
      <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 -mt-[225px]">
        <Link
          href="/evaluation"
          className="bg-white text-black shadow font-semibold py-4 px-6 rounded-lg hover:bg-[#1e8d74] hover:text-white transition duration-300"
        >
          Realiza tu encuesta!
        </Link>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 pb-24 mx-auto">
          <div className="flex flex-wrap -mt-[550px]">
            <div className="p-4 lg:w-1/4">
              <div className="group h-full shadow-md bg-white bg-opacity-75 px-8 pt-16 pb-12 rounded-lg overflow-hidden text-center relative hover:bg-[#23A28B] transition-all">
                <div className="flex justify-center items-center">
                  <ClipboardDocumentCheckIcon className="h-20 w-20 text-[#23A28B] p-4 group-hover:text-white transition-all" />
                </div>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 group-hover:text-white transition-all">
                  Ingresa tus datos
                </h1>
                <p className="leading-relaxed mb-3 group-hover:text-white transition-all">
                  Llena una encuesta de diferentes categorías sobre tu calidad
                  de vida para analizar los resultados.
                </p>
              </div>
            </div>
            <div className="p-4 lg:w-1/4">
              <div className="group h-full shadow-md bg-white bg-opacity-75 px-8 pt-16 pb-12 rounded-lg overflow-hidden text-center relative hover:bg-[#23A28B] transition-all">
                <div className="flex justify-center items-center">
                  <MicrophoneIcon className="h-20 w-20 text-[#23A28B] p-4 group-hover:text-white transition-all" />
                </div>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 group-hover:text-white transition-all">
                  Contesta platicando
                </h1>
                <p className="leading-relaxed mb-3 group-hover:text-white transition-all">
                  Las encuestas están integradas con voice-to-text para simular
                  una platica amistosa.
                </p>
              </div>
            </div>
            <div className="p-4 lg:w-1/4">
              <div className="group h-full shadow-md bg-white bg-opacity-75 px-8 pt-16 pb-12 rounded-lg overflow-hidden text-center relative hover:bg-[#23A28B] transition-all">
                <div className="flex justify-center items-center">
                  <SparklesIcon className="h-20 w-20 text-[#23A28B] p-4 group-hover:text-white transition duration-300" />
                </div>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 group-hover:text-white transition-all">
                  Revisión de IA
                </h1>
                <p className="leading-relaxed mb-3 group-hover:text-white transition-all">
                  Utilizando AI se analizarán tus resultados para brindar una
                  experiencia personalizada a cada usuario.
                </p>
              </div>
            </div>
            <div className="p-4 lg:w-1/4">
              <div className="group h-full shadow-md bg-white bg-opacity-75 px-8 pt-16 pb-12 rounded-lg overflow-hidden text-center relative hover:bg-[#23A28B] transition-all">
                <div className="flex justify-center items-center">
                  <PresentationChartBarIcon className="h-20 w-20 text-[#23A28B] p-4 group-hover:text-white transition-all" />
                </div>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 group-hover:text-white transition-all">
                  Guarda tus resultados
                </h1>
                <p className="leading-relaxed mb-3 group-hover:text-white transition-all">
                  Cada encuesta que termines será guardada para futuras
                  consultas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
