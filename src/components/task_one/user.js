import react from 'react';
import propTypes from 'prop-types';
import styles from './user.module.css'
const User = ({name, tag, location, avatar, stats}) =>{
    return (
        <div class={styles.profile}>
  <div class={styles.description}>
    <img
      src={avatar}
      alt="Аватар пользователя"
      class={styles.avatar}
    />
    <p class="name">{name}</p>
    <p class="tag">@{tag}</p>
    <p class="location">{location}</p>
  </div>
  <ul class={styles.stats}>
    <li>
      <span class={styles.label}>Followers</span>
    <span class="quantity">{stats.followers}</span>
    </li>
    <li>
      <span class={styles.label}>Views</span>
    <span class="quantity">"{stats.views}</span>
    </li>
    <li>
      <span class={styles.label}>Likes</span>
    <span class="quantity">{stats.likes}</span>
    </li>
  </ul>
</div>
    );
}
User.propTypes = {
  name : propTypes.string.isRequired,
  tag: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
  avatar: propTypes.string.isRequired,
}
export default User;