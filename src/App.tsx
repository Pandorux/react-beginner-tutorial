import ListGroup from "./components/ListGroup";

function App() {
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        heading="Pokemon"
        items={["Pikachu", "Charizard", "Blastoise", "Venusaur"]}
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
