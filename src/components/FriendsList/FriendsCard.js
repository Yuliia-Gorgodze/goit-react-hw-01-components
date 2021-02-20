import react from 'react';
import propTypes from 'prop-types';
import styles from './friendsList.module.css';

const FriendsCard = ({friends}) => {
    return (
        friends.map(({id, isOnline, avatar, name})=>
            <li key={id} class={isOnline?styles.is_online:styles.is_ofline}>
            <img class="avatar" src={avatar} alt="friend_photo" width="48" />
          <p class={styles.name}>{name}</p>
          </li>
          )
    )
}
FriendsCard.prototype = {
    friends: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.number.isRequired,
        })
    ).isRequired,
}
export default FriendsCard;