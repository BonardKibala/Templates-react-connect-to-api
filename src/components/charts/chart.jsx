import React from "react";
import { Chart as ChartJS, registerables } from "chart.js";
import { Bar, Line, Pie } from "react-chartjs-2";
import { ChartContainer1, ChartContent } from "./chartElement";

ChartJS.register(...registerables);

const Chart = (props) => {
  return (
    <ChartContainer1>
      <ChartContent>
        <Bar
          data={props.chartData}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Statistique des inscriptiions par mois",
                font: {
                  weight: "bold",
                  size: 16,
                },
              },
              legend: {
                display: false,
                title: {
                  display: false,
                  text: "bnrd",
                },
                position: "bottom",
                labels: {
                  fontColor: "#000",
                },
              },
            },
          }}
        />
      </ChartContent>
      <ChartContent>
        <Line
          data={props.chartData}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Statistique des paiements par mois",
                font: {
                  weight: "bold",
                  size: 16,
                },
              },
              legend: {
                display: false,
                position: "bottom",
                labels: {
                  fontColor: "#000",
                },
              },
            },
          }}
        />
      </ChartContent>

      <ChartContent>
        <Pie
          data={props.chartDatabyUniv}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Statistique des paiements par université",
                font: {
                  weight: "bold",
                  size: 16,
                },
              },
              legend: {
                display: true,

                position: "bottom",
                labels: {
                  color: "#000",
                },
              },
            },
          }}
        />
      </ChartContent>
    </ChartContainer1>
  );
};

Chart.defaultProps = {
  displayTitle: true,
  displayLegend: false,
  legendPosition: "bottom",
};

export default Chart;
