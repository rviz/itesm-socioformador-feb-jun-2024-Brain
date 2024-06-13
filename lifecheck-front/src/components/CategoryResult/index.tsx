"use client";
import { useState } from "react";
import { HomeIcon } from "@heroicons/react/24/solid";

import "../../css/style.css"; // Importa el CSS personalizado

interface EvaluationCard {
  cardName: string;
  feedback: string;
}

const formatFeedback = (feedback: string) => {
  const recommendations = feedback.split(/(\d+\.\s+\*\*.+?\*\*:)/).slice(1); // Split feedback into parts and remove the first empty part
  const parsedRecommendations = [];

  for (let i = 0; i < recommendations.length; i += 2) {
    const numberSubtitle = recommendations[i].match(/\d+\.\s+\*\*(.+?)\*\*/);
    const body = recommendations[i + 1].match(/#(.+?)#/);

    if (numberSubtitle && body) {
      parsedRecommendations.push({
        number: numberSubtitle[0].split('.')[0].trim(),
        subtitle: numberSubtitle[1].trim(),
        body: body[1].trim(),
      });
    }
  }

  return { title: "Recomendaciones", recommendations: parsedRecommendations };
};

const MyComponent: React.FC<EvaluationCard> = ({ cardName, feedback }) => {
  const { title, recommendations } = formatFeedback(feedback);
  const [flipped, setFlipped] = useState(
    Array(recommendations.length).fill(false)
  );

  const handleFlip = (index) => {
    setFlipped((prev) => {
      const newFlipped = [...prev];
      newFlipped[index] = !newFlipped[index];
      return newFlipped;
    });
  };

  const handleMouseEnter = (index) => {
    setFlipped((prev) => {
      const newFlipped = [...prev];
      newFlipped[index] = true;
      return newFlipped;
    });
  };

  const handleMouseLeave = (index) => {
    setFlipped((prev) => {
      const newFlipped = [...prev];
      newFlipped[index] = false;
      return newFlipped;
    });
  };

  let colorFront = "bg-[#000000]";
  let colorBack = "text-[#00000]";

if (cardName === 'General') {
  colorFront = "text-[#8f8f8f]";
  colorBack = "bg-[#a6a9a6]"; // Slightly darker gray pastel
} else if (cardName === 'Vivienda') {
  colorFront = "text-[#ff9239]";
  colorBack = "bg-[#ffbf77]"; // Slightly darker orange pastel
} else if (cardName === 'Satisfacción') {
  colorFront = "text-[#487fff]";
  colorBack = "bg-[#7faaff]"; // Slightly darker blue pastel
} else if (cardName === 'Educación') {
  colorFront = "text-[#fbbf24]";
  colorBack = "bg-[#ffd966]"; // Slightly darker yellow pastel
} else if (cardName === 'Medio ambiente') {
  colorFront = "text-[#10b981]";
  colorBack = "bg-[#66e6b3]"; // Slightly darker green pastel
} else if (cardName === 'Salud') {
  colorFront = "text-[#ef4444]";
  colorBack = "bg-[#ff9999]"; // Slightly darker red pastel
} else if (cardName === 'Ingresos') {
  colorFront = "text-[#9333ea]";
  colorBack = "bg-[#b399ff]"; // Slightly darker purple pastel
} else if (cardName === 'Seguridad') {
  colorFront = "text-[#50b6b6]";
  colorBack = "bg-[#66cccc]"; // Slightly darker teal pastel
} else if (cardName === 'Equilibrio trabajo-vida') {
  colorFront = "text-[#f472b6]";
  colorBack = "bg-[#ff99b3]"; // Slightly darker pink pastel
}

  let circlesColors = ["bg-[#000000]", "bg-[#000000]", "bg-[#000000]"];
  if (cardName === "Vivienda") {
    circlesColors = ["bg-[#c4ab1f83]", "bg-[#79430783]", "bg-[#ff8f1083]"];
  } else if (cardName === "Satisfacción") {
    circlesColors = ["bg-[#1fc4bc83]", "bg-[#431fc483]", "bg-[#1f74c483]"];
  } else if (cardName === "Educación") {
    circlesColors = ["bg-[#cbff1083]", "bg-[#fffb1083]", "bg-[#ffab1083]"];
  } else if (cardName === "Medio ambiente") {
    circlesColors = ["bg-[#9ddf3383]", "bg-[#10b16083]", "bg-[#1fc43583]"];
  } else if (cardName === "Salud") {
    circlesColors = ["bg-[#ff6c5283]", "bg-[#ff681083]", "bg-[#ff000083]"];
  } else if (cardName === "Ingresos") {
    circlesColors = ["bg-[#dd277c83]", "bg-[#7b1fe483]", "bg-[#f945ff83]"];
  } else if (cardName === "Seguridad") {
    circlesColors = ["bg-[#2dad8783]", "bg-[#075b7583]", "bg-[#22aca083]"];
  } else if (cardName === "Equilibrio trabajo-vida") {
    circlesColors = ["bg-[#f580d283]", "bg-[#c080f583]", "bg-[#f580f583]"];
  }

  const calculateFontSize = (text) => {
    const maxLength = 300; // Aumenta la longitud máxima
    const baseSize = 16;
    const size = baseSize - Math.max(0, text.length - maxLength) / 10;
    return Math.max(14, size); // Asegura un tamaño mínimo de fuente
  };

  

  return (
    <div>
      <div className="hover:scale-110 duration-500 flex justify-center">
        <div
          className={
            circlesColors[0] +
            " -translate-x-96 blur-md w-96 h-96 shadow-inner rounded-full"
          }
        >
          <div
            className={
              circlesColors[1] +
              " translate-x-96 blur-md  w-96 h-96 shadow-inner rounded-full"
            }
          >
            <div
              className={
                circlesColors[2] +
                " translate-x-96 blur-md  w-96 h-96 shadow-inner rounded-full"
              }
            />
          </div>
        </div>
      </div>
      <div className="-mt-96 flex justify-center items-center">
        <div className=" -m-10 shadow border rounded w-full relative bg-white px-20 h-full">
          <div className="px-4 pt-5 pb-5 rounded-3xl overflow-hidden">
            <h2 className="text-3xl pb-10 text-neutral-950 bg-white rounded-lg text-center duration-200">
              {title}
            </h2>
            {recommendations.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-40 mb-40">
                {recommendations.map((recommendation, index) => (
                  <div
                    key={index}
                    className={`carousel-item${
                      index === recommendation
                        ? "carousel-item-focus"
                        : "carousel-item-blur"
                    } rounded-lg flex flex-col items-center justify-center my-24 -mb-10`}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                  >
                    <div /*Aqui se mapea el card individual*/
                      className={`flip-card ${flipped[index] ? "flipped" : ""}`}
                    >
                      <div className="flip-card-inner">
                        <div className={`flip-card-front ${colorFront} border border-grey-150 px-4 rounded-lg shadow-xl flex flex-col items-center justify-center`}>
                          <h3 className="text-6xl pb-1 mt-4">
                            {recommendation.number}
                          </h3>
                          <h4 className="recommendation-title text-xl font-semibold p-4 mt-4">
                            {recommendation.subtitle}
                          </h4>
                        </div>
                        <div className={`flip-card-back ${colorBack} text-white font-bold p-4 rounded-lg shadow-lg flex flex-col items-center justify-center`}>
                          <p
                            className="text-xl text-center p-4"
                            style={{
                              fontSize: calculateFontSize(recommendation.body),
                            }}
                          >
                            {recommendation.body}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
