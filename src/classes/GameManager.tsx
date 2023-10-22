import { initializeApp } from "firebase/app";
// import gamesCSV from "../assets/json/magic_data.json";
import {
  CollectionReference,
  DocumentData,
  QuerySnapshot,
  addDoc,
  collection,
  getDocs,
  getFirestore,
  orderBy,
} from "firebase/firestore";

class GameManager {
  firebaseConfig = {
    apiKey: "AIzaSyCn0dZM-mwXCiOw_lGYJV7pFBKjuTX5mDg",
    authDomain: "regalturtlewebsite.firebaseapp.com",
    projectId: "regalturtlewebsite",
    storageBucket: "regalturtlewebsite.appspot.com",
    messagingSenderId: "780382182670",
    appId: "1:780382182670:web:2e8cf7e98bf83dc67f8b5f",
    measurementId: "G-D8P2NLCWNJ",
  };

  decks: Map<string, MyDeck>;
  games: MyGame[];
  players: string[];
  formats: string[];
  // CSV = gamesCSV;
  decks_snapshot: QuerySnapshot<DocumentData, DocumentData>;
  decks_collection: CollectionReference<DocumentData, DocumentData>;
  games_snapshot: QuerySnapshot<DocumentData, DocumentData>;
  games_collection: CollectionReference<DocumentData, DocumentData>;

  constructor(
    decks_snapshot: QuerySnapshot<DocumentData, DocumentData>,
    decks_collection: CollectionReference<DocumentData, DocumentData>,
    games_snapshot: QuerySnapshot<DocumentData, DocumentData>,
    games_collection: CollectionReference<DocumentData, DocumentData>
  ) {
    this.decks = new Map<string, MyDeck>();
    this.games = [];
    this.players = [];
    this.formats = [];
    this.cleanSetup();
    this.decks_snapshot = decks_snapshot;
    this.decks_collection = decks_collection;
    this.games_snapshot = games_snapshot;
    this.games_collection = games_collection;
  }

  saveNewGame(
    t_format: string[],
    t_players: string[],
    t_decks: string[],
    t_winner: string,
    t_date: string,
    t_owners: string[]
  ) {
    // correctly format the date
    let date_parts = t_date.split("-");
    let correct_date =
      date_parts[1] + "/" + date_parts[2] + "/" + date_parts[0];

    // get the players and their deck ids
    let new_players: string[] = [];
    let new_winner: string[] = [];
    this.decks.forEach((deck: MyDeck, id: string) => {
      for (let i = 0; i < t_owners.length; i++) {
        if (deck.owner == t_owners[i] && deck.name == t_decks[i]) {
          new_players.push(t_players[i] + "|" + deck.deck_id);
          if (t_players[i] == t_winner) {
            new_winner = [t_winner, deck.deck_id];
          }
        }
      }
    });

    addDoc(this.games_collection, {
      date: correct_date,
      format: t_format,
      winner: new_winner,
      players: new_players,
    });
  }

  newDeck(
    deck_owner: string,
    deck_name: string,
    deck_format: string,
    deck_id: string,
    deck_color: string
  ) {
    if (deck_color == "") {
      addDoc(this.decks_collection, {
        deck_id: deck_id,
        name: deck_name,
        format: deck_format,
        owner: deck_owner,
      });
    } else {
      addDoc(this.decks_collection, {
        deck_id: deck_id,
        name: deck_name,
        format: deck_format,
        owner: deck_owner,
        color: deck_color,
      });
    }
  }

  async cleanSetup() {
    this.decks = new Map<string, MyDeck>();
    this.games = [];
    this.players = [];
    this.formats = [];

    let temp_decks: any[] = [];
    let temp_games: any[] = [];

    // uncaught this.decks_snapshot could be undef
    try {
      this.decks_snapshot.docs.forEach((deck) => {
        temp_decks.push({ ...deck.data(), id: deck.id });
      });
    } catch (e) {
      console.log(e);
    }

    try {
      this.games_snapshot.docs.forEach((game) => {
        temp_games.push({ ...game.data(), id: game.id });
      });
    } catch (e) {
      console.log(e);
    }

    for (let i = 0; i < temp_decks.length; i++) {
      let data = temp_decks[i];
      this.decks.set(data["deck_id"], new MyDeck(data));
      let cur_player: string = data["owner"];
      if (!this.players.includes(cur_player)) {
        this.players.push(cur_player);
      }
    }

    for (let i = 0; i < temp_games.length; i++) {
      let data = temp_games[i];
      this.games.push(new MyGame(data, this.decks));
    }

    this.games.forEach((game: MyGame) => {
      game.players.forEach((name: string[]) => {
        if (!this.players.includes(name[0])) {
          this.players.push(name[0]);
        }
      });

      game.format.forEach((format: string) => {
        if (!this.formats.includes(format)) {
          this.formats.push(format);
        }
      });

      this.formats = ["Draft", "EDH", "Color Wheel", "Planechase"];
    });
  }

  getDecks(owner: string) {
    let decks: string[] = [];
    this.decks.forEach((deck: MyDeck) => {
      if (deck.owner == owner) {
        decks.push(deck.name);
      }
    });
    return decks;
  }

  getDeckWinPercent(deck: string) {
    let totalGames = 0;
    let totalWins = 0;
    for (let i = 0; i < this.games.length; i++) {
      for (let j = 0; j < this.games[i].players.length; j++) {
        if (this.games[i].players[j][1] == deck) {
          totalGames++;
        }
      }
      if (
        this.games[i].winner.deck &&
        this.games[i].winner.deck.deck_id == deck
      ) {
        totalWins++;
      }
    }
    return { totalWins, totalGames };
  }

  getDeckWinPercentString(deck: string) {
    let { totalWins, totalGames } = this.getDeckWinPercent(deck);
    if (totalGames > 0) {
      return (
        "" +
        Math.round((totalWins / totalGames) * 10000) / 100 +
        "% (" +
        totalWins +
        "/" +
        totalGames +
        ")"
      );
    }
    return "No games played";
  }
}

class MyGame {
  date: MyDate;
  format: string[];
  winner: MyPlayer;
  players: string[][];

  constructor(gameInfo: MyGameJson, decks: Map<string, MyDeck>) {
    const gameDate: string[] = gameInfo["date"].split("/");
    this.date = new MyDate(+gameDate[1], +gameDate[0], +gameDate[2]);
    this.format = gameInfo["format"];
    this.winner = new MyPlayer(gameInfo["winner"], decks);
    let newPlayers: string[][] = [];
    for (let i = 0; i < gameInfo["players"].length; i++) {
      let playerSplit = gameInfo["players"][i].split("|");
      newPlayers.push([playerSplit[0], playerSplit[1]]);
    }
    this.players = newPlayers;
  }
}

class MyPlayer {
  deck: MyDeck;
  name: string;

  constructor(winnerTuple: string[], decks: Map<string, MyDeck>) {
    this.name = winnerTuple[0];
    this.deck = decks.get(winnerTuple[1])!;
  }
}

interface MyDeckJson {
  deck_id: string;
  name: string;
  format: string;
  owner: string;
  color?: string;
}

interface MyGameJson {
  date: string;
  format: string[];
  winner: string[];
  players: string[];
}

class MyDeck {
  deck_id: string;
  name: string;
  format: string;
  owner: string;
  color?: string;

  constructor(deckInfo: MyDeckJson) {
    this.deck_id = deckInfo["deck_id"];
    this.name = deckInfo["name"];
    this.format = deckInfo["format"];
    this.owner = deckInfo["owner"];
    this.color = deckInfo["color"];
  }

  getColor() {
    return this.color ? this.color : "";
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
