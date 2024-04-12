import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const HpChart = ({ data }) => {
    
  if (!data) {
    return <div>Loading...</div>;
  }

  // Extracting data for visualization
  const hpData = { name: "HP", y: data.hp };

  // Chart configurations
  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: "HP: details",
    },
    xAxis: {
      categories: ["HP"],
    },
    yAxis: {
      title: {
        text: "Count",
      },
    },
    series: [
      {
        name: "HP",
        data: [hpData],
      },
    ],
    plotOptions: {
      column: {
        borderWidth: 0,
      },
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.percentage:.1f} %",
        },
      },
    },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default HpChart;
