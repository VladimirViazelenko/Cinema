import React, {useState} from 'react'
import { Layout } from 'antd';
import { Sidebar } from "./sidebar"
import { Header } from "./Header"
import { MainContainer} from './MainContainer'

const App = () => {
  const [collapsed, toggleCollapse] = useState(false);

  return (
    <Layout>
      <Sidebar collapsed = {collapsed}/>
      <Layout className="site-layout">
        <Header collapsed = {collapsed} toggleCollapse={toggleCollapse}/>
        <MainContainer/>
        
      </Layout>
    </Layout>
  );
};

export default App;