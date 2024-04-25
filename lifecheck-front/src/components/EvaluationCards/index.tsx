import { Button } from "@/src/components/ui/button";
import { CardContent, Card } from "@/src/components/ui/card";
import { Smile } from "lucide-react";
import Link from "next/link";

import {
  AcademicCapIcon,
  HeartIcon,
  HomeIcon,
  FaceSmileIcon,
  GlobeAmericasIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  ScaleIcon,
} from "@heroicons/react/24/solid";

export default function EvaluationCards() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 lg:py-10">
      <p className="text-2xl pb-12 text-center underline underline-offset-8">Seleccione una categoría</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-8">
 
          <Card className="relative group">
            <CardContent className="flex flex-col items-center justify-center h-full p-6 md:p-8 lg:p-24 bg-stone-200 rounded-lg transition-colors group-hover:bg-stone-200 ">
              <div className="flex items-center justify-center w-16 h-16 rounded-full text-white mb-4 group-hover:text-yellow-500">
                <HomeIcon className="text-stone-500 group-hover:text-stone-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Vivienda</h3>
              <div className="absolute top-4 right-4 flex items-center space-x-2">
                {/* <Button
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50"
                size="icon"
                variant="ghost"
              >
                <CheckIcon className="w-5 h-5" />
                <span className="sr-only">Mark as completed</span>
              </Button> */}
              </div>
            </CardContent>
          </Card>
        

          <Card className="relative group">
            <CardContent className="flex flex-col items-center justify-center h-full p-6 md:p-8 lg:p-20 bg-stone-200 rounded-lg transition-colors group-hover:bg-stone-200 ">
              <div className="flex items-center justify-center w-16 h-16 rounded-full text-white mb-4 group-hover:text-yellow-500">
                <FaceSmileIcon className="text-stone-500 group-hover:text-stone-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">
                Satisfacción de vida
              </h3>
              <div className="absolute top-4 right-4 flex items-center space-x-2">
                {/* <Button
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50"
                size="icon"
                variant="ghost"
              >
                <CheckIcon className="w-5 h-5" />
                <span className="sr-only">Mark as completed</span>
              </Button> */}
              </div>
            </CardContent>
          </Card>

        <Link href="/category/id" passHref>
          <Card className="relative group transition-transform duration-200 ease-in-out transform hover:-translate-y-3 hover:shadow-lg">
            <CardContent className="flex flex-col items-center justify-center h-full p-6 md:p-8 lg:p-24 bg-white rounded-lg transition-colors group-hover:bg-yellow-400">
              <div className="flex items-center justify-center w-16 h-16 rounded-full text-white mb-4 group-hover:text-yellow-500">
                <AcademicCapIcon className="text-yellow-400 group-hover:text-white" />
              </div>
              <h3 className="text-xl group-hover:text-white font-semibold mb-2">
                Educación
              </h3>
              <div className="absolute top-4 right-4 flex items-center space-x-2">
                {/* <Button
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50"
                size="icon"
                variant="ghost"
              >
                <CheckIcon className="w-5 h-5" />
                <span className="sr-only">Mark as completed</span>
              </Button> */}
              </div>
            </CardContent>
          </Card>
        </Link>

        <Card className="relative group">
          <CardContent className="flex flex-col items-center justify-center h-full p-6 md:p-8 lg:p-20 bg-stone-200 rounded-lg transition-colors group-hover:bg-stone-200 ">
            <div className="flex items-center justify-center w-16 h-16 rounded-full text-white mb-4 group-hover:text-yellow-500">
              <GlobeAmericasIcon className="text-stone-500 group-hover:text-stone-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">
              Medio ambiente
            </h3>
            <div className="absolute top-4 right-4 flex items-center space-x-2">
              {/* <Button
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50"
                size="icon"
                variant="ghost"
              >
                <CheckIcon className="w-5 h-5" />
                <span className="sr-only">Mark as completed</span>
              </Button> */}
            </div>
          </CardContent>
        </Card>

        <Card className="relative group transition-transform duration-200 ease-in-out transform hover:-translate-y-3 hover:shadow-lg">
          <CardContent className="flex flex-col items-center justify-center h-full p-6 md:p-8 lg:p-20 bg-white dark:bg-gray-800 rounded-lg transition-colors group-hover:bg-pink-400 dark:group-hover:bg-gray-700">
            <div className="flex items-center justify-center w-16 h-16 text-white mb-4">
              <HeartIcon className="text-pink-400 group-hover:text-white" />
            </div>
            <h3 className="text-xl group-hover:text-white font-semibold mb-2">
              Salud
            </h3>
          </CardContent>
        </Card>

        <Card className="relative group">
          <CardContent className="flex flex-col items-center justify-center h-full p-6 md:p-8 lg:p-20 bg-stone-200 rounded-lg transition-colors group-hover:bg-stone-200 ">
            <div className="flex items-center justify-center w-16 h-16 rounded-full text-white mb-4 group-hover:text-yellow-500">
              <CurrencyDollarIcon className="text-stone-500 group-hover:text-stone-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Ingresos</h3>
            <div className="absolute top-4 right-4 flex items-center space-x-2">
              {/* <Button
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50"
                size="icon"
                variant="ghost"
              >
                <CheckIcon className="w-5 h-5" />
                <span className="sr-only">Mark as completed</span>
              </Button> */}
            </div>
          </CardContent>
        </Card>

        <Card className="relative group">
          <CardContent className="flex flex-col items-center justify-center h-full p-6 md:p-8 lg:p-20 bg-stone-200 rounded-lg transition-colors group-hover:bg-stone-200 ">
            <div className="flex items-center justify-center w-16 h-16 rounded-full text-white mb-4 group-hover:text-yellow-500">
              <ShieldCheckIcon className="text-stone-500 group-hover:text-stone-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Seguridad</h3>
            <div className="absolute top-4 right-4 flex items-center space-x-2">
              {/* <Button
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50"
                size="icon"
                variant="ghost"
              >
                <CheckIcon className="w-5 h-5" />
                <span className="sr-only">Mark as completed</span>
              </Button> */}
            </div>
          </CardContent>
        </Card>

        <Card className="relative group">
          <CardContent className="flex flex-col items-center justify-center h-full p-6 md:p-8 lg:p-20 bg-stone-200 rounded-lg transition-colors group-hover:bg-stone-200 ">
            <div className="flex items-center justify-center w-16 h-16 rounded-full text-white mb-4 group-hover:text-yellow-500">
              <ScaleIcon className="text-stone-500 group-hover:text-stone-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">
              Equilibrio trabajo-vida
            </h3>
            <div className="absolute top-4 right-4 flex items-center space-x-2">
              {/* <Button
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50"
                size="icon"
                variant="ghost"
              >
                <CheckIcon className="w-5 h-5" />
                <span className="sr-only">Mark as completed</span>
              </Button> */}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

