// import { useEffect, useRef } from "react";
// import Chart from "chart.js/auto";

// export default function LineChart({ data }) {
//     const chartRef = useRef(null);

//     useEffect(() => {
//         if (chartRef.current) {
//             if (chartRef.current.chart) {
//                 chartRefs.current.chart.destroy();
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

      let healthGrades = data.map((analysis) => analysis.gradeHealth);
      let educationGrades = data.map((analysis) => analysis.gradeEducation); // Convert educationGrade to array
      let housingGrades = data.map((analysis) => analysis.gradeHousing); // Convert housingGrade to array
      let environmentGrades = data.map((analysis) => analysis.gradeEnvironment); // Convert environmentGrade to array
      let incomeGrades = data.map((analysis) => analysis.gradeIncome); // Convert incomeGrade to array
      let securityGrades = data.map((analysis) => analysis.gradeSecurity); // Convert securityGrade to array
      let workLifeBalanceGrades = data.map(
        (analysis) => analysis.gradeWorkLifeBalance,
      ); // Convert workLifeBalanceGrade to array
      const datasets = {
        health: {
          label: "Health Grade",
          data: healthGrades,
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 1,
          fill: true,
        },
        education: {
          label: "Education Grade",
          data: educationGrades,
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
          fill: true,
        },
        housing: {
          label: "Vivienda",
          data: housingGrades,
          backgroundColor: "rgba(255, 206, 86, 0.2)",
          borderColor: "rgba(255, 206, 86, 1)",
          borderWidth: 1,
          fill: true,
        },
        environment: {
          label: "Medio Ambiente",
          data: environmentGrades,
          backgroundColor: "rgba(153, 102, 255, 0.2)",
          borderColor: "rgba(153, 102, 255, 1)",
          borderWidth: 1,
          fill: true,
        },
        income: {
          label: "Ingresos",
          data: incomeGrades,
          backgroundColor: "rgba(255, 159, 64, 0.2)",
          borderColor: "rgba(255, 159, 64, 1)",
          borderWidth: 1,
          fill: true,
        },
        security: {
          label: "Seguridad",
          data: securityGrades,
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
          fill: true,
        },
        workLifeBalance: {
          label: "Equilibrio Vida-Trabajo",
          data: workLifeBalanceGrades,
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
          fill: true,
        },
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
              text: "Stacked Line Chart",
            },
          },
          scales: {
            y: {
              stacked: true,
            },
          },
        },
      });

      chartRef.current.chart = newChart;
    }
  }, [data, chartRef]);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <canvas ref={chartRef} />
    </div>
  );
}
