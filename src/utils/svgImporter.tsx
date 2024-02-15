type PlayingCardsList = { [key: string]: string };
let suits = ["C", "D", "H", "S"];
let faces = ["A", "T", "J", "Q", "K"];

let addSuits = (i: string | number, playingCardsList: PlayingCardsList) => {
  for (const suit of suits) {
    playingCardsList[i + suit] = require("../images/cards/2color/" +
      i +
      suit +
      ".svg");
  }
};

let playingCardsList: PlayingCardsList = {};

for (let i = 2; i < 10; i++) {
  addSuits(i, playingCardsList);
}

for (const face of faces) {
  addSuits(face, playingCardsList);
}
// console.log(playingCardsList);

export default playingCardsList;
