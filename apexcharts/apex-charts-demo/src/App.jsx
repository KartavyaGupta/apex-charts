import BarChart from "./components/BarChart";
import PieChart from "./components/PieChart";
import AreaChart from "./components/AreaChart";
import LineChart from "./components/LineChart";
import DonutChart from "./components/DonutChart";
import StackedBarChart from "./components/StackedBarChart";
function App() {
  return (
    <div style={{ background: "white", display: "flex" }}>
      <StackedBarChart />
    </div>
  );
}

export default App;
