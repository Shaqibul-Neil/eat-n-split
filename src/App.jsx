import "./App.css";
import Friends from "./components/Friends";
import FormAddFriend from "./components/FormAddFriend";
import { useState } from "react";
import Button from "./components/Button";
import FormSplitBill from "./components/FormSplitBill";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [showForm, setShowForm] = useState(false);
  const [friendData, setFriendData] = useState(initialFriends);

  const handleClick = () => {
    setShowForm(!showForm);
  };

  const handleAddFriend = (newData) => setFriendData([...friendData, newData]);

  return (
    <div className="app">
      <div className="sidebar">
        <Friends friendData={friendData} />
        {showForm && <FormAddFriend handleAddFriend={handleAddFriend} />}
        <Button handleClick={handleClick}>
          {showForm ? "Close" : "Add Friend"}
        </Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

export default App;
