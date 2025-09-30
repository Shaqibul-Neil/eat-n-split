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
  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleClick = () => {
    setShowForm(!showForm);
    setSelectedFriend(null);
  };

  const handleAddFriend = (newData) => {
    setFriendData([...friendData, newData]);
    setShowForm(false);
  };

  const handleSelected = (friend) => {
    setSelectedFriend((curr) => (curr?.id === friend.id ? null : friend));
    setShowForm(false);
  };

  const handleSplitBill = (value) => {
    setFriendData((friendData) =>
      friendData.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <Friends
          friendData={friendData}
          onSelection={handleSelected}
          selectedFriend={selectedFriend}
        />

        {showForm && <FormAddFriend handleAddFriend={handleAddFriend} />}

        <Button onClick={handleClick}>
          {showForm ? "Close" : "Add Friend"}
        </Button>
      </div>

      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          handleSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}

export default App;
