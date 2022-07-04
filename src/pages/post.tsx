import { NextPage } from 'next';
import { Card } from '../components/containers/Card';

const Post: NextPage = ({}) => {
  const tempCard = [
    'title1',
    'title2',
    'title3',
    'title4',
    'title5',
    'title6',
    'title7',
    'title8',
    'title9',
    'title10',
    'title11',
  ];

  return (
    <>
      {tempCard.map((card, index) => {
        return <Card card={card} key={index} />;
      })}
    </>
  );
};

export default Post;
