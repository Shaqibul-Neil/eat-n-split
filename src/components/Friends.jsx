import Friend from "./Friend";

const Friends = ({ friendData, onSelection, selectedFriend }) => {
  return (
    <>
      <ul>
        {friendData.map((friend) => (
          <Friend
            key={friend.id}
            friend={friend}
            onSelection={onSelection}
            selectedFriend={selectedFriend}
          />
        ))}
      </ul>
    </>
  );
};

export default Friends;
