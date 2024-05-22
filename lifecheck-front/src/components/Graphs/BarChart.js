import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function BarChart({ data }) {
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef.current) {
            if (chartRef.current.chart) {
                chartRef.current.chart.destroy();
            }
            const context = chartRef.current.getContext("2d");
            //const labels = [" Grade", "Education Grade"];
            //const labels = data.map((analysis, index) => `Analysis ${analysis.userId}`);
            const labels = ["Análisis de calidad de vida"];
            let healthGrades = [];
            let educationGrades = [];
            //const lastAnalysis = data[data.length - 1];
            const lastAnalysis = data.length > 0 ? data[data.length - 1] : null;
            console.log("lastAnalysis", lastAnalysis);
            // const healthGrades = lastAnalysis.map((analysis) => analysis.healthGrades);
            // console.log("mymy", healthGrades);
            if (lastAnalysis !== null) {
                healthGrades = [lastAnalysis.healthGrade]; // Convert healthGrade to array
                console.log("MYMYHEALTH", healthGrades);
                educationGrades = [lastAnalysis.educationGrade]; // Convert educationGrade to array
                console.log("MYMYEDUCATION", educationGrades);
                console.log("si hay datos");
            } else {
                healthGrades = [100];
                educationGrades = [100];
                const livingGrades = [100];
                const lifeSatisfactionGrades = [100];
                const environmentGrades = [100];
                const incomeGrades = [100];
                const securityGrades = [100];
                const workLifeBalanceGrades = [100];
                console.log("no hay datos");
            }   
 
            //const lastHealthGrade = [100];
            const lastEducationGrade = [100];
            // const healthGrades = data.map((analysis) => analysis.healthGrades);
            // const lastHealthGrade = healthGrades[healthGrades.length - 1]; // Accessing the last element using array indexing
            // console.log("lastHealthGrade", lastHealthGrade);

            // const educationGrades = data.map((analysis) => analysis.educationGrade);
            // const lastEducationGrade = educationGrades[educationGrades.length - 1]; // Accessing the last element using array indexing
            // console.log("Last education grade:", lastEducationGrade);

            const livingGrades = [100];
            const lifeSatisfactionGrades = [100];
            const environmentGrades = [100];
            const incomeGrades = [100];
            const securityGrades = [100];
            const workLifeBalanceGrades = [100];
            //const array = [ "Salud", "Educación", "Vivienda ", "Satisfacción de Vida", "Medio Ambiente", "Ingresos", "Seguridad", "Equilibrio Vida-Trabajo"];

            const newChart = new Chart(context, {
                type: "bar",
                data: {
                labels:  labels,
                    datasets: [
                        {
                            label: "Resultado de Salud",
                            data: healthGrades,
                            backgroundColor: "rgba(255, 99, 132, 0.2)",
                            borderColor: "rgba(255, 99, 132, 1)",
                            borderWidth: 1,
                        },
                        {
                            label: "Resultado de Educación",
                            data: educationGrades,
                            backgroundColor: "rgba(54, 162, 235, 0.2)",
                            borderColor: "rgba(54, 162, 235, 1)",
                            borderWidth: 1,
                        },
                        {
                            label: "Resultado de Vivienda",
                            data: livingGrades,
                            backgroundColor: "rgba(255, 206, 86, 0.2)",
                            borderColor: "rgba(255, 206, 86, 1)",
                            borderWidth: 1,
                        },
                        {
                            label: "Resultado de Satisfacción de Vida",
                            data: lifeSatisfactionGrades,
                            backgroundColor: "rgba(75, 192, 192, 0.2)",
                            borderColor: "rgba(75, 192, 192, 1)",
                            borderWidth: 1,
                        },
                        {
                            label: "Resultado de Medio Ambiente",
                            data: environmentGrades,
                            backgroundColor: "rgba(153, 102, 255, 0.2)",
                            borderColor: "rgba(153, 102, 255, 1)",
                            borderWidth: 1,
                        },
                        {
                            label: "Resultado de Ingresos",
                            data: incomeGrades,
                            backgroundColor: "rgba(255, 159, 64, 0.2)",
                            borderColor: "rgba(255, 159, 64, 1)",
                            borderWidth: 1,
                        },
                        {
                            label: "Resultado de Seguridad",
                            data: securityGrades,
                            backgroundColor: "rgba(255, 99, 132, 0.2)",
                            borderColor: "rgba(255, 99, 132, 1)",
                            borderWidth: 1,
                        },
                        {
                            label: "Resultado de Equilibrio Vida-Trabajo",
                            data: workLifeBalanceGrades,
                            backgroundColor: "rgba(54, 162, 235, 0.2)",
                            borderColor: "rgba(54, 162, 235, 1)",
                            borderWidth: 1,
                        },
                    ],
                },
            });

            chartRef.current.chart = newChart;
        }
    }, [data, chartRef]);

    return (
        <div style={{ position: "relative", width: "90%", height: "90%" }}>
            <canvas ref={chartRef} />
        </div>
    );
}
