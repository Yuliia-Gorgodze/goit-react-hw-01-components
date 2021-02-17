import react from 'react';
import baseCss from './base.module.css';
//task_one
import user from './components/task_one/user.json';
import User from './components/task_one/user';
//task_two
import Statistics from './components/task_two/Statistics'
import statisticsInf from './components/task_two/statistics-data.json';
//task_three
import FriendList from './components/task_three/friendsList';
import friendsListInf from './components/task_three/friends.json';
//task_four
import TransactionHistory from './components/task_four/transactionHistory';
import transaction from './components/task_four/transaction.json';
const App = () => {
   return (
       <div>
        <h2>Task One</h2>
         <User name={user.name}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats} />
        <h2>Task Two</h2>
        <Statistics title="Upload stats" props={statisticsInf}/>
        <h2>Task Three</h2>
        <FriendList friends={friendsListInf}/>
        <h2>Task Four</h2>
        <TransactionHistory transaction={transaction}/>
       </div>    
  );
       
}

export default App;