import react from 'react';
import propTypes from 'prop-types';
import styles from './friendsList.module.css';

const FriendList = ({friends}) => {
    console.log(friends)
    return (
        <ul class={styles.friend_list}>
         {friends.map((friend)=>
           <li key={friend.id} class={friend.isOnline?styles.is_online:styles.is_ofline}>
           <img class="avatar" src={friend.avatar} alt="friend_photo" width="48" />
         <p class={styles.name}>{friend.name}</p>
         </li>
         )}
      </ul>  
    )
}
FriendList.propTypes = {
    friends: propTypes.array,
    
}
export default FriendList;