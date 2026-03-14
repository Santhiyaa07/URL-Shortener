import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions
} from "chart.js";

import { Chart } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const StatisticsChart = ({ data }: any) => {

  if (!data || data.length === 0) {
    return (
      <div className="stats">
        <div className="stats-header">Statistics</div>
        <div className="stats-body">No data available</div>
      </div>
    );
  }

  const map: any = {};

  data.forEach((item: any) => {

    const date = new Date(item.createdAt).toLocaleDateString();

    if (!map[date]) {
      map[date] = {
        clicks: 0,
        creations: 0
      };
    }

    map[date].clicks += item.clickCount || 0;
    map[date].creations += 1;

  });

  const labels = Object.keys(map).sort(
    (a, b) => new Date(a).getTime() - new Date(b).getTime()
  );

  const clicks = labels.map((d) => map[d].clicks);
  const creations = labels.map((d) => map[d].creations);

  const chartData: ChartData<"bar" | "line"> = {
    labels,
    datasets: [
      {
        type: "line",
        label: "URL Clicks",
        data: clicks,
        borderColor: "#4db6ac",              // teal line
        backgroundColor: "rgba(77,182,172,0.25)", // light teal fill
        tension: 0.4,
        fill: true,
        pointBackgroundColor: "#4db6ac",
        pointRadius: 4
      },
      {
        type: "bar",
        label: "URL Creations",
        data: creations,
        backgroundColor: "#3498db"           // blue bars
      }
    ]
  };

  const options: ChartOptions<"bar" | "line"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top"
      },
      title: {
        display: true,
        text: "Recent Statistics of Click Counts"
      }
    },
    scales: {
      x: {
        grid: {
          color: "#e0e0e0"
        }
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "#e0e0e0"
        }
      }
    }
  };

return (

  <div className="stats-container">

    <div className="stats-header">
      Statistics
    </div>

    <div className="stats-body">

      <Chart type="bar" data={chartData} options={options} />

    </div>

  </div>

);
};

export default StatisticsChart;