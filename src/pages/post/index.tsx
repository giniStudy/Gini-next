import { NextPage, GetServerSideProps } from 'next';
import { PostCard } from '../../components/containers/Card/PostCard';
import { Spinner } from '../../components/containers/Spinner';
import type { PaginationProps } from 'antd';
import { useState } from 'react';
import { Empty, Select, Pagination } from 'antd';
import { SearchInput } from '../../components/containers/SearchInput';
import usePosts from '../../hooks/usePosts';
import useTags from '../../hooks/useTags';

const PAGE_SIZE = 10;
const { Option } = Select;

const PostPage: NextPage = (data) => {
  const [page, setPage] = useState<number>(0);
  const [searchText, setSearchText] = useState<string>('');
  const [searchTags, setSearchTags] = useState<string[]>([]);

  const { loading: tagLoading, error: tagError, tags } = useTags();
  const {
    posts,
    totalCount,
    loading: postLoading,
    error: postError,
  } = usePosts(page, PAGE_SIZE, searchText, searchTags);

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
        <SearchInput onSearch={handleOnSearch} loading={postLoading} />
        {!tagError && (
          <Select
            mode="multiple"
            allowClear
            style={{ width: '70%', textAlign: 'left' }}
            placeholder="Search With Tags"
            onChange={handleTagChange}
            loading={tagLoading}
          >
            {tags.map((e) => (
              <Option key={e}>{e}</Option>
            ))}
          </Select>
        )}
      </div>

      {postLoading && <Spinner />}
      {totalCount === 0 && <Empty />}
      {!postError &&
        posts &&
        posts.map((post: any, index: number) => {
          return <PostCard post={post} key={index} />;
        })}
      {<Pagination current={page + 1} onChange={onChange} total={totalCount} />}
    </>
  );
};
export default PostPage;
