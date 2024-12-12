import Chart from "react-apexcharts";

function BarChart() {
  return (
    <>
      <Chart
        type="bar"
        width={1380}
        height={700}
        series={[{ name: "social media subscriber", data: [1, 2, 1, 1] }]}
        options={{
          title: {
            text: "barchart dev by kg",
            style: {
              fontSize: "40px",
            },
          },
          subtitle: {
            text: "this is a bar chart graph",
            style: {
              fontSize: 40,
            },
          },
          colors: ["red"],
          theme: {
            mode: "dark",
          },
          xaxis: {
            categories: ["fb", "twitter", "pinterest", "instagram"],
            title: {
              text: "social media",
              style: {
                color: "blue",
                fontSize: "16px",
              },
            },
            labels: {
              style: {
                colors: ["#f90000", "#f90000", "#f90000", "#f90000"], // Set colors for labels
                fontSize: "14px",
              },
            },
            axisBorder: {
              color: "#f90000", // Set color for the axis line
            },
            axisTicks: {
              color: "#f90000", // Set color for the ticks
            },
          },
          yaxis: {
            labels: {
              formatter: (val) => `$${val}`,
              style: {
                colors: ["red"],
              },
            },
            title: {
              text: "users",
              style: {
                color: ["red"],
              },
            },
          },
        }}
      />
    </>
  );
}

export default BarChart;
