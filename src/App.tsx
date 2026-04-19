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
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div>
        <div className="p-3">
          <ListGroup
            heading="Kanto Pokemon"
            items={["Pikachu", "Chamander", "Squirtle", "Bulbasaur"]}
            onSelectItem={handleSelectItem}
          />

          <br />

          <div className="text-end">
            <p>Do you know what all these these pokemon have in common?</p>
            <Button color="danger" onClick={() => setAlertVisibility(true)}>
              Tell Me!
            </Button>
          </div>

          {alertVisible && (
            <Alert onClose={() => setAlertVisibility(false)}>
              They're all starter pokemon that you get from Professor Oak!
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
