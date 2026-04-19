import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      <ListGroup
        heading="Pokemon"
        items={["Pikachu", "Charizard", "Blastoise", "Venusaur"]}
        onSelectItem={handleSelectItem}
      />

      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>Test</Alert>
      )}
      <Button color="danger" onClick={() => setAlertVisibility(true)}>
        Button Button
      </Button>
    </div>
  );
}

export default App;
