import gamesCSV from "../assets/json/magic_data.json";

class GameManager {
  games: MyGame[];
  decks: MyDeck[];

  constructor() {
    this.games = [];
    this.decks = [];
    gamesCSV["decks"].forEach(this.makeDecks);
    gamesCSV["games"].forEach(this.makeGames);
  }

  makeDecks(deck: MyDeckJson) {
    this.decks.push(new MyDeck(deck));
  }

  makeGames(game: MyGameJson) {
    this.games.push(new MyGame(game));
  }
}

class MyGame {
  date: MyDate;

  constructor(gameInfo: MyGameJson) {
    const gameDate: string[] = gameInfo["date"].split("/");
    this.date = new MyDate(+gameDate[1], +gameDate[0], +gameDate[2]);
  }
}

interface MyDeckJson {
  name: string;
  format: string;
  owner: string;
}

interface MyGameJson {
  date: string;
  format: string[];
  winner: string[];
  players: string[][];
}

class MyDeck {
  name: string;
  format: string;
  owner: string;

  constructor(deckInfo: MyDeckJson) {
    this.name = deckInfo["name"];
    this.format = deckInfo["format"];
    this.owner = deckInfo["owner"];
  }
}

class MyDate {
  day: number;
  month: number;
  year: number;

  constructor(day: number, month: number, year: number) {
    this.day = day;
    this.month = month;
    this.year = year;
  }

  dateEquals(other: MyDate) {
    if (
      this.day == other.day &&
      this.month == other.month &&
      this.year == other.year
    ) {
      return true;
    } else {
      return false;
    }
  }

  dateBefore(other: MyDate) {
    if (!this.dateEquals(other)) return false;
    if (other.year < this.year) return true;
    if (other.month < this.month) return true;
    if (other.day < this.day) return true;
    return false;
  }

  dateAfter(other: MyDate) {
    if (!this.dateEquals(other)) return false;
    if (other.year > this.year) return true;
    if (other.month > this.month) return true;
    if (other.day > this.day) return true;
    return false;
  }
}

export default GameManager;
