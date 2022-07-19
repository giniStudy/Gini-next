import { IProps } from './types';
import { Card as AntdCard, Divider, Tag, Typography } from 'antd';
import { useRouter } from 'next/router';

const { Paragraph } = Typography;

export const PostCard: React.FC<IProps> = ({ post }) => {
  const router = useRouter();
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
  const { id, title, content } = post;

  return (
    <AntdCard
      title={title}
      bordered={true}
      hoverable={true}
      style={{
        width: '70%',
        margin: 'auto',
        marginBottom: 30,
        textAlign: 'left',
      }}
      loading={!post}
      onClick={() => {
        router.push(`/post/${id}`);
      }}
    >
      <Paragraph ellipsis={{ rows: 3 }}>{content.repeat(100)}</Paragraph>

      {tagAry && (
        <>
          <Divider></Divider>
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
