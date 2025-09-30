import Button from "./Button";

const Friend = ({ friend, onSelection, selectedFriend }) => {
  const isSelected = selectedFriend?.id === friend.id;

  const conditionalText = () => {
    if (friend.balance > 0) return `${friend.name} owes you ${friend.balance}$`;
    if (friend.balance < 0)
      return `You owe ${friend.name} ${Math.abs(friend.balance)}$`;
    return `You and ${friend.name} are even`;
  };

  const conditionalClass = () => {
    if (friend.balance > 0) return "green";
    if (friend.balance < 0) return "red";
    return "";
  };

  return (
    <>
      <li className={isSelected ? "selected" : ""}>
        <img src={friend.image} alt={friend.name} />
        <h3>{friend.name}</h3>
        <p className={conditionalClass()}>{conditionalText()}</p>
        <Button onClick={() => onSelection(friend)}>
          {isSelected ? "Close" : "Select"}
        </Button>
      </li>
    </>
  );
};

export default Friend;
