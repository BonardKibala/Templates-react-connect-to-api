import React from "react";
import Chart from "./chart";
import { Title } from "./chartElement";

class AppCharts extends React.Component {
  state = {
    chartData: {},
    chartDataByUniv: {},
  };

  componentWillMount() {
    this.getChartData();
    this.getChartDataUniv();
  }
  getChartDataUniv() {
    this.setState({
      chartDataByUniv: {
        labels: ["Unikin", "Upc", "UK", "Unilu"],
        datasets: [
          {
            data: [617594, 181045, 153060, 106519],
            backgroundColor: ["#290038", "#f66f00", "green", "#612ff6"],
          },
        ],
      },
    });
  }
  getChartData() {
    this.setState({
      chartData: {
        labels: [
          "Janvier",
          "Février",
          "Mars",
          "avril",
          "Mai",
          "Juin",
          "Juillet",
          "Aout"
        ],
        datasets: [
          {
            data: [617594, 181045, 153060, 106519, 105162, 95072, 85072],
            backgroundColor: [
              "#290038",
              "#f66f00",
              "green",
              "#612ff6",
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 159, 64, 0.6)",
              "rgba(255, 99, 132, 0.6)",
              "rgba(255, 80, 102, 0.6)",
            ],
          },
        ],
      },
    });
  }

  render() {
    return (
      <div className="App">
        <Title>Statistique MyCampa</Title>
        <Chart
          chartData={this.state.chartData}
          chartDatabyUniv={this.state.chartDataByUniv}
          displayLegend={false}
        />
      </div>
    );
  }
}

export default AppCharts;
