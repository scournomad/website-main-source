import React from 'react';
import { Root, Routes, addPrefetchExcludes } from 'react-static';
import { Router } from 'components/Router';
import { Layout } from 'antd';
import { MainMenu } from 'components/MainMenu';

import 'antd/dist/antd.css';
import './app.css'
import { MainFooter } from './components/MainFooter';

const { Header, Footer, Content } = Layout;

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic']);

function App() {
  return (
    <Root>
      <Layout>
        <Header>
          <MainMenu />
        </Header>
        <Content>
          <React.Suspense fallback={<em>Loading...</em>}>
            <Router>
              <Routes path="*" />
            </Router>
          </React.Suspense>
        </Content>
        <Footer>
          <MainFooter />
        </Footer>
      </Layout>
    </Root>
  )
}

export default App
