import React from 'react';
import { Layout } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined} from '@ant-design/icons';

export const Header = ({ collapsed, toggleCollapse }) => {
    return (
        <Layout.Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => toggleCollapse(!collapsed),
          })}
        </Layout.Header>
    )
}