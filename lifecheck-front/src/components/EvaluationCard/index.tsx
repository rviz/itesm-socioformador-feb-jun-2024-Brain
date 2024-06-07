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
  ChartPieIcon,
  QuestionMarkCircleIcon,
  PlayCircleIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";

interface EvaluationCard
{
    cardName: string;
    showedCategory: string;
    littleDown: boolean;
    toggleVisibility?: (string) => void;
    checkValue: number;
}

const MyComponent: React.FC<EvaluationCard> = ({ cardName, showedCategory, littleDown, toggleVisibility, checkValue }) => {


  // NOTA DE GABO: Porbablemente pienses que puedo poner un parámetro de color en el componente,
  // pero Tailwind por alguna razón no lo quiere agarrar, entonces tengo que utilizar variables locales
  // para que jale, entonces no trates de optimizar este código o si no, no jalará
  let cardColor = "group-hover:bg-black";
  let iconColor = "text-black";

  let chosenCardColor = "bg-white";

  if (cardName === 'General')
    { cardColor = "group-hover:bg-[#8f8f8f]"; iconColor = "text-[#8f8f8f]"; chosenCardColor="bg-[#8f8f8f]";}
if (cardName === 'Vivienda')
  { cardColor = "group-hover:bg-[#ff9239]"; iconColor = "text-[#ff9239]"; chosenCardColor="bg-[#ff9239]";}
else if (cardName === 'Satisfacción')
  { cardColor = "group-hover:bg-[#487fff]"; iconColor = "text-[#487fff]" ; chosenCardColor="bg-[#487fff]";}
else if (cardName === 'Educación')
  { cardColor = "group-hover:bg-[#fbbf24]"; iconColor = "text-[#fbbf24]" ; chosenCardColor="bg-[#fbbf24]";}
else if (cardName === 'Medio ambiente')
  { cardColor = "group-hover:bg-[#10b981]"; iconColor = "text-[#10b981]" ; chosenCardColor="bg-[#10b981]";}
else if (cardName === 'Salud')
  { cardColor = "group-hover:bg-[#ef4444]"; iconColor = "text-[#ef4444]" ; chosenCardColor="bg-[#ef4444]";}
else if (cardName === 'Ingresos')
  { cardColor = "group-hover:bg-[#9333ea]"; iconColor = "text-[#9333ea]" ; chosenCardColor="bg-[#9333ea]";}
else if (cardName === 'Seguridad')
  { cardColor = "group-hover:bg-[#50b6b6]"; iconColor = "text-[#50b6b6]" ; chosenCardColor="bg-[#50b6b6]";}
else if (cardName === 'Equilibrio trabajo-vida')
  { cardColor = "group-hover:bg-[#f472b6]"; iconColor = "text-[#f472b6]" ; chosenCardColor="bg-[#f472b6]";}

if(cardName != showedCategory){chosenCardColor = "bg-white";}
else{iconColor = "text-white";}

let cardStyle = "h-32 pt-3 rounded-lg transition-colors duration-200 " + chosenCardColor + " " + cardColor;
let iconStyle = "w-16 group-hover:text-white duration-200 " + iconColor;
let paddleDown = littleDown ? "translate-y-2" : "translate-y-0";
if(cardName == showedCategory){paddleDown += " text-white";}

  return (
    <div>
        

        <button onClick={() => toggleVisibility(cardName)} className="drop-shadow-xl w-28">
          <div className="relative group transition-transform duration-200 ease-in-out transform hover:-translate-y-3">
            <div className={cardStyle}>
              <div className={"flex items-center justify-center rounded-full group-hover:text-white duration-200"}>
              {cardName === "General" ? ( <ChartPieIcon className={iconStyle} />):
              cardName === "Vivienda" ? ( <HomeIcon className={iconStyle} />):
              cardName === "Satisfacción" ? (<FaceSmileIcon className={iconStyle}/>):
              cardName === "Educación" ? (<AcademicCapIcon className={iconStyle} />):
              cardName === "Medio ambiente" ? (<GlobeAmericasIcon className={iconStyle} />):
              cardName === "Salud" ? (<HeartIcon className={iconStyle}/>):
              cardName === "Ingresos" ? (<CurrencyDollarIcon className={iconStyle} />):
              cardName === "Seguridad" ? (<ShieldCheckIcon className={iconStyle} />):
              cardName === "Equilibrio trabajo-vida" ? (<ScaleIcon className={iconStyle} />):
              (<div/>)}
              </div>
              <p className={paddleDown + " text-center group-hover:text-white duration-200 font-semibold"}>
                {cardName}
              </p>
            </div>
            <div className="w-10 translate-x-20 -translate-y-36 drop-shadow-2xl">
          {(checkValue == 0) ? (<div/>):
          (checkValue == 1)? (<QuestionMarkCircleIcon className="text-[#818181]"/>):
          (checkValue == 2)? (<PlayCircleIcon className="text-[#e0ca4d]"/>):
          (<CheckCircleIcon className="text-[#459a3b]"/>)}
        </div>
          </div>
        </button>

        
    </div>
  );
}

export default MyComponent;