import React from "react";
import Chart from "react-apexcharts";

const DonutChart = () => {
  return (
    <Chart
      type="donut"
      width={400}
      height={400}
      series={[45, 67, 78, 89, 88]}
      options={{
        labels: ["US", "India", "Germany", "France", "Japan"],
        title: {
          text: "Medal Country Name",
        },
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: true,
                total: {
                  show: true,
                },
                color: "ffffff",
              },
            },
          },
        },
        dataLabels: {
          enabled: false, // Ensures data labels are disabled
        },
      }}
    />
  );
};

export default DonutChart;
