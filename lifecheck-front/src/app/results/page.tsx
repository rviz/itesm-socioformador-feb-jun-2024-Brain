"use client";
import ResultsTab from "@/src/components/EvaluationCard";
import CategoryResult from "@/src/components/CategoryResult";
import CallApi from "@/src/components/CallApi";
import BarChart from "@/src/components/Graphs/BarChart";
import RadarChart from "@/src/components/Graphs/RadarChart";
import LineChart from "@/src/components/Graphs/LineChartStacked";
import React from "react";
import { useState, useEffect } from "react";
import { redirect } from "next/navigation";

export default function Results() {
  const [user, setUser] = useState(null);
  const [canLoad, setCanLoad] = useState(false);

  useEffect(() => {
    const loadUser = async () => {
      try {
        // GET DEL USUARIO
        const response = await fetch("/api/user");
        const data = await response.json();
        setUser(data.user);
        setCanLoad(true);
      } catch (err) {
        setCanLoad(true);
      }
    };

    loadUser();
  }, []);

  if (user === null && canLoad === true) {
    redirect("/api/auth/login");
  }

  const [loading, setLoading] = useState(false);
  const [showPB, setShowPB] = useState(false);
  const [error, setError] = useState(null);
  const [analysisGot, setAnlysisGot] = useState([]);
  const [showedCategory, setshowedCategory] = useState("General");

  const toggleVisibility = (cardName) => {
    setshowedCategory(cardName);
  };

  const ProgressBarShown = (canSHow: boolean) => {
    setShowPB(canSHow);
  };

  let lastAnalysis =
    analysisGot.length > 0 ? analysisGot[analysisGot.length - 1] : null;

  const VoidSetAnlysisGot = (myNewResults: []) => {
    setAnlysisGot(myNewResults);
    lastAnalysis =
      analysisGot.length > 0 ? analysisGot[analysisGot.length - 1] : null;
  };

  useEffect(() => {
    const loadQuestions = async () => {
      setLoading(true);
      try {
        // GET DE LOS ANALISIS
        const responseAnalysis = await fetch("/api/analysis");
        const dataAnalysis = await responseAnalysis.json();
        setAnlysisGot(dataAnalysis.analysis);
        // LOADING
        setLoading(false);
      } catch (err) {
        setError("Failed to load questions");
        setLoading(false);
      }
    };

    loadQuestions();
  }, []);

  if (error) {
    return (
      <p className="text-3xl text-center duration-200 mt-44 mb-44 text-[#8b2121] font-bold">
        Error al Cargar Resultados
      </p>
    );
  }

  if (loading) {
    return (
      <p className="text-3xl text-center duration-200 mt-44 mb-44">
        Cargando Resultados . . .
      </p>
    );
  }

  const noResults = "No hay resultados";

  const resultsContents = [
    { cardName: "General", littleDown: true },
    { cardName: "Vivienda", littleDown: true },
    { cardName: "Satisfacción", littleDown: true },
    { cardName: "Educación", littleDown: true },
    { cardName: "Medio ambiente", littleDown: false },
    { cardName: "Salud", littleDown: true },
    { cardName: "Ingresos", littleDown: true },
    { cardName: "Seguridad", littleDown: true },
    { cardName: "Equilibrio trabajo-vida", littleDown: false },
  ];

  type GPTResponseProps = {
    text: string;
  };

  const GPTResponse: React.FC<GPTResponseProps> = ({ text }) => {
    const formatText = (input: string): JSX.Element[] => {
      if (!input) return []; // Si input es undefined o vacío, retorna un arreglo vacío.

      const segments = input.split(/(\*\*[^*]+\*\*)/g); // Divide el texto por los marcadores de negrita.
      return segments.map((segment, index) => {
        if (segment.startsWith("**") && segment.endsWith("**")) {
          return <strong key={index}>{segment.slice(2, -2)}</strong>; // Formatea como negrita.
        }
        // Divide por puntos y agrega saltos de línea.
        return (
          <React.Fragment key={index}>
            {segment.split(". ").map((line, idx, arr) =>
              idx < arr.length - 1 ? (
                <span key={idx}>
                  {line}.<br />
                </span>
              ) : (
                <span key={idx}>{line}</span>
              ),
            )}
          </React.Fragment>
        );
      });
    };

    return <div>{formatText(text)}</div>;
  };

  return (
    <div className="mt-5 mb-48">
      {user != null && canLoad == true ? (
        <div className="flex justify-center mb-10">
          <CallApi
            paramUserID={user.sub}
            ProgressBarShown={ProgressBarShown}
            showPB={showPB}
            VoidSetAnlysisGot={VoidSetAnlysisGot}
          />
        </div>
      ) : (
        <div />
      )}
      {user != null && canLoad == true && showPB == false ? (
        <div>
          <p className="text-2xl pb-12 text-center underline underline-offset-8">
            Resultados
          </p>

          <div className="flex justify-center mb-20">
            {resultsContents.map((content) => {
              return (
                <div key={content.cardName} className="px-3">
                  <ResultsTab
                    cardName={content.cardName}
                    showedCategory={showedCategory}
                    littleDown={content.littleDown}
                    toggleVisibility={toggleVisibility}
                    checkValue={0}
                  />
                </div>
              );
            })}
          </div>

          {/*<GPTResponse text={lastAnalysis ? lastAnalysis.feedbackLifeSatisfaction : noResults} />*/}

          {showedCategory == "General" && (
            <div>
              <div className="flex justify-center space-y-7">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      width: "400px",
                      height: "400px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <br />
                    <RadarChart data={analysisGot} />
                  </div>
                </div>
              </div>

              <div className="text-center text-2xs">
                <p>
                  Se debe demostrar que necesitas mejorar tu rendimiento físico,
                  en cuanto al área de <span className="font-bold">salud</span>.
                </p>
                {lastAnalysis && lastAnalysis.feedbackDescription && (
                  <p>{lastAnalysis.feedbackDescription}</p>
                )}
              </div>
              <br />

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div style={{ width: "400px", height: "400px" }}>
                  <BarChart data={analysisGot} />
                </div>
                <div style={{ width: "400px", height: "400px" }}>
                  <LineChart data={analysisGot} />
                </div>
              </div>
            </div>
          )}

          {showedCategory == "Vivienda" && (
            <div>
              <CategoryResult
                cardName={showedCategory}
                feedback={
                  lastAnalysis ? lastAnalysis.feedbackHousing : noResults
                }
              />
            </div>
          )}

          {showedCategory == "Satisfacción" && (
            <div>
              <CategoryResult
                cardName={showedCategory}
                feedback={
                  lastAnalysis
                    ? lastAnalysis.feedbackLifeSatisfaction
                    : noResults
                }
              />
            </div>
          )}

          {showedCategory == "Educación" && (
            <div>
              <CategoryResult
                cardName={showedCategory}
                feedback={
                  lastAnalysis ? lastAnalysis.feedbackEducation : noResults
                }
              />
            </div>
          )}

          {showedCategory == "Medio ambiente" && (
            <div>
              <CategoryResult
                cardName={showedCategory}
                feedback={
                  lastAnalysis ? lastAnalysis.feedbackEnvironment : noResults
                }
              />
            </div>
          )}

          {showedCategory == "Ingresos" && (
            <div>
              <CategoryResult
                cardName={showedCategory}
                feedback={
                  lastAnalysis ? lastAnalysis.feedbackIncome : noResults
                }
              />
            </div>
          )}

          {showedCategory == "Seguridad" && (
            <div>
              <CategoryResult
                cardName={showedCategory}
                feedback={
                  lastAnalysis ? lastAnalysis.feedbackSecurity : noResults
                }
              />
            </div>
          )}

          {showedCategory == "Equilibrio trabajo-vida" && (
            <div>
              <CategoryResult
                cardName={showedCategory}
                feedback={
                  lastAnalysis
                    ? lastAnalysis.feedbackWorkLifeBalance
                    : noResults
                }
              />
            </div>
          )}

          {showedCategory == "Salud" && (
            <div>
              <CategoryResult
                cardName={showedCategory}
                feedback={
                  lastAnalysis ? lastAnalysis.feedbackHealth : noResults
                }
              />
            </div>
          )}

          {/*<div>
          {analysisGot.map((analysis, index) => (
            <div key={index}>
              <p>Answer ID:{analysis.userId}</p>
              <p>Answer Question ID:{analysis.feedbackDescription}</p>
              </div>
              ))}
            </div>*/}
        </div>
      ) : (
        <div />
      )}
    </div>
  );
}
