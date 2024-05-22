import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
 
export default function LineChart({ data }) {
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef.current) {
            if (chartRef.current.chart) {
                chartRef.current.chart.destroy();
            }
            const context = chartRef.current.getContext("2d");
            //const healthGrades = data.map((analysis) => analysis.healthGrade);
            //const labels = Array.from(new Set(data.map((d) => d.month))); // Extract unique months
            const labels = data.map((analysis) => analysis.createdAt);
            const severalDates = [...labels, "11/07/2024" , "11/12/2024"];
            console.log("severalDates", severalDates);
            

            const array = [ "Salud", "Educación", "Vivienda ", "Satisfacción de Vida", "Medio Ambiente", "Ingresos", "Seguridad", "Equilibrio Vida-Trabajo"];
            const healthRadarGrades = data.map((analysis) => analysis.healthGrade);
            console.log("healthRadarGrades", healthRadarGrades);
            
            const educationRadarGrades = data.map((analysis) => analysis.educationGrade);
            console.log("educationRadarGrades", educationRadarGrades);
            
            const combinedGrades = [...healthRadarGrades, ...educationRadarGrades, 77, 44, 100, 100, 100, 100];
            const datasets = {};

            // Group data by label
            data.forEach((d) => {
                if (!datasets[d.severalDates]) {
                    datasets[d.severalDates] = {
                        label: d.severalDates,
                        data: new Array(severalDates.length).fill(0),
                        backgroundColor: [
                            "rgba(255, 99, 132, 0.2)",
                            "rgba(54, 162, 235, 0.2)",
                            "rgba(255, 206, 86, 0.2)",
                            "rgba(75, 192, 192, 0.2)",
                            "rgba(153, 102, 255, 0.2)",
                            "rgba(255, 159, 64, 0.2)",
                        ],
                        borderColor: [
                            "rgba(255,99,132,1)",
                            "rgba(54, 162, 235, 1)",
                            "rgba(255, 206, 86, 1)",
                            "rgba(75, 192, 192, 1)",
                            "rgba(153, 102, 255, 1)",
                            "rgba(255, 159, 64, 1)",
                        ],
                        borderWidth: 1,
                        fill: true
                    };
                }
                datasets[d.severalDates].data[severalDates.indexOf(d.severalDates)] = d.combinedGrades;
            });

            const newChart = new Chart(context, {
                type: "line",
                data: {
                    labels: labels,
                    datasets: Object.values(datasets),
                },
                options: {
                    plugins: {
                        title: {
                            display: true,
                            text: 'Stacked Line Chart'
                        },
                    },
                    scales: {
                        y: {
                            stacked: true
                        }
                    }
                }
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
