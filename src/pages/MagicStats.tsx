import React, { BaseSyntheticEvent, useState } from "react";
import PageWithNavBar from "../components/PageWithNavBar";
import Alert from "../components/Alert";
import GameManager from "../classes/GameManager";
import {
  Form,
  Button,
  Container,
  Col,
  Row,
  Dropdown,
  ButtonGroup,
} from "react-bootstrap";
import {
  CollectionReference,
  DocumentData,
  Query,
  QuerySnapshot,
  SnapshotMetadata,
  getDocs,
} from "firebase/firestore";

enum Choice {
  none,
  showDecks,
  addGame,
  addDeck,
}

interface Props {
  decks_snapshot: QuerySnapshot<DocumentData, DocumentData>;
  decks_collection: CollectionReference<DocumentData, DocumentData>;
  games_snapshot: QuerySnapshot<DocumentData, DocumentData>;
  games_collection: CollectionReference<DocumentData, DocumentData>;
}

function removeItemOnce(arr: string[], value: string) {
  var index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

function nestedArray(num: number) {
  var array: never[][] = [];
  for (var i = 0; i < num; i++) {
    array.push([]);
  }
  return array;
}

function changeName(arr: string[], index: number, name: string) {
  var newArr = arr;
  newArr[index] = name;
  return newArr;
}

function MagicStats({
  decks_snapshot,
  decks_collection,
  games_snapshot,
  games_collection,
}: Props) {
  // const [decksSnapshot, setDecksSnapshot] = useState(

  // );

  // getDocs(decks_collection).then((snapshot) => {
  //   let temp_decks: any[] = [];
  //   snapshot.docs.forEach((deck) => {
  //     temp_decks.push({ ...deck.data(), id: deck.id });
  //   });
  //   setDecksSnapshot(temp_decks);
  // });

  // const gamesSnapshot;
  // const setGamesSnapshot;

  // getDocs(games_collection).then((snapshot) => {
  //   let temp_games: any[] = [];
  //   snapshot.docs.forEach((deck) => {
  //     temp_games.push({ ...deck.data(), id: deck.id });
  //   });
  //   [gamesSnapshot, setGamesSnapshot] = useState(temp_games);
  // });

  const [currentChoice, setCurrentChoice] = useState(Choice.showDecks);
  const [currentAddName, setCurrentAddName] = useState([
    "Select an player",
    "Select an player",
    "Select an player",
    "Select an player",
    "Select an player",
    "Select an player",
  ]);
  const [currentDeckOwner, setCurrentDeckOwner] = useState([
    "Select an owner for the deck",
    "Select an owner for the deck",
    "Select an owner for the deck",
    "Select an owner for the deck",
    "Select an owner for the deck",
    "Select an owner for the deck",
  ]);
  const [currentAddDeck, setCurrentAddDeck] = useState([
    "Select a deck",
    "Select a deck",
    "Select a deck",
    "Select a deck",
    "Select a deck",
    "Select a deck",
  ]);
  const [currentAddFormat, setCurrentAddFormat] = useState(["Select a format"]);
  const [currentNumPlayers, setNumPlayers] = useState([[], [], [], []]);
  const [selectWinner, setSelectWinner] = useState("Select a winner");

  const [addDeckName, setAddDeckName] = useState("");
  const [addDeckOwner, setAddDeckOwner] = useState("");
  const [addDeckFormat, setAddDeckFormat] = useState("");
  const [addDeckID, setAddDeckID] = useState("");
  const [addDeckColor, setAddDeckColor] = useState("");

  // if (decksSnapshot == undefined || gamesSnapshot == undefined) {
  //   return <div>Loading!</div>;
  // }

  let MyData = new GameManager(
    decks_snapshot,
    decks_collection,
    games_snapshot,
    games_collection
  );
  MyData.cleanSetup();

  return (
    <PageWithNavBar>
      <div
        className="container-fluid"
        style={{
          paddingTop: "1.5rem",
          paddingBottom: "2.5rem",
        }}
      >
        <Container
          fluid
          className="rounded-4"
          style={{
            padding: "0.75rem",
            width: "90%",
            background:
              "linear-gradient(315deg, rgba(39, 245, 219, 0.8), rgba(35, 186, 166, 0.8), rgba(33, 218, 129, 0.9), rgba(59, 162, 70, 0.8), rgba(33, 218, 129, 0.9), rgba(35, 186, 166, 0.8), rgba(39, 245, 219, 0.8))",
          }}
        >
          {/* <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Command</Form.Label>
              <Form.Control placeholder="Enter command" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form> */}
          <Button
            variant="secondary"
            onClick={() => setCurrentChoice(Choice.showDecks)}
          >
            Decks
          </Button>
          <a> </a>
          <Button
            variant="secondary"
            onClick={() => setCurrentChoice(Choice.addGame)}
          >
            Add Game
          </Button>
          <a> </a>
          <Button
            variant="secondary"
            onClick={() => setCurrentChoice(Choice.addDeck)}
          >
            Add Deck
          </Button>
        </Container>
        {currentChoice == Choice.showDecks && (
          <Container style={{ padding: "0.3rem", alignItems: "center" }}>
            {Array.from(MyData.decks.keys()).map((item, index, dataArray) =>
              index % 3 == 0 ? (
                <Row key={index}>
                  <Col
                    className="rounded-4"
                    key={dataArray[index]}
                    style={{
                      margin: "0.5rem",
                      background:
                        MyData.decks.get(dataArray[index])?.color ||
                        "rgba(200, 200, 200, 0.9)",
                    }}
                  >
                    <h3 style={{ textAlign: "center" }}>
                      {MyData.decks.get(dataArray[index])?.name}
                    </h3>
                    <h6>
                      Format: {MyData.decks.get(dataArray[index])?.format}
                    </h6>
                    <h6>Owner: {MyData.decks.get(dataArray[index])?.owner}</h6>
                    <h6>
                      Win Percent:{" "}
                      {MyData.getDeckWinPercentString(dataArray[index])}
                    </h6>
                  </Col>

                  {dataArray[index + 1] ? (
                    <Col
                      className="rounded-4"
                      key={dataArray[index + 1]}
                      style={{
                        margin: "0.5rem",
                        background:
                          MyData.decks.get(dataArray[index + 1])?.color ||
                          "rgba(200, 200, 200, 0.9)",
                      }}
                    >
                      <h3 style={{ textAlign: "center" }}>
                        {MyData.decks.get(dataArray[index + 1])?.name}
                      </h3>
                      <h6>
                        Format: {MyData.decks.get(dataArray[index + 1])?.format}
                      </h6>
                      <h6>
                        Owner: {MyData.decks.get(dataArray[index + 1])?.owner}
                      </h6>
                      <h6>
                        Win Percent:{" "}
                        {MyData.getDeckWinPercentString(dataArray[index + 1])}
                      </h6>
                    </Col>
                  ) : (
                    <Col style={{ margin: "0.5rem" }} key="nullcol1"></Col>
                  )}

                  {dataArray[index + 2] ? (
                    <Col
                      className="rounded-4"
                      key={dataArray[index + 2]}
                      style={{
                        margin: "0.5rem",
                        background:
                          MyData.decks.get(dataArray[index + 2])?.color ||
                          "rgba(200, 200, 200, 0.9)",
                      }}
                    >
                      <h3 style={{ textAlign: "center" }}>
                        {MyData.decks.get(dataArray[index + 2])?.name}
                      </h3>
                      <h6>
                        Format: {MyData.decks.get(dataArray[index + 2])?.format}
                      </h6>
                      <h6>
                        Owner: {MyData.decks.get(dataArray[index + 2])?.owner}
                      </h6>
                      <h6>
                        Win Percent:{" "}
                        {MyData.getDeckWinPercentString(dataArray[index + 2])}
                      </h6>
                    </Col>
                  ) : (
                    <Col style={{ margin: "0.5rem" }} key="nullcol2"></Col>
                  )}
                </Row>
              ) : null
            )}
          </Container>
        )}
        {currentChoice == Choice.addGame && (
          <Container style={{ padding: "0.3rem", alignItems: "center" }}>
            <Row
              style={{
                textAlign: "center",
              }}
            >
              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-basic deck-owner-dropdown"
                  variant="info"
                >
                  {currentAddFormat.reduce((s1: string, s2: string) => {
                    return s1 + ", " + s2;
                  })}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {MyData.formats.map((format: string) => (
                    <Dropdown.Item
                      onClick={() => {
                        console.log(currentAddFormat);
                        if (currentAddFormat.includes("Select a format")) {
                          setCurrentAddFormat(
                            removeItemOnce(currentAddFormat, "Select a format")
                          );
                        }
                        if (currentAddFormat.includes(format)) {
                          setCurrentAddFormat(
                            removeItemOnce(currentAddFormat, format)
                          );
                          setCurrentAddFormat(currentAddFormat.concat([]));
                          if (currentAddFormat.length == 0) {
                            setCurrentAddFormat(["Select a format"]);
                          }
                        } else {
                          setCurrentAddFormat(
                            currentAddFormat.concat([format])
                          );
                        }
                        console.log(currentAddFormat);
                      }}
                    >
                      {format}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              <div style={{ height: "0.3rem" }}></div>
              <Col>
                <ButtonGroup>
                  <Button
                    variant="info"
                    onClick={() => {
                      setNumPlayers(nestedArray(2));
                    }}
                  >
                    2 players
                  </Button>
                  <Button
                    variant="info"
                    onClick={() => {
                      setNumPlayers(nestedArray(3));
                    }}
                  >
                    3 players
                  </Button>
                  <Button
                    variant="info"
                    onClick={() => {
                      setNumPlayers(nestedArray(4));
                    }}
                  >
                    4 players
                  </Button>
                  <Button
                    variant="info"
                    onClick={() => {
                      setNumPlayers(nestedArray(5));
                    }}
                  >
                    5 players
                  </Button>
                  <Button
                    variant="info"
                    onClick={() => {
                      setNumPlayers(nestedArray(6));
                    }}
                  >
                    6 players
                  </Button>
                </ButtonGroup>
              </Col>
            </Row>

            <Row>
              {currentNumPlayers.map((value, index) => (
                <Col style={{ textAlign: "center", padding: "0.5rem" }}>
                  <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic deck-owner-dropdown">
                      {currentAddName[index]}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      {MyData.players.map((name: string) => (
                        <Dropdown.Item
                          onClick={() => {
                            setCurrentAddName(
                              changeName(currentAddName, index, name)
                            );
                            setCurrentAddName(currentAddName.concat([]));
                          }}
                        >
                          {name}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>

                  <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic deck-owner-dropdown">
                      {currentDeckOwner[index]}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      {MyData.players.map((name: string) => (
                        <Dropdown.Item
                          onClick={() => {
                            setCurrentDeckOwner(
                              changeName(currentDeckOwner, index, name)
                            );
                            setCurrentDeckOwner(currentDeckOwner.concat([]));
                          }}
                        >
                          {name}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>

                  <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic deck-owner-dropdown">
                      {currentAddDeck[index]}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      {MyData.getDecks(currentDeckOwner[index]).map(
                        (deck: string) => (
                          <Dropdown.Item
                            onClick={() => {
                              setCurrentAddDeck(
                                changeName(currentAddDeck, index, deck)
                              );
                              setCurrentAddDeck(currentAddDeck.concat([]));
                            }}
                          >
                            {deck}
                          </Dropdown.Item>
                        )
                      )}
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
              ))}
            </Row>

            <Row style={{ textAlign: "center" }}>
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic deck-owner-dropdown">
                  {selectWinner}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {currentAddName.map(
                    (name: string, index: number) =>
                      index < currentNumPlayers.length && (
                        <Dropdown.Item
                          onClick={() => {
                            setSelectWinner(name);
                          }}
                        >
                          {name}
                        </Dropdown.Item>
                      )
                  )}
                </Dropdown.Menu>
              </Dropdown>
            </Row>

            <div style={{ padding: "0.15rem" }} />

            <Row style={{ textAlign: "center" }}>
              <Form.Control
                type="date"
                style={{ width: "20%", marginLeft: "40%" }}
                id={"calendar"}
                onInput={() => {
                  var myDate = document.getElementById("calendar");
                  console.log((myDate as HTMLInputElement).value);
                }}
              />
            </Row>

            <div style={{ padding: "0.15rem" }} />

            <Row>
              <Col style={{ textAlign: "center" }}>
                <Button
                  variant="success"
                  onClick={() => {
                    console.log(
                      (document.getElementById("calendar") as HTMLInputElement)
                        .value
                    );
                    // MyData.saveNewGame(
                    //   currentAddFormat,
                    //   currentAddName,
                    //   currentAddDeck,
                    //   selectWinner,
                    //   (document.getElementById("calendar") as HTMLInputElement)
                    //     .value,
                    //   currentDeckOwner
                    // );
                    setCurrentAddName([
                      "Select an player",
                      "Select an player",
                      "Select an player",
                      "Select an player",
                      "Select an player",
                      "Select an player",
                    ]);
                    setCurrentDeckOwner([
                      "Select an owner for the deck",
                      "Select an owner for the deck",
                      "Select an owner for the deck",
                      "Select an owner for the deck",
                      "Select an owner for the deck",
                      "Select an owner for the deck",
                    ]);
                    setCurrentAddDeck([
                      "Select a deck",
                      "Select a deck",
                      "Select a deck",
                      "Select a deck",
                      "Select a deck",
                      "Select a deck",
                    ]);
                    setCurrentAddFormat(["Select a format"]);
                    setNumPlayers([[], [], [], []]);
                    setSelectWinner("Select a winner");
                  }}
                >
                  Enter Game
                </Button>
              </Col>
            </Row>
          </Container>
        )}
        {currentChoice == Choice.addDeck && (
          <Container style={{ padding: "0.3rem", alignItems: "center" }}>
            <Form
              id="addDeckForm"
              onSubmit={(e) => {
                e.preventDefault();
                MyData.newDeck(
                  addDeckOwner,
                  addDeckName,
                  addDeckFormat,
                  addDeckID,
                  addDeckColor
                );
                setAddDeckName("");
                setAddDeckOwner("");
                setAddDeckFormat("");
                setAddDeckID("");
                setAddDeckColor("");
              }}
            >
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="deck_owner">
                    <Form.Label>Deck Owner</Form.Label>
                    <Form.Control
                      placeholder="Name of owner"
                      onChange={(e) => setAddDeckOwner(e.target.value)}
                    />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group className="mb-3" controlId="deck_name">
                    <Form.Label>Deck Name</Form.Label>
                    <Form.Control
                      placeholder="Name of deck"
                      onChange={(e) => setAddDeckName(e.target.value)}
                    />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group className="mb-3" controlId="deck_format">
                    <Form.Label>Format</Form.Label>
                    <Form.Control
                      placeholder="EDH, Draft, Planeschase, etc."
                      onChange={(e) => setAddDeckFormat(e.target.value)}
                    />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group className="mb-3" controlId="deck_id">
                    <Form.Label>Deck ID</Form.Label>
                    <Form.Control
                      placeholder="<owner name><commander name>"
                      onChange={(e) => setAddDeckID(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Form.Group className="mb-3" controlId="deck_color">
                  <Form.Label>Color (Optional)</Form.Label>
                  <Form.Control
                    placeholder="linear-gradient(90deg, rgba(..., ..., ..., 0.9), rgba(..., ..., ..., 0.9), etc)"
                    onChange={(e) => setAddDeckColor(e.target.value)}
                  />
                </Form.Group>
              </Row>
              <Row>
                <div style={{ textAlign: "center" }}>
                  <Button type="submit">Submit</Button>
                </div>
              </Row>
            </Form>
          </Container>
        )}
      </div>
    </PageWithNavBar>
  );
}

// Useful for forms
// https://getbootstrap.com/docs/5.3/forms/validation/?

export default MagicStats;
