import { Layout } from 'antd';

const { Footer: AntFooter } = Layout;

export const Footer: React.FC<{}> = ({}) => {
  return (
    <AntFooter style={{ textAlign: 'center' }}>
      Copyright ⓒ Gini. All rights reserved.
    </AntFooter>
  );
};
