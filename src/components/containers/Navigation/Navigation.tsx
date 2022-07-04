import { IProps } from './types';
import { Menu } from 'antd';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const Navigation: React.FC<IProps> = ({}) => {
  const router = useRouter();
  const currentPath = router.pathname.substr(1);

  const menuItems = [
    {
      key: 'post',
      label: <Link href="/post?page=1&size=10">Blog</Link>,
    },
    {
      key: 'about',
      label: <Link href="/about">About Us</Link>,
    },
    {
      key: 'dev',
      label: <Link href="/dev">Dev News</Link>,
    },
  ];

  return (
    <Menu
      defaultOpenKeys={[currentPath]}
      selectedKeys={[currentPath]}
      mode="vertical"
      theme="dark"
      items={menuItems}
    />
  );
};
