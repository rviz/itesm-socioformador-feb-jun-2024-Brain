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
      <EvaluationCard cardName="Vivienda" myHref="/evaluation/vivienda"/>
      <EvaluationCard cardName="Satisfacción" myHref="/evaluation/null"/>
      <EvaluationCard cardName="Educación" myHref="/evaluation/education"/>
      <EvaluationCard cardName="Medio ambiente" myHref="/evaluation/null"/>
      <EvaluationCard cardName="Salud" myHref="/evaluation/salud"/>
      <EvaluationCard cardName="Ingresos" myHref="/evaluation/null"/>
      <EvaluationCard cardName="Seguridad" myHref="/evaluation/null"/>
      <EvaluationCard cardName="Equilibrio trabajo-vida" myHref="/evaluation/null"/>
      </div>
      <div className="text-[#ff9239] bg-[#ff9239]"></div>
    </div>
  );
}
