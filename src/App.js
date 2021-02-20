import react from 'react';
import baseCss from './base.module.css';
//components
import User from './components/User/User';
import Statistics from './components/Statistics/Statistics'
import FriendList from './components/FriendsList/FriendsList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
//data
import user from './data/user.json';
import statisticsInf from './data/statistics-data.json';
import transaction from './data/transaction.json';
import friendsListInf from './data/friends.json';

const App = () => {
   return (
       <div>
        <h2>User</h2>
         <User name={user.name}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats} />
        <h2>Statistics</h2>
        <Statistics title="Upload stats" props={statisticsInf}/>
        <h2>Friends</h2>
        <FriendList friends={friendsListInf}/>
        <h2>Transaction History</h2>
        <TransactionHistory transaction={transaction}/>
       </div>    
  );
       
}

export default App;