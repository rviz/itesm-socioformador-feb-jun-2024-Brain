import { Button } from "@/src/components/ui/button";
import { CardContent, Card } from "@/src/components/ui/card";
import { Smile } from "lucide-react";

export default function EvaluationCards() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
        <Card className="relative group">
          <CardContent className="flex flex-col items-center justify-center h-full p-6 md:p-8 lg:p-10 bg-gray-100 dark:bg-gray-800 rounded-lg transition-colors group-hover:bg-gray-200 dark:group-hover:bg-gray-700">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white mb-4">
              <HomeIcon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Vivienda</h3>
            <p className="text-gray-500 dark:text-gray-400 text-center">
              Vivienda adecuada esencial para vivir.
            </p>
            <div className="absolute top-4 right-4 flex items-center space-x-2">
              <Button
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50"
                size="icon"
                variant="ghost"
              >
                <CheckIcon className="w-5 h-5" />
                <span className="sr-only">Mark as completed</span>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card className="relative group">
          <CardContent className="flex flex-col items-center justify-center h-full p-6 md:p-8 lg:p-10 bg-gray-100 dark:bg-gray-800 rounded-lg transition-colors group-hover:bg-gray-200 dark:group-hover:bg-gray-700">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white mb-4">
              <SmileIcon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Satisfacción de vida</h3>
            <p className="text-gray-500 dark:text-gray-400 text-center">
              Medición subjetiva complementa datos objetivos.
            </p>
            <div className="absolute top-4 right-4 flex items-center space-x-2">
              <Button
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50"
                size="icon"
                variant="ghost"
              >
                <CheckIcon className="w-5 h-5" />
                <span className="sr-only">Mark as completed</span>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card className="relative group">
          <CardContent className="flex flex-col items-center justify-center h-full p-6 md:p-8 lg:p-10 bg-gray-100 dark:bg-gray-800 rounded-lg transition-colors group-hover:bg-gray-200 dark:group-hover:bg-gray-700">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white mb-4">
              <AcademicCapIcon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Educación</h3>
            <p className="text-gray-500 dark:text-gray-400 text-center">
              Buena educación es clave para el desarrollo personal.
            </p>
            <div className="absolute top-4 right-4 flex items-center space-x-2">
              <Button
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50"
                size="icon"
                variant="ghost"
              >
                <CheckIcon className="w-5 h-5" />
                <span className="sr-only">Mark as completed</span>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card className="relative group">
          <CardContent className="flex flex-col items-center justify-center h-full p-6 md:p-8 lg:p-10 bg-gray-100 dark:bg-gray-800 rounded-lg transition-colors group-hover:bg-gray-200 dark:group-hover:bg-gray-700">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white mb-4">
              <EnvironmentIcon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Medio Ambiente</h3>
            <p className="text-gray-500 dark:text-gray-400 text-center">
              Ambiente saludable mejora bienestar y economía.
            </p>
            <div className="absolute top-4 right-4 flex items-center space-x-2">
              <Button
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50"
                size="icon"
                variant="ghost"
              >
                <CheckIcon className="w-5 h-5" />
                <span className="sr-only">Mark as completed</span>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card className="relative group">
          <CardContent className="flex flex-col items-center justify-center h-full p-6 md:p-8 lg:p-10 bg-gray-100 dark:bg-gray-800 rounded-lg transition-colors group-hover:bg-gray-200 dark:group-hover:bg-gray-700">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white mb-4">
              <HeartIcon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Salud</h3>
            <p className="text-gray-500 dark:text-gray-400 text-center">
              Clave para educación, riqueza y longevidad.
            </p>
          </CardContent>
        </Card>
        <Card className="relative group">
          <CardContent className="flex flex-col items-center justify-center h-full p-6 md:p-8 lg:p-10 bg-gray-100 dark:bg-gray-800 rounded-lg transition-colors group-hover:bg-gray-200 dark:group-hover:bg-gray-700">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white mb-4">
              <BanknotesIcon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Ingresos</h3>
            <p className="text-gray-500 dark:text-gray-400 text-center">
              Clave para estándares de vida y bienestar.
            </p>
          </CardContent>
        </Card>
        <Card className="relative group">
          <CardContent className="flex flex-col items-center justify-center h-full p-6 md:p-8 lg:p-10 bg-gray-100 dark:bg-gray-800 rounded-lg transition-colors group-hover:bg-gray-200 dark:group-hover:bg-gray-700">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white mb-4">
              <SecurityIcon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Seguridad</h3>
            <p className="text-gray-500 dark:text-gray-400 text-center">
              Seguridad personal esencial para bienestar.
            </p>
            <div className="absolute top-4 right-4 flex items-center space-x-2">
              <Button
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50"
                size="icon"
                variant="ghost"
              >
                <CheckIcon className="w-5 h-5" />
                <span className="sr-only">Mark as completed</span>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card className="relative group">
          <CardContent className="flex flex-col items-center justify-center h-full p-6 md:p-8 lg:p-10 bg-gray-100 dark:bg-gray-800 rounded-lg transition-colors group-hover:bg-gray-200 dark:group-hover:bg-gray-700">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white mb-4">
              <WorkLifeBalanceIcon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              Equilibrio trabajo-vida
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-center">
              Equilibrio trabajo-vida clave para bienestar familiar.
            </p>
            <div className="w-full pt-10">
              <ProgressBar progress={75} />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function SmileIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
  );
}

function AcademicCapIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
      />
    </svg>
  );
}

function EnvironmentIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10c0-5.52-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8 0-3.86 2.77-7.08 6.43-7.84.34-.07.57-.37.57-.72 0-.41-.34-.75-.75-.75C7.47 2.59 4 6.36 4 11c0 4.41 3.59 8 8 8 4.41 0 8-3.59 8-8 0-4.64-3.47-8.41-7.25-8.47-.41 0-.75.34-.75.75 0 .35.23.65.57.72C17.23 4.92 20 8.14 20 12c0 4.41-3.59 8-8 8z" />
      <circle cx="12" cy="12" r="5" />
    </svg>
  );
}

function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function BanknotesIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
      />
    </svg>
  );
}

function SecurityIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
      />
    </svg>
  );
}

function WorkLifeBalanceIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z"
      />
    </svg>
  );
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="green"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ProgressBar({ progress }) {
  return (
    <div className="progress-bar">
      <svg className="progress-bar__fill" viewBox="0 0 100 10">
        <rect width={progress} height="10" fill="black" />
        <rect width={`${progress}%`} height="10" fill="black" />
      </svg>
    </div>
  );
}
