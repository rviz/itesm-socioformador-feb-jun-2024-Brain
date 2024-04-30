"use client";
import Link from "next/link";
import Image from "next/image";
import { AcademicCapIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

interface Question {
  q_text: string;
}

export default function Page() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/questionsByCategory"
        );
        const data = await response.json();
        setQuestions(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch questions.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="relative w-full aspect-[10/3]">
      <div className="p-4">
        <h1 className="text-lg font-bold">Education Questions</h1>
        {questions.length > 0 ? (
          <ul>
            {questions.map((question, index) => (
              <li key={index} className="mt-2">
                {question.q_text}
              </li>
            ))}
          </ul>
        ) : (
          <p>No questions found.</p>
        )}
      </div>
      <Image
        alt="Education"
        src={"/Educación.jpg"}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-80 flex justify-center items-center">
        <div className="text-center text-white px-4 py-8">
          <h2 className="text-6xl uppercase font-normal max-w-2xl mx-auto pt-24">
            Educación{" "}
          </h2>
          <div className="flex justify-center items-center">
            <AcademicCapIcon className="h-32 w-32 text-yellow-400 p-4 hover:text-white transition duration-200" />
          </div>
        </div>
      </div>
    </div>
  );
}
