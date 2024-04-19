import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <div className="relative w-full aspect-[10/4]">
      <div className="absolute inset-0 bg-black bg-opacity-60 flex justify-left items-left">
        <div className="text-left text-white">
          <h2 className="text-4xl w-1/2 uppercase font-normal pl-5">Page</h2>
          {/* <h2 className="text-4xl w-1/2 uppercase font-normal pl-5 pt-44">
            Mejora el bienestar de tu organización
          </h2>
          <h3 className="text-xs pl-5 pt-3 pb-3 w-1/2">
            Para una mejor colaboración, hay que contar con una buena calidad de
            vida. Con una evaluación que diagnosticará y retroalimentará tus
            áreas de crecimiento personal.
          </h3>
          <button className="text-white ml-24 font-semibold border-solid rounded-lg border-2 px-24 py-2 tracking-wide text-[10px] hover:bg-[#23A28B]">
            Iniciar evaluación
          </button> */}
        </div>
      </div>
    </div>
  );
}
