import Image from "next/image";
import {
  ClipboardDocumentCheckIcon,
  MicrophoneIcon,
  PresentationChartBarIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/4">
              <div className="group h-full bg-white bg-opacity-75 px-8 pt-16 pb-12 rounded-lg overflow-hidden text-center relative hover:bg-[#23A28B] transition duration 1000">
                <div className="flex justify-center items-center">
                  {" "}
                  <ClipboardDocumentCheckIcon className="h-20 w-20 text-[#23A28B] p-4 group-hover:text-white transition duration 1000" />{" "}
                </div>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 group-hover:text-white transition duration 1000">
                  Ingresa tus datos
                </h1>
                <p className="leading-relaxed mb-3 group-hover:text-white transition duration 1000">
                  Llena una encuesta de diferentes categorías sobre tu calidad
                  de vida para analizar los resultados.
                </p>
              </div>
            </div>
            <div className="p-4 lg:w-1/4">
              <div className="group h-full bg-white bg-opacity-75 px-8 pt-16 pb-12 rounded-lg overflow-hidden text-center relative hover:bg-[#23A28B] transition duration 1000">
                <div className="flex justify-center items-center">
                  {" "}
                  <MicrophoneIcon className="h-20 w-20 text-[#23A28B] p-4 group-hover:text-white transition duration 1000" />{" "}
                </div>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 group-hover:text-white transition duration 1000">
                  Contesta platicando
                </h1>
                <p className="leading-relaxed mb-3 group-hover:text-white transition duration 1000">
                  Las encuestas están integradas con voice-to-text para simular
                  una platica amistosa.
                </p>
              </div>
            </div>
            <div className="p-4 lg:w-1/4">
              <div className="group h-full bg-white bg-opacity-75 px-8 pt-16 pb-12 rounded-lg overflow-hidden text-center relative hover:bg-[#23A28B] transition duration 1000">
                <div className="flex justify-center items-center">
                  {" "}
                  <SparklesIcon className="h-20 w-20 text-[#23A28B] p-4 group-hover:text-white transition duration 1000" />{" "}
                </div>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 group-hover:text-white transition duration 1000">
                  Revisión de IA
                </h1>
                <p className="leading-relaxed mb-3 group-hover:text-white transition duration 1000">
                  Utilizando AI se analizarán tus resultados para brindar una
                  experiencia personalizada a cada usuario.
                </p>
              </div>
            </div>
            <div className="p-4 lg:w-1/4">
              <div className="group h-full bg-white bg-opacity-75 px-8 pt-16 pb-12 rounded-lg overflow-hidden text-center relative hover:bg-[#23A28B] transition duration 1000">
                <div className="flex justify-center items-center">
                  {" "}
                  <PresentationChartBarIcon className="h-20 w-20 text-[#23A28B] p-4 group-hover:text-white transition duration 1000" />{" "}
                </div>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 group-hover:text-white transition duration 1000">
                  Guarda tus resultados
                </h1>
                <p className="leading-relaxed mb-3 group-hover:text-white transition duration 1000">
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
