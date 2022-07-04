import { Layout } from 'antd';

const { Content: AntContent } = Layout;

interface Content {
  children: Element | any;
}

export const Content: React.FC<Content> = ({ children }) => {
  return (
    <AntContent
      style={{
        margin: '24px 16px 0',
        overflow: 'initial',
        padding: 24,
        textAlign: 'center',
        background: '#fff',
      }}
      children={children}
    />
  );
};
