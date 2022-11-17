import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/home';
import ComapnyPage from './pages/company';
import PreregisterPage from './pages/preregister';

import { Layout } from 'antd';
import { MainMenu } from './components/MainMenu';
import { MainFooter } from './components/MainFooter';

import 'antd/dist/antd.min.css';
import './App.css';

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <React.Suspense fallback={<></>}>
      <BrowserRouter>
        <Layout>
          <Header>
            <MainMenu />
          </Header>
          <Content>
            <Routes>
              <Route index element={<HomePage />} />
              <Route path="company" element={<ComapnyPage />} />
              <Route path="preregister" element={<PreregisterPage />} />
            </Routes>
          </Content>
          <Footer>
            <MainFooter />
          </Footer>
        </Layout>
      </BrowserRouter>
    </React.Suspense>
  );
}

export default App;
