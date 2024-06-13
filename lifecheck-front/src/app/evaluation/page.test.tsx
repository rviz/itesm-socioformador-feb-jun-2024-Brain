import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Evaluation from "./page"; // Asume que este componente contiene el botón save

describe("Page Component", () => {
  test("Checar si existe Evaluación", () => {
    render(<Evaluation />);
    const textoEvaluacion = screen.getByText("Evaluación");

    expect(textoEvaluacion).toBeDefined();
    //expect(QuestionModule.answerAdder).toHaveBeenCalledWith(/* expectedQuestionId, expectedSavedTranscript */);
    //expect(QuestionModule.CheckIfComplete).toHaveBeenCalledTimes(2);
    //expect(QuestionModule.setSavedAnswer).toHaveBeenCalledWith(true);
  });
});
