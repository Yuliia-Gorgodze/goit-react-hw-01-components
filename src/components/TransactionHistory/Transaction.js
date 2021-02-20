import react from 'react';
import propTypes from 'prop-types';
import styles from './transaction.module.css';


const Transaction = ({transaction}) => {
    return (
        transaction.map(({type, amount, currency, id}) => 
         <tr key={id}>
         <td class={styles.type}>{type}</td>
         <td class={styles.amount}>{amount}</td>
         <td class={styles.currency}>{currency}</td>
       </tr>
      )
    );
}
export default Transaction;
Transaction.prototype = {
    transaction: propTypes.object
}