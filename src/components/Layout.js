import React from 'react';
import { Layout as AntLayout } from 'antd';
import { MainMenu } from './MainMenu';
import { MainFooter } from './MainFooter';

const { Header, Footer, Content } = AntLayout;

export default function Layout(props) {
    debugger;
    return (
        <AntLayout>
            <Header>
                <MainMenu />
            </Header>
            <Content>
                {props.children}
            </Content>
            <Footer>
                <MainFooter />
            </Footer>
        </AntLayout>
    );
}
