import { games } from "./store";

export function startLogger() {
  setInterval(() => {
    console.log("games", games);
  }, 5000);
}
