import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

type ChartDataProps = {
  series: (string | number)[][];
};

const options = {
  title: "Bankroll Peak Distribution Using MartinGale Strategy",
  hAxis: {
    title: "Bankroll ($) Peak",
    minValue: 0,
  },
  vAxis: {
    title: "Frequency",
    minValue: 0,
  },
  histogram: { lastBucketPercentile: 5 },
  legend: "none",
};

const convertToHistogram = (
  series: (string | number)[][]
): (string | number)[][] => {
  let mixedArray: (string | number)[][] = [];
  if (series.length !== 0) {
    let arrayCopy = series.slice(1);

    const newSeries: number[][] = arrayCopy.map((row) =>
      row.map((value) => Number(value))
    );
    let numberOfColumns = newSeries[0].length;
    let maxValues = new Array(numberOfColumns).fill(-Infinity);

    for (let i = 0; i < numberOfColumns; i++) {
      maxValues[i] = Math.max(...newSeries.map((row) => row[i]));
    }

    mixedArray.push(["Bets", "Bankroll"]);
    for (let i = 0; i < maxValues.length; i++) {
      const newArr = [];
      newArr.push(i.toString());
      newArr.push(maxValues[i]);
      mixedArray.push(newArr);
    }
  }
  return mixedArray;
};

const RouletteHistogram = ({ series }: ChartDataProps): JSX.Element => {
  const [mixedArray, setMixedArray] = useState<(string | number)[][]>([]);

  useEffect(() => {
    setMixedArray(convertToHistogram(series));
  }, [series]);

  return (
    <div>
      <Chart
        chartType="Histogram"
        data={mixedArray}
        width="100%"
        height="400px"
        legendToggle
        options={options}
      />
    </div>
  );
};

export default RouletteHistogram;
