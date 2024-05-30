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

interface EvaluationCard
{
    cardName: string
    myHref: string
}

const MyComponent: React.FC<EvaluationCard> = ({ cardName, myHref  }) => {


  // NOTA DE GABO: Porbablemente pienses que puedo poner un parámetro de color en el componente,
  // pero Tailwind por alguna razón no lo quiere agarrar, entonces tengo que utilizar variables locales
  // para que jale, entonces no trates de optimizar este código o si no, no jalará
  let cardColor = "group-hover:bg-black";
  let iconColor = "text-black";
if (cardName === 'Vivienda')
  { cardColor = "group-hover:bg-[#ff9239]"; iconColor = "text-[#ff9239]";}
else if (cardName === 'Satisfacción')
  { cardColor = "group-hover:bg-[#487fff]"; iconColor = "text-[#487fff]"}
else if (cardName === 'Educación')
  { cardColor = "group-hover:bg-[#fbbf24]"; iconColor = "text-[#fbbf24]"}
else if (cardName === 'Medio ambiente')
  { cardColor = "group-hover:bg-[#10b981]"; iconColor = "text-[#10b981]"}
else if (cardName === 'Salud')
  { cardColor = "group-hover:bg-[#ef4444]"; iconColor = "text-[#ef4444]"}
else if (cardName === 'Ingresos')
  { cardColor = "group-hover:bg-[#9333ea]"; iconColor = "text-[#9333ea]"}
else if (cardName === 'Seguridad')
  { cardColor = "group-hover:bg-[#50b6b6]"; iconColor = "text-[#50b6b6]"}
else if (cardName === 'Equilibrio trabajo-vida')
  { cardColor = "group-hover:bg-[#f472b6]"; iconColor = "text-[#f472b6]"}
let cardStyle = "pt-20 pb-20 rounded-lg transition-colors bg-white " + cardColor;
let iconStyle = "w-16 group-hover:text-white " + iconColor;

  return (
    <div>
        <Link href={myHref} passHref className="drop-shadow-xl">
          <div className="relative group transition-transform duration-200 ease-in-out transform hover:-translate-y-3">
            <div className={cardStyle}>
              <div className={"flex items-center justify-center rounded-full group-hover:text-white duration-200"}>
              {cardName === "Vivienda" ? ( <HomeIcon className={iconStyle} />):
              cardName === "Satisfacción" ? (<FaceSmileIcon className={iconStyle}/>):
              cardName === "Educación" ? (<AcademicCapIcon className={iconStyle} />):
              cardName === "Medio ambiente" ? (<GlobeAmericasIcon className={iconStyle} />):
              cardName === "Salud" ? (<HeartIcon className={iconStyle}/>):
              cardName === "Ingresos" ? (<CurrencyDollarIcon className={iconStyle} />):
              cardName === "Seguridad" ? (<ShieldCheckIcon className={iconStyle} />):
              cardName === "Equilibrio trabajo-vida" ? (<ScaleIcon className={iconStyle} />):
              (<div/>)}
              </div>
              <p className="text-center text-xl group-hover:text-white font-semibold mb-2 pt-5">
                {cardName}
              </p>
              <div className="absolute top-4 right-4 flex items-center space-x-2 text-[#50b6b6]">
              </div>
            </div>
          </div>
        </Link>
    </div>
  );
}

export default MyComponent;