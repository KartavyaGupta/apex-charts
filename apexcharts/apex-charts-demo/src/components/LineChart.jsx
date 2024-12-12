import Chart from "react-apexcharts";
    
function LineChart() {
  return (
    <Chart
      type="line"
      width={1500}
      height={500}
      series={[
        { name: "1", data: [1, 2, 3, 4, 5] },
        { name: "2", data: [3, 3, 3, 3, 3] },
        { name: "3", data: [5, 4, 3, 2, 1] },
      ]}
      options={{
        title: {
          text: "trends",
        },
        xaxis: {
          title: { text: "product sell in months" },
          categories: ["jan", "fab", "march", "april", "may"],
        },
        theme: {
          mode: "light",
        },
      }}
    />
  );
}

export default LineChart;
