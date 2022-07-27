import { NextPage, GetServerSideProps } from 'next';
import { PostCard } from '../../components/containers/Card/PostCard';
import { Spinner } from '../../components/containers/Spinner';
import type { PaginationProps } from 'antd';
import { useState } from 'react';
import { Empty, Select, Pagination } from 'antd';
import { SearchInput } from '../../components/containers/SearchInput';
import usePosts from '../../hooks/usePosts';

const PAGE_SIZE = 10;
const { Option } = Select;

const PostPage: NextPage = (data) => {
  // TODO: 임시
  const tagAry = ['JAVA', 'JAVASCRIPT', 'NODE', 'TIL', 'REACT', 'SPA', 'MYSQL'];
  const [page, setPage] = useState<number>(0);
  const [searchText, setSearchText] = useState<string>('');
  const [searchTags, setSearchTags] = useState<string[]>(['']);

  const { posts, totalCount, loading, error } = usePosts(
    page,
    PAGE_SIZE,
    searchText,
    searchTags,
  );

  const initPage = () => {
    if (page !== 0) setPage(0);
  };

  const handleOnSearch = (value: string) => {
    initPage();
    setSearchText(value);
  };
  const handleTagChange = (value: string[]) => {
    initPage();
    setSearchTags(value);
  };
  const onChange: PaginationProps['onChange'] = (page) => {
    setPage(page);
  };

  return (
    <>
      <div style={{ marginBottom: 30 }}>
        <SearchInput onSearch={handleOnSearch} loading={loading} />
        <Select
          mode="multiple"
          allowClear
          style={{ width: '70%', textAlign: 'left' }}
          placeholder="Search With Tags"
          onChange={handleTagChange}
        >
          {/* TODO: 임시 */}
          {tagAry.map((e) => (
            <Option key={e}>{e}</Option>
          ))}
        </Select>
      </div>

      {loading && <Spinner />}
      {totalCount === 0 && <Empty />}
      {!error &&
        posts &&
        posts.map((post: any, index: number) => {
          return <PostCard post={post} key={index} />;
        })}
      {<Pagination current={page + 1} onChange={onChange} total={totalCount} />}
    </>
  );
};
export default PostPage;
