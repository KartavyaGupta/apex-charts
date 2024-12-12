import Chart from "react-apexcharts";
import React from "react";

const AreaChart = () => {
  return (
    <Chart
      type="area"
      width={1440}
      height={1000}
      series={[{ name: "sales", data: [100, 200, 300, 400, 500] }]}
      options={{
        title: {
          text: "Areachart github style",
          style: {
            fontSize: 20,
          },
        },
        colors: ["red"],
        stroke: { width: 0, curve: "smooth" },
        fill: { opacity: 10 },
        theme: {
          mode: "light",
        },
        xaxis: {
          title: {
            text: "commit in year",
            style: {
              color: ["red"],
              fontSize: 20,
            },
          },
        },
      }}
    ></Chart>
  );
};

export default AreaChart;
