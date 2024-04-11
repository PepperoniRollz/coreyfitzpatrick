import React, { useRef, useEffect, useState } from "react";

interface RandomWalkProps {
  width?: number;
  height?: number;
  stepSize?: number;
}

const RandomWalk: React.FC<RandomWalkProps> = ({
  width = 800,
  height = 800,
  stepSize = 10,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const visitCountRef = useRef<{ [key: string]: number }>({});
  const stepsTakenRef = useRef(0); // Use a ref for stepsTaken

  const [endPoint, setEndPoint] = useState<{ x: number; y: number } | null>(
    null
  );
  const [isWalking, setIsWalking] = useState(true);
  const [numSteps, setNumSteps] = useState(0); // State to hold the number of steps
  const [stepsTaken, setStepsTaken] = useState(0); // State to track the steps taken

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumSteps(parseInt(e.target.value) || 0);
    stepsTakenRef.current = 0; // Reset stepsTaken when numSteps changes
  };
  const handleCanvasClick = (
    e: React.MouseEvent<HTMLCanvasElement, MouseEvent>
  ) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    const x = e.clientX - (rect?.left ?? 0);
    const y = e.clientY - (rect?.top ?? 0);
    setEndPoint({ x, y });
  };

  const drawAxes = (context: CanvasRenderingContext2D) => {
    context.strokeStyle = "#0000FF"; // Set axis color to blue
    context.lineWidth = 2; // Set line width for the axes    context.beginPath();

    // Draw X-axis
    context.moveTo(0, height / 2);
    context.lineTo(width, height / 2);

    // Draw Y-axis
    context.moveTo(width / 2, 0);
    context.lineTo(width / 2, height);

    context.stroke();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; // Guard against null values

    const context = canvas.getContext("2d");
    if (!context) return; // Guard against null values for context

    let x = width / 2;
    let y = height / 2;

    const directions = [
      { dx: 0, dy: -stepSize }, // North
      { dx: 0, dy: stepSize }, // South
      { dx: stepSize, dy: 0 }, // East
      { dx: -stepSize, dy: 0 }, // West
    ];

    context.clearRect(0, 0, width, height);
    // Optionally draw the endpoint
    if (endPoint) {
      context.fillStyle = "red";
      context.beginPath();
      context.arc(endPoint.x, endPoint.y, 5, 0, Math.PI * 2);
      context.fill();
      stepsTakenRef.current = 0; // Reset stepsTaken at the start of the walk
    }

    setStepsTaken(0); // Reset steps taken

    const draw = () => {
      console.log(numSteps, stepsTaken);

      if (stepsTakenRef.current >= numSteps) {
        clearInterval(intervalId);
        return;
      }
      const index = Math.floor(Math.random() * directions.length);
      const { dx, dy } = directions[index];

      const newX = Math.max(Math.min(x + dx, width), 0);
      const newY = Math.max(Math.min(y + dy, height), 0);

      const posKey = `${newX},${newY}`;
      visitCountRef.current[posKey] = (visitCountRef.current[posKey] || 0) + 1;
      const visits = visitCountRef.current[posKey];

      // Adjust line color based on visits (darker with more visits)
      const colorIntensity = Math.min(255, visits * 10); // Cap intensity to 255
      context.strokeStyle = `rgb(${colorIntensity}, ${colorIntensity}, ${colorIntensity})`;

      context.beginPath();
      context.moveTo(x, y);
      context.lineTo(newX, newY);
      context.stroke();

      x = newX;
      y = newY;

      // Check if reached the end point and stop if so
      if (
        endPoint &&
        Math.abs(x - endPoint.x) < stepSize &&
        Math.abs(y - endPoint.y) < stepSize
      ) {
        setIsWalking(false);
      }
      stepsTakenRef.current += 1;

      setStepsTaken((prevSteps) => prevSteps + 1);
    };

    const intervalId = setInterval(draw, 1);

    drawAxes(context);

    return () => clearInterval(intervalId);
  }, [width, height, stepSize, endPoint, isWalking]);

  return (
    <>
      <div>
        <label>
          Number of Steps:
          <input type="number" value={numSteps} onChange={handleInputChange} />
        </label>
        <label>Steps taken : {stepsTaken}</label>
      </div>
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        style={{ border: "2px solid #000" }}
        onClick={handleCanvasClick}
      />
    </>
  );
};

export default RandomWalk;
