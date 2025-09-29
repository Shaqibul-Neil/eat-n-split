import Friend from "./Friend";

const Friends = ({ friendData }) => {
  return (
    <>
      <ul>
        {friendData.map((friend) => (
          <Friend key={friend.id} friend={friend} />
        ))}
      </ul>
    </>
  );
};

export default Friends;
