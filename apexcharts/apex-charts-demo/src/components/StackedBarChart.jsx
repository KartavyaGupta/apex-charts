import Chart from "react-apexcharts";
const StackedBarChart = () => {
  return (
    <>
      <Chart
        type="bar"
        width={1349}
        height={560}
        series={[
          {
            name: "hydro electricc",
            data: [1, 2, 3, 4, 5],
          },
          {
            name: "oil",
            data: [5, 4, 3, 2, 1],
          },
        ]}
        options={{
          title: {
            text: "energy consumption",
          },
          chart: {
            stacked: true,
          },
          plotOptions: {
            bar: {
              horizontal: true,
              columnWidth: "100%",
            },
          },
          stroke: {
            width: 1,
          },
          xaxis: {
            title: {
              text: "energy consupmtion in year's",
            },
            categories: [2010, 2011, 2012, 2013, 2014],
          },
          yaxis: {
            title: {
              text: "data in k",
            },
            categories: [2010, 2011, 2012, 2013, 2014],
          },
          legend: {
            position: "right",
          },
        }}
      />
    </>
  );
};

export default StackedBarChart;
