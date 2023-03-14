import React from 'react';
import styles from './Button.module.scss'

export default function Button(props) {
  const { name } = props;
  return (
    <div>
      <button className={styles.btn}>{name}</button>
    </div>
  )
}
