import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

type RouleteResultsProps = {
  results: MartingaleResults;
  startingStack: Number;
};

type MartingaleResults = {
  chanceOfSuccess: number;
  avgToSuccess: number;
  avgToFailure: number;
  averageTimeSuccess: number;
  averageTimeFailure: number;
  averageBet: number;
  averageFinalStack: number;
  bestResult: number;
};

const RouletteTable = ({
  results,
  startingStack,
}: RouleteResultsProps): JSX.Element => {
  const statistics = [
    { key: "Goal Probability", value: results.chanceOfSuccess.toFixed(2) },
    { key: "Avg Bet", value: `$${results.averageBet.toFixed(2)}` },
    { key: "Avg bets until goal", value: results.avgToSuccess.toFixed(2) },
    { key: "Avg bets until bankroll is depleted", value: results.avgToFailure.toFixed(2) },
    { key: "Avg time to goal (at 50 bets/hour)", value: `${results.averageTimeSuccess.toFixed(2)} hours (at 50 bets/hr)` },
    { key: "Avg time until bankroll is depleted (at 50 bets/hour)", value: `${results.averageTimeFailure.toFixed(2)} hours (at 50 bets/hr)` },
    { key: "Avg final stack", value: `$${results.averageFinalStack.toFixed(2)}` },
    { key: "Avg profit", value: `$${(results.averageFinalStack - Number(startingStack)).toFixed(2)}` },
    { key: "Best result", value: `$${results.bestResult.toFixed(2)}` },
  ];

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Statistic</TableCell>
            <TableCell align="right">Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {statistics.map((row) => (
            <TableRow key={row.key}>
              <TableCell component="th" scope="row">
                {row.key}
              </TableCell>
              <TableCell align="right">{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RouletteTable;
