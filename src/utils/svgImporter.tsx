type PlayingCardsList = { [key: string]: string };

const svgModules = import.meta.glob("../images/cards/2color/*.svg", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

let playingCardsList: PlayingCardsList = {};

for (const [path, url] of Object.entries(svgModules)) {
  const filename = path.split("/").pop()?.replace(".svg", "");
  if (filename) {
    playingCardsList[filename] = url;
  }
}

export default playingCardsList;
