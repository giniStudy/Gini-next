import React from 'react';
import Tab from '../components/Tab';

interface LayoutProps {
  children: React.ReactNode;
}

export default function TabLayout({ children }: LayoutProps) {
  return (
    <div>
      <div>
        <Tab />
      </div>
      {children}
    </div>
  );
}
