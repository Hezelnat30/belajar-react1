import "./index.css";
import Homepage from "./pages/index";
import { GlobalContext } from "./context";

function App() {
  const user = {
    username: "Justin",
  };
  return (
    <div className="App">
      <GlobalContext.Provider value={user}>
        <Homepage />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
