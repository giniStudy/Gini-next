import { NextPage } from 'next';
import { MDEditorProps } from '@uiw/react-md-editor';
import dynamic from 'next/dynamic';
import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';
import { Select, Input, Button } from 'antd';
import { useState, useCallback } from 'react';
import { SubmitButton } from '../../components/containers/Button/SubmitButton';
import axios from 'axios';

const MDEditor = dynamic<MDEditorProps>(() => import('@uiw/react-md-editor'), {
  ssr: false,
});
const { Option } = Select;

const WritePostPage: NextPage = (data) => {
  const tagAry = ['JAVA', 'JAVASCRIPT', 'NODE', 'TIL', 'REACT', 'SPA', 'MYSQL'];
  const [markdown, setMarkdown] = useState<string>('');
  const [serverTagList, setServerTagList] = useState<string[]>(tagAry);
  const [title, setTitle] = useState<string>('');
  const [addTags, setAddTags] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async () => {
    setLoading(true);
    const param = {
      userSeq: 0,
      title: title,
      content: markdown,
      tag: addTags.filter((e, idx) => {
        return addTags.indexOf(e) === idx;
      }),
    };
    const result = await axios({
      method: 'post',
      data: param,
      url: '/post',
    });

    setLoading(false);
  };

  const handleMarkdownChange = useCallback((markdownStr: any) => {
    setMarkdown(markdownStr);
  }, []);

  const handleTagChange = (tagValue: string[]) => {
    setAddTags(tagValue.map((e) => e.toUpperCase()));
  };

  return (
    <>
      <Input
        size="large"
        placeholder="제목"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        style={{ marginBottom: 20 }}
      />
      <Select
        mode="tags"
        allowClear
        style={{
          width: '100%',
          textAlign: 'left',
          marginBottom: 50,
        }}
        size="large"
        placeholder="add Tags"
        onChange={handleTagChange}
      >
        {serverTagList.map((e) => (
          <Option key={e}>{e}</Option>
        ))}
      </Select>
      <MDEditor value={markdown} onChange={handleMarkdownChange} height={800} />
      <SubmitButton
        buttonText={'글쓰기'}
        loading={false}
        handleOnClick={handleSubmit}
      />
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
