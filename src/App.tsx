import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import PageWithNavBar from "./components/PageWithNavBar";

function App() {
  let items = [
    "Deck Win Percentage",
    "Player Win Percentage",
    "All Decks",
    "All Players",
    "Player Stats",
    "Full Player Stats",
    "Most Played Decks",
    "Proportionally Most Played Decks",
    "Prune Menu",
    "Add Menu",
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <PageWithNavBar>
        <ListGroup
          items={items}
          heading="Magic Stats"
          onSelectItem={handleSelectItem}
        />
      </PageWithNavBar>
    </div>
  );
}

export default App;
