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
  ChartPieIcon
} from "@heroicons/react/24/solid";

interface EvaluationCard
{
    cardName: string;
    feedback: string;
}

const MyComponent: React.FC<EvaluationCard> = ({ cardName, feedback  }) => {

  let circlesColors = ["bg-[#000000]", "bg-[#000000]", "bg-[#000000]"];
  if(cardName === 'Vivienda')
    {circlesColors = ["bg-[#c4ab1f83]", "bg-[#79430783]", "bg-[#ff8f1083]"];}
  if(cardName === 'Satisfacción')
    {circlesColors = ["bg-[#1fc4bc83]", "bg-[#431fc483]", "bg-[#1f74c483]"];}
  else if(cardName === 'Educación')
    {circlesColors = ["bg-[#cbff1083]", "bg-[#fffb1083]", "bg-[#ffab1083]"];}
  if(cardName === 'Medio ambiente')
    {circlesColors = ["bg-[#9ddf3383]", "bg-[#10b16083]", "bg-[#1fc43583]"];}
  else if(cardName === 'Salud')
    {circlesColors = ["bg-[#ff6c5283]", "bg-[#ff681083]", "bg-[#ff000083]"];}
  else if(cardName === 'Ingresos')
    {circlesColors = ["bg-[#dd277c83]", "bg-[#7b1fe483]", "bg-[#f945ff83]"];}
  else if(cardName === 'Seguridad')
    {circlesColors = ["bg-[#2dad8783]", "bg-[#075b7583]", "bg-[#22aca083]"];}
  else if(cardName === 'Equilibrio trabajo-vida')
    {circlesColors = ["bg-[#f580d283]", "bg-[#c080f583]", "bg-[#f580f583]"];}


  return (
    <div>
      

        <div className="hover:scale-110 duration-500 flex justify-center">
            <div className={circlesColors[0] + " -translate-x-96 blur-md w-96 h-96 shadow-inner rounded-full"}>
            <div className={circlesColors[1] + " translate-x-96 blur-md  w-96 h-96 shadow-inner rounded-full"}>
            <div className={circlesColors[2] + " translate-x-96 blur-md  w-96 h-96 shadow-inner rounded-full"}/>
              </div>
              </div></div>


              <div className="-mt-60 flex justify-center items-center">
      <div className="pb-10 w-10/12 relative px-40">
            <div className=" bg-white shadow-2xl  px-4 pt-5 pb-5 rounded-3xl overflow-hidden ">
                  <p className="text-3xl text-center duration-200">{feedback}</p>
                  </div>
            </div></div>
    </div>
  );
}

export default MyComponent;