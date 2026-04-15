import ListGroup from "./components/ListGroup";

function App() {
  return (
    <div>
      <ListGroup
        heading="Pokemon"
        items={["Pikachu", "Charizard", "Blastoise", "Venusaur"]}
      />
    </div>
  );
}

export default App;
