import React from 'react';
import ReactGA from "react-ga4";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/home';
import ComapnyPage from './pages/company';
//import PricingPage from './pages/pricing';
import NotFoundPage from './pages/404';

import { Layout } from 'antd';
import { MainMenu } from './components/MainMenu';
import { MainFooter } from './components/MainFooter';

import 'antd/dist/antd.min.css';
import './App.css';

ReactGA.initialize("G-V6P25FRXH7");
ReactGA.send("pageview");

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
              {/* <Route path="pricing" element={<PricingPage />} /> */}
              <Route path="*" element={<NotFoundPage />} />
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
