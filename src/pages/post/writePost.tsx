import { NextPage, GetServerSideProps } from 'next';
import { MDEditorProps } from '@uiw/react-md-editor';
import dynamic from 'next/dynamic';
import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';
import { Select } from 'antd';
import { useState, useCallback } from 'react';

const MDEditor = dynamic<MDEditorProps>(() => import('@uiw/react-md-editor'), {
  ssr: false,
});
const { Option } = Select;

const WritePostPage: NextPage = (data) => {
  const tagAry = ['JAVA', 'JAVASCRIPT', 'NODE', 'TIL', 'REACT', 'SPA', 'MYSQL'];
  const [markdown, setMarkdown] = useState<string>('');
  const [tags, setTags] = useState<string[]>(tagAry);
  const [addTags, setAddTags] = useState<string[]>([]);

  const handleMarkdownChange = useCallback((markdownStr: any) => {
    setMarkdown(markdownStr);
  }, []);

  const handleTagChange = (tagValue: string[]) => {
    setAddTags(tagValue);
  };
  console.log(addTags);
  return (
    <>
      <Select
        mode="tags"
        allowClear
        style={{ width: '71%', textAlign: 'left' }}
        placeholder="add Tags"
        onChange={handleTagChange}
      >
        {tags.map((e) => (
          <Option key={e}>{e}</Option>
        ))}
      </Select>
      ;
      <MDEditor value={markdown} onChange={handleMarkdownChange} height={600} />
    </>
  );
};
export default WritePostPage;

// TODO: call api
// export const getServerSideProps: GetServerSideProps = async (context: any) => {
//   return {
//     props: { tagAry: tagAry },
//   };
// };
