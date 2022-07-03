import styled from 'styled-components';
import {
  BarChartOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import React from 'react';
import { IProps } from './types';

const { Sider: AntSider } = Layout;

export const Sider: React.FC<IProps> = ({}) => {
  const items: MenuProps['items'] = [
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    BarChartOutlined,
  ].map((icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `nav ${index + 1}`,
  }));

  return (
    <AntSider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <Icon></Icon>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={items}
      />
    </AntSider>
  );
};

const Icon = styled.div`
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.2);
`;
