import { IProps } from './types';
import { Input } from 'antd';

const { Search } = Input;

export const SearchInput: React.FC<IProps> = ({ onSearch, loading }) => {
  return (
    <Search
      placeholder="input search text"
      enterButton="Search"
      size="large"
      loading={loading}
      onSearch={onSearch}
      style={{ padding: 15, width: '71.5%' }}
    />
  );
};
