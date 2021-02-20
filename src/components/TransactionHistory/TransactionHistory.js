import react from 'react';
import propTypes from 'prop-types';
import styles from './transaction.module.css';
import Transaction from './Transaction'
const TransactionHistory = ({transaction})=> {
  
    return (
        <table class={styles.transaction_history}>
  <thead class={styles.table_head}>
    <tr>
      <th class={styles.type_head}>Type</th>
      <th class={styles.amount_head}>Amount</th>
      <th class={styles.currency_head}>Currency</th>
    </tr>
  </thead>
  <tbody>
      <Transaction transaction={transaction}/>
  </tbody>
</table>
    )
}
TransactionHistory.prototype = {
  transaction: propTypes.object
}
export default TransactionHistory;