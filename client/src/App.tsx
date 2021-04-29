import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/Routes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import UserContext from "./context/userContext";
import auth from "./services/authService";

import "./App.css";

function App() {
  return (
    <Router>
      <UserContext.Provider
        value={{
          currentUser: auth.getCurrentUser,
          handleLogin: auth.login,
        }}
      >
        <div className="App">
          <Navbar />
          <Routes />
          <Footer />
        </div>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
