import { IProps } from './types';
import { Card as AntdCard, Divider, Tag } from 'antd';

export const PostCard: React.FC<IProps> = ({ post }) => {
  const tagAry = [
    'JAVA',
    'JAVASCRIPT',
    'NODE',
    'TIL',
    'REACT',
    'SPA',
    'MYSQL',
    'JAVA',
    'JAVASCRIPT',
    'NODE',
    'TIL',
    'REACT',
    'SPA',
    'MYSQL',
    'JAVA',
    'JAVASCRIPT',
    'NODE',
    'TIL',
    'REACT',
    'SPA',
    'MYSQL',
  ];
  const colorAry = [
    'magenta',
    'red',
    'volcano',
    'orange',
    'gold',
    'lime',
    'green',
    'cyan',
    'blue',
    'geekblue',
    'purple',
  ];
  return (
    <AntdCard
      title={post.title}
      bordered={true}
      hoverable={true}
      style={{
        width: '70%',
        margin: 'auto',
        marginBottom: 30,
        textAlign: 'left',
      }}
      loading={!post}
    >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
      {tagAry && (
        <>
          <Divider orientation="left">HashTag</Divider>
          <div>
            {tagAry.sort().map((s, idx) => {
              return (
                <Tag
                  color={
                    colorAry[idx]
                      ? colorAry[idx]
                      : colorAry[idx - colorAry.length]
                  }
                  key={idx}
                  style={{ marginBottom: 5 }}
                >
                  {s.toUpperCase()}
                </Tag>
              );
            })}
          </div>
        </>
      )}
    </AntdCard>
  );
};
