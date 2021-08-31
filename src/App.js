import "./App.css";
import { UserProvider } from "./context/UserContext";
import Routes from "./routes";

function App() {
  return (
    <div className="app">
      <UserProvider>
        <Routes />
      </UserProvider>
    </div>
  );
}

export default App;
