import { AcademicCapIcon, HeartIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import EvaluationCards from "@/src/components/EvaluationCards";

export default function Evaluation() {
  return (
    <div className="flex flex-col space-y-4">
      <EvaluationCards />
    </div>
    // <section className="text-gray-600 body-font">
    //   <div className="container max-w-7xl px-5 py-24 mx-auto">
    //     <div className="flex flex-col space-y-4">
    //       <Link href="/education" className="block focus:outline-none w-full">
    //         <div className="p-4 group h-full shadow-md bg-white bg-opacity-75 px-8 pt-16 pb-12 rounded-lg overflow-hidden text-center relative hover:bg-yellow-400 transition duration-200">
    //           <div className="flex justify-center items-center">
    //             <AcademicCapIcon className="h-20 w-20 text-yellow-400 p-4 group-hover:text-white transition duration-200" />
    //           </div>
    //           <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 group-hover:text-white transition duration-200">
    //             Educación
    //           </h1>
    //         </div>
    //       </Link>
    //       <Link href="/health" className="block focus:outline-none w-full">
    //         <div className="p-4 group h-full shadow-md bg-white bg-opacity-75 px-8 pt-16 pb-12 rounded-lg overflow-hidden text-center relative hover:bg-pink-500 transition duration-200">
    //           <div className="flex justify-center items-center">
    //             <HeartIcon className="h-20 w-20 text-pink-500 p-4 group-hover:text-white transition duration-200" />
    //           </div>
    //           <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 group-hover:text-white transition duration-200">
    //             Salud
    //           </h1>
    //         </div>
    //       </Link>
    //     </div>
    //   </div>
    // </section>
  );
}
