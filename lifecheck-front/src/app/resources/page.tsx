import React from "react";

const BigBox = () => {
  return (
    <div className="bg-gray-100 mx-auto max-w-4xl p-8 rounded-lg shadow-lg">
      <h2 className="text-4xl font-semibold mb-6 text-center text-gray-800">
        La Misión de Lifecheck
      </h2>

      <p className="text-lg text-gray-500 text-justify">
        Según el Índice de Desarrollo Humano, México ocupa la posición 76 a
        nivel global, lo que refleja una falta de conciencia sobre la
        importancia de la calidad de vida. Esta situación se refleja en la baja
        calidad de salud y bienestar, así como en los numerosos desafíos en el
        sistema educativo. Estos factores se relacionan estrechamente con la
        situación económica y laboral del país. Además, existen problemas de
        salud mental, como el estrés, la ansiedad y la depresión, que no se
        abordan con la frecuencia necesaria.
        <br />
        <br />
        Nuestro objetivo es concienciar a la población para que tome decisiones
        más informadas que mejoren su calidad de vida. Al mejorar estos
        aspectos, no solo se beneficiará el bienestar de los individuos, sino
        que también se contribuirá al desarrollo y la prosperidad general del
        país. Por esta razón, hemos creado Lifecheck, una plataforma web que
        ofrece encuestas sobre diversas categorías que consideramos
        fundamentales para determinar la calidad de vida. Estas categorías
        incluyen:
        <br />
        <br />
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <div className="text-2xl font-bold text-red-500 hover:scale-105 transition-transform duration-300 py-2 px-4 rounded-full bg-white border border-gray-500">
            salud
          </div>
          <div className="text-2xl font-bold text-yellow-500 hover:scale-105 transition-transform duration-300 py-2 px-4 rounded-full bg-white border border-gray-500">
            educación
          </div>
          <div className="text-2xl font-bold text-blue-500 hover:scale-105 transition-transform duration-300 py-2 px-4 rounded-full bg-white border border-gray-500">
            satisfacción personal
          </div>
          <div className="text-2xl font-bold text-orange-500 hover:scale-105 transition-transform duration-300 py-2 px-4 rounded-full bg-white border border-gray-500">
            vivienda
          </div>
          <div className="text-2xl font-bold text-green-500 hover:scale-105 transition-transform duration-300 py-2 px-4 rounded-full bg-white border border-gray-500">
            medio ambiente
          </div>
          <div className="text-2xl font-bold text-purple-500 hover:scale-105 transition-transform duration-300 py-2 px-4 rounded-full bg-white border border-gray-500">
            ingresos
          </div>
          <div className="text-2xl font-bold text-blue-300 hover:scale-105 transition-transform duration-300 py-2 px-4 rounded-full bg-white border border-gray-500">
            seguridad
          </div>
          <div className="text-2xl font-bold text-pink-500 hover:scale-105 transition-transform duration-300 py-2 px-4 rounded-full bg-white border border-gray-500">
            equilibrio entre vida y trabajo
          </div>
        </div>
        <br />
        <br />
        Nuestro enfoque es hacer que el proceso de completar las encuestas sea
        dinámico y accesible mediante nuestra función de conversión de voz a
        texto. Una vez completadas las encuestas, los usuarios pueden acceder a
        los resultados y recibir retroalimentación proporcionada por ChatGPT4,
        previamente entrenado con información revisada por profesionales de la
        salud.
        <br></br>
        Este proyecto surgió debido a la inspiración que tuvimos acerca del{" "}
        <span className="text-lg text-yellow-600 text-justify">
          <a
            href="https://tec.mx/es/florecimiento-humano/entorno-para-florecer "
            target="_blank"
            rel="noopener noreferrer"
          >
            floreciento humano
          </a>
        </span>{" "}
        en el Tecnológico de Monterrey, y las maneras las cuales la calidad de
        vida de las personas puede ser{" "}
        <span className="text-lg text-yellow-600 text-justify">
          <a
            href="https://es.wikipedia.org/wiki/Calidad_de_vida"
            target="_blank"
            rel="noopener noreferrer"
          >
            medida
          </a>
          .
        </span>
      </p>

      <br></br>
    </div>
  );
};

export default BigBox;
