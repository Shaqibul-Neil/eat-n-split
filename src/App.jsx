import "./App.css";
import FriendsList from "./components/FriendsList";

function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        <button className="button">Add Friend</button>
      </div>
    </div>
  );
}

export default App;
