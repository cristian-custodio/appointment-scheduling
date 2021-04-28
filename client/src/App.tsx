import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/Routes";
import Home from "./pages/Home";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Home />
      </div>
    </Router>
  );
}

export default App;
