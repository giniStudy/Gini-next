import { IProps } from './types';
import { Card as AntdCard, Divider, Tag } from 'antd';

export const Card: React.FC<IProps> = ({ card }) => {
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
      title={card}
      bordered={true}
      hoverable={true}
      style={{
        width: '70%',
        margin: 'auto',
        marginBottom: 30,
        textAlign: 'left',
      }}
      loading={!card}
    >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
      {tagAry && (
        <>
          <Divider orientation="left">HashTag</Divider>
          <div>
            {tagAry.sort().map((s, index) => {
              return (
                <Tag
                  color={
                    colorAry[index]
                      ? colorAry[index]
                      : colorAry[index - colorAry.length]
                  }
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
