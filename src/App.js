import React from 'react';
import { Root, Routes, addPrefetchExcludes } from 'react-static';
import { Router } from 'components/Router';
import Plausible from 'plausible-tracker'
import { Layout } from 'antd';
import { MainMenu } from 'components/MainMenu';

import 'antd/dist/antd.css';
import './app.css'
import { MainFooter } from './components/MainFooter';
import Favicon from 'react-favicon';

const { Header, Footer, Content } = Layout;

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic']);

function App() {
  const plausible = Plausible({ domain: 'netscoursec.com' });
  plausible.enableAutoPageviews();
  plausible.enableAutoOutboundTracking();
  
  return (
    <Root>
      <Favicon url='/img/favicons/NetScour-Security-32px-favicon.png' iconSize={32} />
      <Favicon url='/img/favicons/NetScour-Security-128px-favicon.png' iconSize={128} />
      <Favicon url='/img/favicons/NetScour-Security-180px-favicon.png' iconSize={180} />
      <Favicon url='/img/favicons/NetScour-Security-192px-favicon.png' iconSize={192} />
      <Layout>
        <Header>
          <MainMenu />
        </Header>
        <Content>
          <React.Suspense fallback={<></>}>
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
