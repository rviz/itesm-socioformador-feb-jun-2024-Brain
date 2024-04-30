import Link from "next/link";
import Image from "next/image";
import { AcademicCapIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { drizzle } from "drizzle-orm/node-postgres";
import { question } from "@/src/db/schema";
import { get } from "http";
import { getEducationQuestions } from "@/src/data/questions";

export default async function MyPage() {
  // const [questions, setQuestions] = useState([]);

  // useEffect(() => {
  //   async function fetchQuestions() {
  //     const response = await fetch("/api/get-question");
  //     const { questions } = await response.json();
  //     setQuestions(questions);
  //   }
  //   fetchQuestions();
  // }, []);
  const questions = await getEducationQuestions();

  return (
    <div>
      {questions.map((question) => (
        <div key={question.categoryId}>{question.qText}</div>
      ))}
    </div>
  );
}
