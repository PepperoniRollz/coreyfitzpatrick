import playingCardsList from "../utils/svgImporter";
import Card from "./Card";

interface CardProps {
  myCard: Card;
  height: string;
  onClick?: () => void;
  selected?: boolean;
}

export const CardImage = ({
  myCard,
  height,
  onClick,
  selected,
}: CardProps): JSX.Element => {
  const cardStyle = {
    border: selected ? "2px solid blue" : "1px solid gray", // Highlight when selected
    cursor: "pointer",
    padding: "2px",
    margin: "2px",
    borderRadius: "4px",
    boxShadow: selected ? "0px 0px 10px blue" : "none", // Additional styling for selected state
  };

  //   console.log("SHIT", myCard.card);
  return (
    <img
      src={playingCardsList[myCard.card.toUpperCase()]}
      alt={"card"}
      height={height}
      onClick={onClick}
      style={cardStyle}
    />
  );
};

export default CardImage;
