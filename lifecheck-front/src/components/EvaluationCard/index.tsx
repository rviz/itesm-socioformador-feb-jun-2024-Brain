import { CardContent, Card } from "@/src/components/ui/card";
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
    cardStyle: string
    iconStyle: string
}

const MyComponent: React.FC<EvaluationCard> = ({ cardName, myHref, cardStyle, iconStyle  }) => {
  return (
    <div>
        <Link href={myHref} passHref className="drop-shadow-xl">
          <Card className="relative group transition-transform duration-200 ease-in-out transform hover:-translate-y-3">
            <CardContent className={cardStyle}>
              <div className={"flex items-center justify-center w-16 h-16 rounded-full text-white mb-4 group-hover:text-pink-400"}>
              {cardName === "Vivienda" ? ( <HomeIcon className={iconStyle} />):
              cardName === "Satisfacción" ? (<FaceSmileIcon className={iconStyle} />):
              cardName === "Educación" ? (<AcademicCapIcon className={iconStyle} />):
              cardName === "Medio ambiente" ? (<GlobeAmericasIcon className={iconStyle} />):
              cardName === "Salud" ? (<HeartIcon className={iconStyle} />):
              cardName === "Ingresos" ? (<CurrencyDollarIcon className={iconStyle} />):
              cardName === "Seguridad" ? (<ShieldCheckIcon className={iconStyle} />):
              cardName === "Equilibrio trabajo-vida" ? (<ScaleIcon className={iconStyle} />):
              (<div/>)}
              </div>
              <h3 className="text-base text-center group-hover:text-white font-semibold mb-2">
                {cardName}
              </h3>
              <div className="absolute top-4 right-4 flex items-center space-x-2">
              </div>
            </CardContent>
          </Card>
        </Link>
    </div>
  );
}

const Component = ({ cardName, iconStyle }) => {
  return (
    <div>
      {cardName === "Educación" ? (
        <AcademicCapIcon className={iconStyle} />
      ) : cardName === "Salud" ? (
        <AcademicCapIcon className={iconStyle} />
      ) : cardName === "Ingresos" ? (
        <AcademicCapIcon className={iconStyle} />
      ) : (
        <AcademicCapIcon className={iconStyle} />  // Ícono por defecto si no se cumplen las condiciones anteriores
      )}
    </div>
  );
};

export default MyComponent;