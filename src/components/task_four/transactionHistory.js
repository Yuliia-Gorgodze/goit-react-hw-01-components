import react from 'react';
import propTypes from 'prop-types';
import styles from './transaction.module.css';

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
      {transaction.map((transaction)=> <tr key={transaction.id}>
      <td class={styles.type}>{transaction.type}</td>
      <td class={styles.amount}>{transaction.amount}</td>
      <td class={styles.currency}>{transaction.currency}</td>
    </tr>)}
  </tbody>
</table>
    )
}
export default TransactionHistory;