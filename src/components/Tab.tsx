import styles from '../styles/Tab.module.css';

export default function Tab() {
  return (
    <div className={styles.tab}>
      <div>태그 목록</div>
      <ol>
        <li>Docker</li>
        <li>Java</li>
        <li>Javasscript</li>
        <li>Typescript</li>
      </ol>
    </div>
  );
}
