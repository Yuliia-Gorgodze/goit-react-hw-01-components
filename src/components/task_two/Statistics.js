import react from 'react';
import propTypes from 'prop-types';
import styles from './statistics.module.css'
const statistics = ({props, title}) => {
    return ( 
    <section class={styles.statistics}>
    {title && <h2 class="title">Upload stats</h2>}
  
    <ul class={styles.stat_list}>
        {props.map((statistic)=> <li key={statistic.id} class="item">
        <span class={styles.label}>{statistic.label}</span>
        <span class="percentage">{statistic.percentage}</span>
      </li>)}  
    </ul>
  </section>)
}
statistics.defaultProps = {
title: ''
}
statistics.propTypes = {
    title: propTypes.string,
    
}
export default statistics;