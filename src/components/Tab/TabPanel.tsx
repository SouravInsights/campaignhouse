import React from 'react';
import { useTab } from './TabContext';

interface TabPanelProps {
  children: React.ReactNode;
}

const TabPanel: React.FC<TabPanelProps> = ({ children }) => {
  const { activeTab } = useTab();

  return <div>{Array.isArray(children) ? children[activeTab] : children}</div>;
};

export default TabPanel;