import Link from "next/link";
import Image from "next/image";
import { AcademicCapIcon} from "@heroicons/react/24/solid";


export default function HeroSection() {
  return (
    <div className="relative w-full aspect-[10/3]">
      <Image src={"/Educación.jpg"} fill className="object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-80 flex justify-center items-center">
        <div className="text-center text-white px-4 py-8">
          <h2 className="text-6xl uppercase font-normal max-w-2xl mx-auto pt-24">
            Educación{" "}
          </h2>
          <div className="flex justify-center items-center">
                <AcademicCapIcon className="h-32 w-32 text-yellow-400 p-4 hover:text-white transition duration-200" />
              </div>
        </div>
      </div>
    </div>
  );
}
