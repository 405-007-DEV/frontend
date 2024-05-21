import styles from './card.module.css'

export default function Card(props : {children : React.ReactElement}) {
  return (
    <div className={styles.card}>
      {props.children}
    </div>
  );
}

