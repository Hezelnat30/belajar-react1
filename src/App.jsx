import { GlobalContext } from "./context";
import "./index.css";
import Navbar from "./layouts/RootLayout";
import { RouterComponent } from "./routers";

function App() {
  const user = {
    username: "Justin",
  };
  return (
    <div className="App">
      <GlobalContext.Provider value={user}>
        <Navbar />
        <RouterComponent />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
