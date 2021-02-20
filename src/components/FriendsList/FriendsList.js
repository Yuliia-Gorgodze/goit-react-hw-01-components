import react from 'react';
import propTypes from 'prop-types';
import styles from './friendsList.module.css';
import FriendsCard from './FriendsCard'

const FriendList = ({friends}) => {
    return (
        <ul class={styles.friend_list}>
         <FriendsCard friends={friends}/>
      </ul>  
    )
}
FriendList.propTypes = {
    friends: propTypes.array,
    
}
export default FriendList;