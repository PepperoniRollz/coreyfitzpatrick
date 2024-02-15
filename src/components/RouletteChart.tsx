import Chart from "react-google-charts";

type ChartDataProps = {
  series: (string | number)[][];
};

const options = {
  title: "Bankroll Over Time Using MartinGale Strategy",
  hAxis: {
    title: "Count of Bets",
    minValue: 0,
  },
  vAxis: {
    title: "Bankroll ($)",
    minValue: 0,
  },
  legend: "none",
};

const RouletteChart = ({ series }: ChartDataProps): JSX.Element => {
  return (
    <div>
      <Chart
        chartType="LineChart"
        data={series}
        width="100%"
        height="400px"
        legendToggle
        options={options}
      />
    </div>
  );
};

export default RouletteChart;
