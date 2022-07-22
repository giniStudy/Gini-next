import { Layout } from 'antd';
import { Navigation } from '../../containers/Navigation';

const { Header: AntHeader } = Layout;

export const Header: React.FC<{}> = ({}) => {
  return (
    <AntHeader style={{ background: '#C8C7C3' }}>
      <Navigation />;
    </AntHeader>
  );
};
