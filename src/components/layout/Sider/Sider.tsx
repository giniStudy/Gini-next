import styled from 'styled-components';
import { Layout } from 'antd';
import React from 'react';
import { IProps } from './types';
import { Navigation } from '../../containers/Navigation';
import Link from 'next/link';
import { useRouter } from 'next/router';
const { Sider: AntSider } = Layout;

export const Sider: React.FC<IProps> = ({}) => {
  const router = useRouter();
  return (
    <AntSider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        background: '#C8C7C3',
      }}
    >
      <Icon
        onClick={() => {
          router.push('/');
        }}
      ></Icon>
      <Navigation />
    </AntSider>
  );
};

const Icon = styled.div`
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.2);
`;
