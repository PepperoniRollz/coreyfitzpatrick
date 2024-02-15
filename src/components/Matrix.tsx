import React, { useState } from "react";
import "./PokerHandGrid.css";

type Rank =
  | "A"
  | "K"
  | "Q"
  | "J"
  | "T"
  | "9"
  | "8"
  | "7"
  | "6"
  | "5"
  | "4"
  | "3"
  | "2";

const PokerHandGrid: React.FC = () => {
  const ranks: Rank[] = [
    "A",
    "K",
    "Q",
    "J",
    "T",
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2",
  ];
  const [selectedHands, setSelectedHands] = useState<Set<string>>(new Set());

  const toggleHandSelection = (hand: string) => {
    setSelectedHands((prevSelectedHands) => {
      const newSelectedHands = new Set(prevSelectedHands);
      if (newSelectedHands.has(hand)) {
        newSelectedHands.delete(hand);
      } else {
        newSelectedHands.add(hand);
      }
      return newSelectedHands;
    });
  };

  const getHandLabel = (i: number, j: number): string => {
    return i <= j
      ? `${ranks[i]}${ranks[j]}${i === j ? "" : "s"}`
      : `${ranks[j]}${ranks[i]}o`;
  };

  return (
    <div className="poker-hand-grid">
      {ranks.map((_, i) => (
        <div key={i} className="row">
          {ranks.map((_, j) => {
            const hand = getHandLabel(i, j);
            const isSelected = selectedHands.has(hand);
            return (
              <div
                key={hand}
                className={`cell ${isSelected ? "selected" : ""}`}
                onClick={() => toggleHandSelection(hand)}
              >
                {hand}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default PokerHandGrid;
