 
 // import { useEffect, useRef } from "react";
// import Chart from "chart.js/auto";
 
// export default function LineChart({ data }) {
//     const chartRef = useRef(null);

//     useEffect(() => {
//         if (chartRef.current) {
//             if (chartRef.current.chart) {
//                 chartRef.current.chart.destroy();
//             }
//             const context = chartRef.current.getContext("2d");
//             //const healthGrades = data.map((analysis) => analysis.healthGrade);
//             //const labels = Array.from(new Set(data.map((d) => d.month))); // Extract unique months
//             const labels = data.map((analysis) => analysis.createdAt);
//             const severalDates = [...labels];
//             console.log("severalDates", severalDates);
            

//             const array = [ "Salud", "Educación", "Vivienda ", "Satisfacción de Vida", "Medio Ambiente", "Ingresos", "Seguridad", "Equilibrio Vida-Trabajo"];
//             const healthRadarGrades = data.map((analysis) => analysis.healthGrade);
//             console.log("healthRadarGrades", healthRadarGrades);
            
//             const educationRadarGrades = data.map((analysis) => analysis.educationGrade);
//             console.log("educationRadarGrades", educationRadarGrades);
            
//             const combinedGrades = [...healthRadarGrades, ...educationRadarGrades];
//             const datasets = {};

//             // Group data by label
//             combinedGrades.forEach((d) => {
//                 if (!datasets[d.combinedGrades]) {
//                     datasets[d.combinedGrades] = {
//                         label: d.combinedGrades,
//                         data: new Array(combinedGrades.length).fill(0),
//                         backgroundColor: [
//                             "rgba(255, 99, 132, 0.2)",
//                             "rgba(54, 162, 235, 0.2)"
//                         ],
//                         borderColor: [
//                             "rgba(255,99,132,1)",
//                             "rgba(54, 162, 235, 1)"
//                         ],
//                         borderWidth: 1,
//                         fill: true
//                     };
//                 }
//                 datasets[d.combinedGrades].data[combinedGrades.indexOf(d.severalDates)] = d.combinedGrades;
//             });

//             const newChart = new Chart(context, {
//                 type: "line",
//                 data: {
//                     labels: labels,
//                     datasets: Object.values(datasets),
//                 },
//                 options: {
//                     plugins: {
//                         title: {
//                             display: true,
//                             text: 'Stacked Line Chart'
//                         },
//                     },
//                     scales: {
//                         y: {
//                             stacked: true
//                         }
//                     }
//                 }
//             });

//             chartRef.current.chart = newChart;
//         }
//     }, [data, chartRef]);

//     return (
//         <div style={{ position: "relative", width: "90%", height: "90%" }}>
//             <canvas ref={chartRef} />
//         </div>
//     );
// }
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
            const labels = data.map((analysis) => analysis.createdAt);
            
            const healthGrades = data.map((analysis) => analysis.healthGrade);
            const educationGrades = data.map((analysis) => analysis.educationGrade);
            const datasets = {
                health: {
                    label: "Health Grade",
                    data: healthGrades,
                    backgroundColor: "rgba(255, 99, 132, 0.2)",
                    borderColor: "rgba(255,99,132,1)",
                    borderWidth: 1,
                    fill: true
                },
                education: {
                    label: "Education Grade",
                    data: educationGrades,
                    backgroundColor: "rgba(54, 162, 235, 0.2)",
                    borderColor: "rgba(54, 162, 235, 1)",
                    borderWidth: 1,
                    fill: true
                }
            };

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
