import { startLogger } from "./logger";
import { games } from "./store";

startLogger();

setInterval(() => {
  games.push({
    id: Math.random().toString(),
    whitePlayerName: "White",
    blackPlayerName: "Black",
    moves: [],
  });
}, 5000);
