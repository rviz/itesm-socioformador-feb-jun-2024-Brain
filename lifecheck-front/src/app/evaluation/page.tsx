import { AcademicCapIcon, HeartIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import EvaluationCards from "@/src/components/EvaluationCards";
import EvaluationCard from "@/src/components/EvaluationCard";
import {getSession} from '@auth0/nextjs-auth0'
import { redirect } from "next/navigation";

export default async function Evaluation() {
  const data = await getSession();
  if (!data?.user) {
    redirect('/api/auth/login')
  }

  return (
    <div className="h-screen container mx-auto px-4 py-12 md:py-16 lg:py-10">
      <p className="text-2xl pb-12 text-center underline underline-offset-8">
        Seleccione una categoría
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-8">
      <EvaluationCard cardName="Vivienda" myHref="/tests/speech" cardStyle={"flex flex-col items-center justify-center h-full p-6 md:p-8 lg:p-24 bg-white rounded-lg transition-colors group-hover:bg-[#b27429]"} iconStyle="text-[#b27429] group-hover:text-white"/>
      <EvaluationCard cardName="Satisfacción" myHref="/tests/speech" cardStyle="flex flex-col items-center justify-center h-full p-6 md:p-8 lg:p-24 bg-white rounded-lg transition-colors group-hover:bg-[#487fff]" iconStyle="text-[#487fff] group-hover:text-white"/>
      <EvaluationCard cardName="Educación" myHref="/tests/speech" cardStyle="flex flex-col items-center justify-center h-full p-6 md:p-8 lg:p-24 bg-white rounded-lg transition-colors group-hover:bg-yellow-400" iconStyle="text-yellow-400 group-hover:text-white"/>
      <EvaluationCard cardName="Medio ambiente" myHref="/tests/speech" cardStyle="flex flex-col items-center justify-center h-full p-6 md:p-8 lg:p-24 bg-white rounded-lg transition-colors group-hover:bg-[#29b259]" iconStyle="text-[#29b259] group-hover:text-white"/>
      <EvaluationCard cardName="Salud" myHref="/tests/speech" cardStyle="flex flex-col items-center justify-center h-full p-6 md:p-8 lg:p-24 bg-white rounded-lg transition-colors group-hover:bg-pink-400" iconStyle="text-pink-400 group-hover:text-white" />
      <EvaluationCard cardName="Ingresos" myHref="/tests/speech" cardStyle="flex flex-col items-center justify-center h-full p-6 md:p-8 lg:p-24 bg-white rounded-lg transition-colors group-hover:bg-[#ca3ab9]" iconStyle="text-[#ca3ab9] group-hover:text-white"/>
      <EvaluationCard cardName="Seguridad" myHref="/tests/speech" cardStyle="flex flex-col items-center justify-center h-full p-6 md:p-8 lg:p-24 bg-white rounded-lg transition-colors group-hover:bg-emerald-600" iconStyle="text-emerald-600 group-hover:text-white"/>
      <EvaluationCard cardName="Equilibrio trabajo-vida" myHref="/tests/speech" cardStyle="flex flex-col items-center justify-center h-full p-6 md:p-8 lg:p-24 bg-white rounded-lg transition-colors group-hover:bg-pink-400" iconStyle="text-pink-400 group-hover:text-white"/>
      </div>
      <div className="text-[#329788] bg-emerald-600"></div>
    </div>
  );
}
