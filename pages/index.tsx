import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { title } from 'process';
import Card, { PostData } from '../src/components/Card';
import TabLayout from '../src/layouts/TabLayout';
import styles from '../src/styles/Home.module.css';

const posts: Array<PostData> = [
  {
    id: 1,
    content: 'test',
    tags: ['javascript'],
    create: new Date(),
    title: 'title',
    writer: '동현',
  },
  {
    id: 2,
    content: 'test',
    tags: ['javascript', 'typescript'],
    create: new Date(),
    title: '이게이렇게 어렵네',
    writer: '태훈',
  },
  {
    id: 3,
    content: 'test',
    tags: ['nest', 'typescript'],
    create: new Date(),
    title: '너도어려웠니?',
    writer: '성훈',
  },
];
const Home: NextPage = () => {
  return (
    <TabLayout>
      <ol>
        {posts.map((post) => (
          <Card
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.content}
            writer={post.writer}
            tags={post.tags}
            create={post.create}
          />
        ))}
      </ol>
    </TabLayout>
  );
};

export default Home;
