import "./App.css";
import Card from "./comps/Card";
import CardContainer from "./comps/CardContainer";
import { data } from "./data";

function App() {
  return (
    <div className="App">
      <CardContainer>
        {data.map((item, index) => (
          <Card
            key={item.id}
            name={item.name}
            restaurant={item.restaurant}
            address={item.address}
            index={index}
          />
        ))}
      </CardContainer>
    </div>
  );
}

export default App;
