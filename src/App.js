import "./App.css";
import { UserState } from "./context/user/UserState";
import Routes from "./routes";

function App() {
  return (
    <div className="app">
      <UserState>
        <Routes />
      </UserState>
    </div>
  );
}

export default App;
