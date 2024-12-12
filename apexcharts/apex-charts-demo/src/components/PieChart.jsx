import Chart from "react-apexcharts";

const PieChart = () => {
  return (
    <div style={{ background: "red" }}>
      <Chart
        type="pie"
        series={[1, 2, 3, 4, 5]}
        height={400}
        width={400}
        options={{
          title: {
            text: "my pie chart",
          },
          noData: { text: "loading" },
          labels: ["hindi", "Math", "English", "science", "social science"],
        }}
      />
    </div>
  );
};

export default PieChart;
