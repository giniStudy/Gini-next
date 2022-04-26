import Link from 'next/link';
import styles from '../styles/Top.module.css';

export default function Top() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">GINI</Link>
      </div>
      <ul className={styles.nav}>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}
