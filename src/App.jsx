import "./index.css";
import { GlobalContext } from "./context";
import { RouterComponent } from "./routers";

function App() {
  const user = {
    username: "Justin",
  };
  return (
    <div className="App">
      <GlobalContext.Provider value={user}>
        <RouterComponent />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
