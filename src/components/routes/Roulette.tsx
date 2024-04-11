import {
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import { useState } from "react";
import RouletteChart from "../RouletteChart";
import RouletteHistogram from "../RouletteHistogram";
import RouletteTable from "../RouletteTable";

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

type ChartData = {
  series: (string | number)[][];
};
type InputData = {
  startingStack: number;
  firstBet: number;
  minBet: number;
  maxBet: number;
  goal: number;
  iterations: number;
  spins: number;
};

const oddsMap = new Map<number, number>();
oddsMap.set(0.474, 2);
oddsMap.set(0.4865, 2);
oddsMap.set(0.3158, 3);
oddsMap.set(0.3243, 3);
oddsMap.set(0.1579, 6);
oddsMap.set(0.1621, 6);
oddsMap.set(0.1315, 5);
oddsMap.set(0.1351, 5);
oddsMap.set(0.1052, 8);
oddsMap.set(0.1081, 8);
oddsMap.set(0.0789, 11);
oddsMap.set(0.081, 11);
oddsMap.set(0.0526, 17);
oddsMap.set(0.054, 17);
oddsMap.set(0.0263, 35);
oddsMap.set(0.027, 35);

const Roulette = (): JSX.Element => {
  const [runSpins, setRunSpins] = useState(true);
  const [runUntilBroke, setRunUntilBroke] = useState(false);
  const [runUntilGoal, setRunUntilGoal] = useState(false);
  const [chartData, setChartData] = useState<ChartData>({ series: [] });
  const [odds, setOdds] = useState<number>(0.474);
  const [payout, setPayout] = useState(2);
  const [results, setResults] = useState<MartingaleResults>({
    chanceOfSuccess: 0,
    avgToSuccess: 0,
    avgToFailure: 0,
    averageTimeSuccess: 0,
    averageTimeFailure: 0,
    averageBet: 0,
    averageFinalStack: 0,
    bestResult: 0,
  });
  const [inputData, setInputData] = useState<InputData>({
    startingStack: 1000,
    firstBet: 20,
    minBet: 20,
    maxBet: 20000,
    goal: 2000,
    iterations: 100,
    spins: 200,
  });

  const handleSpins = () => {
    setRunUntilBroke(false);
    setRunUntilGoal(false);
    setRunSpins(true);
  };

  const handleRunUntilBroke = () => {
    setRunUntilBroke(true);
    setRunUntilGoal(false);
    setRunSpins(false);
  };

  const handleRunUntilGoal = () => {
    setRunUntilBroke(false);
    setRunUntilGoal(true);
    setRunSpins(false);
  };

  const handleOddsChange = (event: SelectChangeEvent) => {
    setOdds(Number(event.target.value));
    setPayout(oddsMap.get(Number(event.target.value))!);
  };

  const martingale = (inputData: InputData): void => {
    const iterationsLost = [];
    const iterationsWon = [];
    const bets = [];
    const betTimesSuccess = [];
    const betTimesFailure = [];
    const simData = new Map<number, number[]>();
    const n = inputData.iterations;

    for (let i = 0; i < n; i++) {
      let bet = inputData.firstBet;
      let stack = inputData.startingStack;
      let numBets = 0;
      if (simData.get(numBets)) {
        simData.get(numBets)![i] = stack;
      } else {
        simData.set(numBets, new Array(inputData.iterations));
      }
      if (i === 0) {
        simData.get(numBets)![i] = stack;
      }

      while (
        stack > 0 ||
        (stack > 0 && runSpins && numBets < inputData.spins)
      ) {
        if (stack - bet < 0) {
          bet = stack;
          // } else if (stack - bet < 0 && runSpins) {
          //   bet = inputData.firstBet;
        }
        if (bet > inputData.maxBet) {
          bet = inputData.maxBet;
        }
        if (bet < inputData.minBet) {
          bet = inputData.minBet;
        }
        stack -= bet;
        if (Math.random() < odds) {
          stack += bet * payout;
          bet = inputData.firstBet;
        } else {
          bet *= 2;
        }
        bets.push(bet);
        numBets++;

        if (simData.get(numBets)) {
          simData.get(numBets)![i] = stack;
        } else {
          simData.set(numBets, new Array(inputData.iterations));
          simData.get(numBets)![i] = stack;
        }

        if (stack >= inputData.goal) {
          iterationsWon.push(numBets);
          betTimesSuccess.push(numBets / 50);
        }

        if (stack <= 0) {
          iterationsLost.push(numBets);
          betTimesFailure.push(numBets / 50);
        }
        if (runUntilGoal === true && stack >= inputData.goal) {
          break;
        }
        if (runSpins === true && numBets >= inputData.spins) {
          break;
        }
      }
    }

    let largestKey = null;

    for (let [key, value] of simData.entries()) {
      if (largestKey === null || key > largestKey) {
        largestKey = key;
      }
    }

    const cData = transformToChartData(inputData, simData);
    const finalRow: number[] = cData.series[cData.series.length - 1].slice(
      1
    ) as number[];

    setChartData(cData);
    setResults({
      chanceOfSuccess:
        finalRow.filter((value) => value >= inputData.goal).length /
        finalRow.length,
      avgToSuccess:
        iterationsWon.reduce((acc, curr) => acc + curr, 0) /
        iterationsWon.length,
      avgToFailure:
        iterationsLost.reduce((acc, curr) => acc + curr, 0) /
        iterationsLost.length,
      averageTimeSuccess:
        betTimesSuccess.reduce((acc, curr) => acc + curr, 0) /
        betTimesSuccess.length,
      averageTimeFailure:
        betTimesFailure.reduce((acc, curr) => acc + curr, 0) /
        betTimesFailure.length,
      averageBet: bets.reduce((acc, curr) => acc + curr, 0) / bets.length,
      averageFinalStack:
        finalRow.reduce((acc, curr) => acc + curr, 0) / finalRow.length,
      bestResult: Math.max(...finalRow),
    });
  };

  const transformToChartData = (
    inputData: InputData,
    simData: Map<number, number[]>
  ): ChartData => {
    let transformedArray: ChartData = { series: [] };
    let columns: string[] = [];
    for (let i = 0; i < inputData.iterations + 1; i++) {
      columns.push(i.toString());
    }
    transformedArray.series.push(columns);

    for (let [betNumber, bankrollz] of simData.entries()) {
      let arrayEntry = [betNumber, ...bankrollz];
      transformedArray.series.push(arrayEntry);
    }

    for (let i = 1; i < transformedArray.series.length; i++) {
      for (let j = 1; j < transformedArray.series[i].length; j++) {
        if (transformedArray.series[i][j] === undefined) {
          transformedArray.series[i][j] = transformedArray.series[i - 1][j];
        }
      }
    }
    return transformedArray;
  };

  console.log(odds);

  return (
    <>
      <Grid container spacing={5} paddingTop={"2%"}>
        <Box sx={{ width: "100%", marginTop: 2, marginX: 50 }}>
          {/* Adjust the margin as needed */}
          <Typography variant="h4" align="left" gutterBottom>
            {"Roulette Martingale Strategy."}
          </Typography>
          <Divider sx={{ borderColor: "#000000" }} />
        </Box>
        <Box sx={{ borderColor: "primary.main" }}>
          <Grid item xs={12} marginLeft={50} marginRight={50}>
            <Typography variant="body1" align={"left"}>
              The Martingale system is a betting strategy that has been around
              since the 18th century. The idea is to double your bet after every
              loss until you win. Theoretically, this strategy will always net
              you a win of your initial bet. However, in practice, there are a
              few problems with this strategy. First, most casinos have a
              maximum bet limit. Second, most people do not have an infinite
              bankroll. This calculator will show you how long it will take to
              reach your goal with the Martingale system.
            </Typography>
          </Grid>
        </Box>
        <Grid
          item
          xs={12}
          md={12}
          marginLeft={50}
          marginRight={50}
          paddingBottom={"10px"}
        >
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Odds</InputLabel>
            <Select label="Odds" onChange={handleOddsChange} displayEmpty>
              <MenuItem value={0.474}>
                1:1 47.37% 18 Numbers (Red/Black/Odd/Even/High/Low) (American)
              </MenuItem>
              <MenuItem value={0.4865}>
                1:1 48.65% 18 Numbers (Red/Black/Odd/Even/High/Low) (European)
              </MenuItem>
              <MenuItem value={0.3158}>
                2:1 31.58% 12 Numbers (Column/Dozen) (American)
              </MenuItem>
              <MenuItem value={0.3243}>
                2:1 32.43% 12 Numbers (Column/Dozen) (European)
              </MenuItem>
              <MenuItem value={0.1579}>
                5:1 15.79% Six Numbers (American)
              </MenuItem>
              <MenuItem value={0.1621}>
                5:1 16.21% Six Numbers (European)
              </MenuItem>
              <MenuItem value={0.1315}>
                6:1 13.15% Five Numbers (American)
              </MenuItem>
              <MenuItem value={0.1351}>
                6:1 13.51% Five Numbers (European)
              </MenuItem>
              <MenuItem value={0.1052}>
                8:1 10.52% Four Numbers (American)
              </MenuItem>
              <MenuItem value={0.1081}>
                8:1 10.81% Four Numbers (European)
              </MenuItem>
              <MenuItem value={0.0789}>
                11:1 7.89% Three Numbers (American)
              </MenuItem>
              <MenuItem value={0.081}>
                11:1 8.10% Three Numbers (European)
              </MenuItem>
              <MenuItem value={0.0526}>
                17:1 5.26% Two Numbers (American)
              </MenuItem>
              <MenuItem value={0.054}>
                17:1 5.40% Two Numbers (European)
              </MenuItem>
              <MenuItem value={0.0263}>
                35:1 2.63% One Number (Straight Bet) (American)
              </MenuItem>
              <MenuItem value={0.027}>
                35:1 2.70% One Number (Straight Bet) (European)
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid
          container
          spacing={2} // Reduce this value to bring columns closer
          sx={{ px: 50 }} // Sets left and right padding (5 * theme spacing unit)
        >
          {" "}
          <Grid item xs={12} md={4}>
            <Grid item paddingBottom={"10px"}>
              <TextField
                type="number"
                label="starting stack"
                defaultValue={1000}
                onChange={(e) =>
                  setInputData({
                    ...inputData,
                    startingStack: Number(e.target.value),
                  })
                }
              ></TextField>
            </Grid>
            <Grid item paddingBottom={"10px"}>
              <TextField
                type="number"
                label="first bet"
                defaultValue={20}
                onChange={(e) =>
                  setInputData({
                    ...inputData,
                    firstBet: Number(e.target.value),
                  })
                }
              ></TextField>
            </Grid>
            <Grid item paddingBottom={"10px"}>
              <TextField
                type="number"
                label="minimum bet"
                defaultValue={20}
                onChange={(e) =>
                  setInputData({
                    ...inputData,
                    minBet: Number(e.target.value),
                  })
                }
              ></TextField>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4} paddingBottom={"10px"}>
            <Grid item>
              <TextField
                type="number"
                label="max bet"
                defaultValue={20000}
                onChange={(e) =>
                  setInputData({
                    ...inputData,
                    maxBet: Number(e.target.value),
                  })
                }
              ></TextField>
              <Grid item paddingBottom={"10px"}>
                <TextField
                  type="number"
                  label="goal"
                  defaultValue={2000}
                  onChange={(e) =>
                    setInputData({
                      ...inputData,
                      goal: Number(e.target.value),
                    })
                  }
                ></TextField>
              </Grid>
            </Grid>
            <Grid item paddingBottom={"10px"}>
              <TextField
                type="number"
                label="iterations"
                defaultValue={100}
                onChange={(e) =>
                  setInputData({
                    ...inputData,
                    iterations: Number(e.target.value),
                  })
                }
              ></TextField>
            </Grid>
            {runSpins && (
              <Grid item paddingBottom={"10px"}>
                <TextField
                  type="number"
                  label="spins"
                  defaultValue={200}
                  onChange={(e) =>
                    setInputData({
                      ...inputData,
                      spins: Number(e.target.value),
                    })
                  }
                ></TextField>
              </Grid>
            )}
          </Grid>
          <Grid item xs={12} md={4} paddingBottom={"10px"}>
            <FormControl>
              <RadioGroup
                style={{ justifyContent: "center" }}
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                defaultValue="until spins"
              >
                <FormControlLabel
                  value="until broke"
                  control={<Radio />}
                  label="Run until bankroll is depleted"
                  onChange={() => handleRunUntilBroke()}
                />
                <FormControlLabel
                  value="until goal"
                  control={<Radio />}
                  label="Run until goal OR bankroll is depleted"
                  onChange={() => handleRunUntilGoal()}
                />
                <FormControlLabel
                  value="until spins"
                  control={<Radio />}
                  label="Run for a fixed number of spins of the wheel"
                  onChange={() => handleSpins()}
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={12}>
            <Button
              variant="contained"
              onClick={() => {
                martingale(inputData);
              }}
            >
              Go!
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              maxHeight: "50%",
            }}
          >
            {/* <RouletteResults results={results} inputData={inputData} /> */}
            <RouletteTable
              results={results}
              startingStack={inputData.startingStack}
            />
          </Grid>
          <Grid item xs={12}>
            <RouletteChart series={chartData.series} />
          </Grid>
          <Grid item marginBottom={"75px"} xs={12}>
            <RouletteHistogram series={chartData.series} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Roulette;
