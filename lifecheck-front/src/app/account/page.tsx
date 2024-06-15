// Use "use client" directive (Next.js 13+)
"use client";

import { useState } from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/src/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import { cn } from "@/src/lib/utils/cn";

// If the useUser hook or Auth0 package does not provide types, you will need to define them or install @types/nextjs-auth0 if available.

type CardProps = React.ComponentProps<typeof Card>;

const SideNav = ({
  user,
  selectedTab,
  setSelectedTab,
}: {
  user: any;
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
}) => (
  <nav className="h-screen w-64 bg-white text-black flex flex-col items-center py-8">
    <ul className="space-y-4">
      <li
        className={`${selectedTab === "profile" ? "font-bold" : ""} hover:bg-gray-200 rounded-md p-2`}
      >
        <button onClick={() => setSelectedTab("profile")}>
          Mi información
        </button>
      </li>
      <li
        className={`${selectedTab === "settings" ? "font-bold" : ""} hover:bg-gray-200 rounded-md p-2`}
      >
        <button onClick={() => setSelectedTab("settings")}>
          Ajustes generales
        </button>
      </li>
      <li
        className={`${selectedTab === "employees" ? "font-bold" : ""} hover:bg-gray-200 rounded-md p-2`}
      >
        <button onClick={() => setSelectedTab("employees")}>Empleados</button>
      </li>
    </ul>
    <div className="mt-auto">
      <Link href="/api/auth/logout">
        <Button variant="outline" className="text-red-500 border-red-500">
          Cerrar Sesión
        </Button>
      </Link>
    </div>
  </nav>
);

const UserProfile = ({ user }: { user: any }) => (
  <div className="space-y-4">
    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
      User Information
    </h1>
    <p className="text-gray-700 dark:text-gray-300">
      <strong>Nombre:</strong> {user.name}
    </p>
    <p className="text-gray-700 dark:text-gray-300">
      <strong>Email:</strong> {user.email}
    </p>
    <p className="text-gray-700 dark:text-gray-300">
      <strong>Empresa:</strong> Wizeline
    </p>
    <p className="text-gray-700 dark:text-gray-300">
      <strong>Usuario ID:</strong> {user.sub}
    </p>
    <div className="p-4">
      <Button variant="outline" className="w-full">
        Editar Perfil
      </Button>
    </div>
  </div>
);

const UserSettings = () => (
  <div className="space-y-4">
    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
      Ajustes Generales
    </h1>
    <div className="space-y-2">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
        Preferencias de Idioma
      </h2>
      <div className="flex flex-col space-y-1">
        <label className="text-gray-700 dark:text-gray-300">
          Selecciona tu idioma:
        </label>
        <select className="px-4 py-2 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300">
          <option>Español</option>
          <option>Inglés</option>
          <option>Francés</option>
          <option>Alemán</option>
        </select>
      </div>
    </div>
    <div className="space-y-2">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
        Tema
      </h2>
      <div className="flex items-center space-x-2">
        <input
          type="radio"
          id="light-theme"
          name="theme"
          className="form-radio h-5 w-5 text-red-600"
        />
        <label
          htmlFor="light-theme"
          className="text-gray-700 dark:text-gray-300"
        >
          Tema Claro
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="radio"
          id="dark-theme"
          name="theme"
          className="form-radio h-5 w-5 text-red-600"
        />
        <label
          htmlFor="dark-theme"
          className="text-gray-700 dark:text-gray-300"
        >
          Tema Oscuro
        </label>
      </div>
    </div>
    <div className="space-y-2">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
        Accesibilidad
      </h2>
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="high-contrast"
          className="form-checkbox h-5 w-5 text-red-600"
        />
        <label
          htmlFor="high-contrast"
          className="text-gray-700 dark:text-gray-300"
        >
          Modo Alto Contraste
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="large-text"
          className="form-checkbox h-5 w-5 text-red-600"
        />
        <label
          htmlFor="large-text"
          className="text-gray-700 dark:text-gray-300"
        >
          Texto Grande
        </label>
      </div>
    </div>
    <div className="space-y-2">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
        Privacidad
      </h2>
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="tracking"
          className="form-checkbox h-5 w-5 text-red-600"
        />
        <label htmlFor="tracking" className="text-gray-700 dark:text-gray-300">
          Permitir seguimiento de actividad
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="ad-personalization"
          className="form-checkbox h-5 w-5 text-red-600"
        />
        <label
          htmlFor="ad-personalization"
          className="text-gray-700 dark:text-gray-300"
        >
          Personalización de anuncios
        </label>
      </div>
    </div>
  </div>
);

const EmployeeList = ({
  employees,
}: {
  employees: Array<{ name: string; email: string }>;
}) => (
  <div className="space-y-4 w-full">
    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
      Empleados
    </h1>
    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
      {employees.map((employee, index) => (
        <li key={index} className="py-4 flex justify-between items-center">
          <div>
            <p className="text-gray-900 dark:text-white font-medium">
              {employee.name}
            </p>
            <p className="text-gray-600 dark:text-gray-400">{employee.email}</p>
          </div>
          <Button variant="outline">Ver Resultados</Button>
        </li>
      ))}
    </ul>
    <Button variant="outline" className="w-full">
      Agregar Empleado
    </Button>
  </div>
);

export default function Page({ className, ...props }: CardProps) {
  const { user, error, isLoading } = useUser();
  const [selectedTab, setSelectedTab] = useState("profile");

  // Lista de empleados de ejemplo
  const employees = [
    { name: "Eugenio Pérez", email: "eugenio.perez03@gmail.com" },
    { name: "Valeria Gómez", email: "Valeria.gomez9@gmail.com" },
    { name: "Rodrigo García", email: "rodrigo.garcia102@gmail.com" },
    { name: "Hugo Sánchez", email: "hugo94.sanchez@gmail.com" },
    { name: "Gabriel Yunes", email: "gabr1el.yunes@gmail.com" },
    { name: "Fausto Faustín", email: "faust0.faustin@gmail.com" },
  ];

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div className="flex w-screen h-screen dark:bg-gray-900">
      {user && (
        <SideNav
          user={user}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
      )}
      <div className="flex-grow flex items-center justify-center p-4">
        {user && (
          <Card className="w-full h-full bg-white dark:bg-gray-800 shadow-xl rounded-lg flex flex-col">
            <CardContent className="flex flex-col items-start gap-8 flex-grow">
              <Avatar>
                <AvatarImage
                  src={user.picture}
                  alt={user.name}
                  className="rounded-full w-24 h-24"
                />
                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              {selectedTab === "profile" && <UserProfile user={user} />}
              {selectedTab === "settings" && <UserSettings />}
              {selectedTab === "employees" && (
                <EmployeeList employees={employees} />
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
