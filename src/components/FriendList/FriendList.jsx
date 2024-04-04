
import css from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <div className={css.container}>
      <ul className={css.list}>
        {friends.map(friend => (
          <li className={css.item} key={friend.id}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default FriendList;