import { IProps } from './types';
import Link from 'next/link';
import DateUtils from '../../../utils/DateUtils';

export const Card: React.FC<IProps> = ({
  id = 1,
  title = 'test',
  content = 'test',
  writer = 'donghyun',
  tags = ['javasscript', 'typescript'],
  create = new Date(),
}) => {
  return (
    <article key={id}>
      <h2>{title}</h2>
      <div>{content}</div>
      <div>
        {tags.map((tag, index) => (
          <div>
            <Link href="" key={index}>
              {tag}
            </Link>
          </div>
        ))}
      </div>

      <footer>
        <label>{writer}</label>
        <label>{DateUtils.dateToString(create)}</label>
      </footer>
    </article>
  );
};
