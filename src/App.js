import React from 'react';
import { Root, Routes, addPrefetchExcludes } from 'react-static';
import { Link, Router } from 'components/Router';
import { Layout } from 'antd';
import { MainMenu } from 'components/MainMenu';

import 'antd/dist/antd.css';
import './app.css'

const { Header, Footer, Content } = Layout;

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic']);

function App() {
  return (
    <Root>
      <Layout>
        <Header>
          <div className="logo"><img src="./img/NetScourSecLogo.png" /> NetScour Security</div>
          <MainMenu />
        </Header>
        <Content>
          <div className="content">
            <React.Suspense fallback={<em>Loading...</em>}>
              <Router>
                <Routes path="*" />
              </Router>
            </React.Suspense>
          </div>
        </Content>
        <Footer>
          
        </Footer>
      </Layout>
    </Root>
  )
}

export default App
