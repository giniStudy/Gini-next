import Link from 'next/link';
import { title } from 'process';
import styles from '../styles/Card.module.css';
import DateUtils from '../utils/DateUtils';

export interface PostData {
  id: number;
  title: string;
  content: string;
  writer: string;
  tags: Array<String>;
  create: Date;
}
/**
 * const Card:React.FC = () => {
 * }
 * export default Card;
 */

const Card: React.FC<PostData> = ({
  id = 1,
  title = 'test',
  content = 'test',
  writer = 'donghyun',
  tags = ['javasscript', 'typescript'],
  create = new Date(),
}) => {
  return (
    <li className={styles.card}>
      <h2>{title}</h2>
      <p>{content}</p>
      <div className={styles.tags}>
        {tags.map((tag, index) => (
          <Link href="" key={index}>
            {tag}
          </Link>
        ))}
      </div>

      <div className={styles.tags}>
        <div>{writer}</div>
        <div>{DateUtils.dateToString(create)}</div>
      </div>
    </li>
  );
};
export default Card;
