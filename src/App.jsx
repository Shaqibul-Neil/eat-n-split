import "./App.css";
import Friends from "./components/Friends";
import FormAddFriend from "./components/FormAddFriend";
import { useState } from "react";
import Button from "./components/Button";
import FormSplitBill from "./components/FormSplitBill";

function App() {
  const [showForm, setShowForm] = useState(false);
  const handleClick = () => {
    setShowForm(!showForm);
  };
  return (
    <div className="app">
      <div className="sidebar">
        <Friends />
        <FormAddFriend />
        <Button onClick={handleClick}>
          {showForm ? "Close" : "Add Friend"}
        </Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

export default App;
