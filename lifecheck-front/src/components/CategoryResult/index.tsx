'use client'
import { useState } from "react";
import Slider from "react-slick";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  HomeIcon
} from "@heroicons/react/24/solid";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '/Users/lozano2002/Desktop/Lifecheck/itesm-socioformador-feb-jun-2024-Brain/lifecheck-front/src/css/style.css'; // Importa el CSS personalizado

interface EvaluationCard {
  cardName: string;
  feedback: string;
}

const formatFeedback = (feedback: string) => {
  const lines = feedback.split(/(\d+\.\s+\*\*.+?\*\*:)/);
  const title = lines.shift()?.trim();
  const recommendations = [];

  for (let i = 0; i < lines.length; i += 2) {
    const [number, subtitle] = lines[i].split(". **");
    const body = lines[i + 1].trim();
    recommendations.push({
      number: number.trim(),
      subtitle: subtitle.replace("**", "").replace("**", "").trim(),
      body
    });
  }

  return { title, recommendations };
};

const MyComponent: React.FC<EvaluationCard> = ({ cardName, feedback }) => {
  const { title, recommendations } = formatFeedback(feedback);
  const [currentRecommendation, setCurrentRecommendation] = useState(0);
  const [flipped, setFlipped] = useState(Array(recommendations.length).fill(false));

  const handleNextRecommendation = () => {
    setFlipped(prev => {
      const newFlipped = [...prev];
      newFlipped[currentRecommendation] = false; // Resetea el estado de volteo de la tarjeta enfocada
      return newFlipped;
    });
    setCurrentRecommendation((prev) => (prev + 1) % recommendations.length);
  };

  const handlePrevRecommendation = () => {
    setFlipped(prev => {
      const newFlipped = [...prev];
      newFlipped[currentRecommendation] = false; // Resetea el estado de volteo de la tarjeta enfocada
      return newFlipped;
    });
    setCurrentRecommendation((prev) => (prev - 1 + recommendations.length) % recommendations.length);
  };

  const handleFlip = (index) => {
    if (index === currentRecommendation) {
      setFlipped(prev => {
        const newFlipped = [...prev];
        newFlipped[index] = !newFlipped[index];
        return newFlipped;
      });
    }
  };

  const handleMouseEnter = (index) => {
    if (index === currentRecommendation) {
      setFlipped(prev => {
        const newFlipped = [...prev];
        newFlipped[index] = true;
        return newFlipped;
      });
    }
  };

  const handleMouseLeave = (index) => {
    if (index === currentRecommendation) {
      setFlipped(prev => {
        const newFlipped = [...prev];
        newFlipped[index] = false;
        return newFlipped;
      });
    }
  };

  let circlesColors = ["bg-[#000000]", "bg-[#000000]", "bg-[#000000]"];
  if (cardName === 'Vivienda') {
    circlesColors = ["bg-[#c4ab1f83]", "bg-[#79430783]", "bg-[#ff8f1083]"];
  } else if (cardName === 'Satisfacción') {
    circlesColors = ["bg-[#1fc4bc83]", "bg-[#431fc483]", "bg-[#1f74c483]"];
  } else if (cardName === 'Educación') {
    circlesColors = ["bg-[#cbff1083]", "bg-[#fffb1083]", "bg-[#ffab1083]"];
  } else if (cardName === 'Medio ambiente') {
    circlesColors = ["bg-[#9ddf3383]", "bg-[#10b16083]", "bg-[#1fc43583]"];
  } else if (cardName === 'Salud') {
    circlesColors = ["bg-[#ff6c5283]", "bg-[#ff681083]", "bg-[#ff000083]"];
  } else if (cardName === 'Ingresos') {
    circlesColors = ["bg-[#dd277c83]", "bg-[#7b1fe483]", "bg-[#f945ff83]"];
  } else if (cardName === 'Seguridad') {
    circlesColors = ["bg-[#2dad8783]", "bg-[#075b7583]", "bg-[#22aca083]"];
  } else if (cardName === 'Equilibrio trabajo-vida') {
    circlesColors = ["bg-[#f580d283]", "bg-[#c080f583]", "bg-[#f580f583]"];
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (current, next) => setCurrentRecommendation(next),
  };

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className=" text-black-500 px-4 py-2 rounded-full absolute top-1/2 transform -translate-y-1/2 right-0 z-10"
      >
        <ChevronRightIcon className="h-8 w-8" />
      </button>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="text-black-500 px-4 py-2 rounded-full absolute top-1/2 transform -translate-y-1/2 left-0 z-10"
      >
        <ChevronLeftIcon className="h-8 w-8" />
      </button>
    );
  }

  const calculateFontSize = (text) => {
    const maxLength = 300; // Aumenta la longitud máxima
    const baseSize = 16;
    const size = baseSize - Math.max(0, text.length - maxLength) / 10;
    return Math.max(10, size); // Asegura un tamaño mínimo de fuente
  };

  return (
    <div>
      <div className="hover:scale-110 duration-500 flex justify-center">
        <div className={circlesColors[0] + " -translate-x-96 blur-md w-96 h-96 shadow-inner rounded-full"}>
          <div className={circlesColors[1] + " translate-x-96 blur-md  w-96 h-96 shadow-inner rounded-full"}>
            <div className={circlesColors[2] + " translate-x-96 blur-md  w-96 h-96 shadow-inner rounded-full"} />
          </div>
        </div>
      </div>
      <div className="-mt-96 flex justify-center items-center">
        <div className=" -m-10 shadow rounded w-10/12 relative bg-white px-40 h-[800px]">
          <div className="px-4 pt-5 pb-5 rounded-3xl overflow-hidden">
            <h2 className="text-3xl pb-10 text-neutral-950 bg-white rounded-lg text-center duration-200">{title}</h2>
            {recommendations.length > 0 && (
              <Slider {...settings}>
                {recommendations.map((recommendation, index) => (
                  <div key={index} className={`carousel-item ${index === currentRecommendation ? 'carousel-item-focus' : 'carousel-item-blur'} rounded-lg flex flex-col items-center justify-center my-20`}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}>
                    <div className={`flip-card ${flipped[index] ? 'flipped' : ''}`}>
                      <div className="flip-card-inner">
                        <div className="flip-card-front bg-white rounded-lg shadow-lg flex flex-col items-center justify-center">
                          <h3 className="text-2xl pb-1 mt-4">{recommendation.number}</h3>
                          <HomeIcon className="h-30 w-30 text-orange-500" /> {/* Aquí agregamos el icono */}
                          <h4 className="recommendation-title text-xl font-bold p-4 mt-4">{recommendation.subtitle}</h4>
                        </div>
                        <div className="flip-card-back bg-gray-50 rounded-lg shadow-lg flex flex-col items-center justify-center">
                          <p className="text-lg text-center p-4" style={{ fontSize: calculateFontSize(recommendation.body) }}>{recommendation.body}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyComponent;
