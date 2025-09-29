const List = ({ friend }) => {
  console.log(friend);
  const conditionalText = () => {
    if (friend.balance > 0) return `${friend.name} owes you ${friend.balance}$`;
    if (friend.balance < 0) return `You owe ${friend.name} ${friend.balance}$`;
    return `You and ${friend.name} are even`;
  };
  const conditionalClass = () => (friend.balance > 0 ? "green" : "red");
  return (
    <ul>
      <li>
        <img src={friend.image} alt={friend.name} />
        <h3>{friend.name}</h3>
        <p className={conditionalClass()}>{conditionalText()}</p>
        <button className="button">Select</button>
      </li>
    </ul>
  );
};

export default List;
