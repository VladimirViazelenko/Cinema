import { Layout } from 'antd';

export const MainContainer =  () => {
    return (
        <Layout.Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          Container
        </Layout.Content>
    );
}
