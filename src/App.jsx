import { RouterProvider } from "react-router-dom";
import { GlobalContext } from "./context";
import "./index.css";
import { router } from "./routers/index";

function App() {
  const user = {
    username: "Justin",
  };
  return (
    <div className="App">
      <GlobalContext.Provider value={user}>
        <RouterProvider router={router} />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
