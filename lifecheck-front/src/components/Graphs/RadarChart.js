"use client";
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function RadarChart({ data }) {
	const chartRef = useRef(null);

	useEffect(() => {
		if (chartRef.current) {
			if (chartRef.current.chart) {
				chartRef.current.chart.destroy();
			}
			const context = chartRef.current.getContext("2d");
			const lastAnalysis = data.length > 0 ? data[data.length - 1] : null;
			console.log("lastAnalysis", lastAnalysis);

			let healthGrades = 0;
			let educationGrades = 0;
			let livingGrades = 0;
			let lifeSatisfactionGrades = 0;
			let environmentGrades = 0;
			let incomeGrades = 0;
			let securityGrades = 0;
			let workLifeBalanceGrades = 0;

			if (lastAnalysis !== null) {
				healthGrades = lastAnalysis.gradeHealth;
				educationGrades = lastAnalysis.gradeEducation; // Convert educationGrade to array
				livingGrades = lastAnalysis.gradeHousing;
				lifeSatisfactionGrades = lastAnalysis.gradeLifeSatisfaction;
				environmentGrades = lastAnalysis.gradeEnvironment;
				incomeGrades = lastAnalysis.gradeIncome;
				securityGrades = lastAnalysis.gradeSecurity;
				workLifeBalanceGrades = lastAnalysis.gradeWorkLifeBalance;
			} else {
				console.log("no hay datos");
			}

			// const healthRadarGrades = data.map((analysis) => analysis.healthGrade);
			// console.log("healthRadarGrades", healthRadarGrades);

			// const educationRadarGrades = data.map((analysis) => analysis.educationGrade);
			// console.log("educationRadarGrades", educationRadarGrades);

			//const combinedGrades = [...healthGrades, ...educationGrades, ...livingGrades, ...lifeSatisfactionGrades, ...environmentGrades, ...incomeGrades, ...securityGrades, ...workLifeBalanceGrades];
			const combinedGrades = [
				healthGrades,
				educationGrades,
				livingGrades,
				lifeSatisfactionGrades,
				environmentGrades,
				incomeGrades,
				securityGrades,
				workLifeBalanceGrades,
			];

			//const combinedGrades = data.map((analysis) => [analysis.healthGrade, analysis.educationGrade]);
			const array = [
				"Salud",
				"Educación",
				"Vivienda ",
				"Satisfacción de Vida",
				"Medio Ambiente",
				"Ingresos",
				"Seguridad",
				"Equilibrio Vida-Trabajo",
			];
			const newChart = new Chart(context, {
				type: "radar",
				data: {
					labels: array,
					datasets: [
						{
							label: "Resultados",
							data: combinedGrades,
							backgroundColor: ["rgba(255, 99, 132, 0.2)"],
							borderColor: ["rgba(255,99,132,1)"],
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
