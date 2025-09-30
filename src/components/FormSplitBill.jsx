import { useState } from "react";
import Button from "./Button";

const FormSplitBill = ({ selectedFriend, handleSplitBill }) => {
  const [bill, setBill] = useState("");
  const [myExpense, setMyExpense] = useState("");
  const friendExpense = bill ? bill - myExpense : bill;
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  const handleSplitBillSubmit = (e) => {
    e.preventDefault();
    if (!bill || !myExpense) return;
    handleSplitBill(whoIsPaying === "user" ? friendExpense : -myExpense);
  };
  return (
    <form className="form-split-bill" onSubmit={handleSplitBillSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label>💰 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(+e.target.value)}
      />
      <label>🧍‍♀️Your expense</label>
      <input
        type="text"
        value={myExpense}
        onChange={(e) =>
          setMyExpense(+e.target.value > bill ? myExpense : +e.target.value)
        }
      />
      <label>🧍‍♀️{selectedFriend.name}'s Expense</label>
      <input type="text" disabled value={friendExpense} />
      <label>🤑 Who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
};

export default FormSplitBill;
