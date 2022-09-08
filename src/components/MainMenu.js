import React, { useState } from 'react'
import { Link } from 'components/Router'
import { Col, Menu, Row } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

export function MainMenu() {
    const [current, setCurrent] = useState('product');
    const onClick = e => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return (
      <>
          <div className="logo"><img src="./img/NetScourSecLogo.png" /> NetScour Security</div>
          <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" style={{marginLeft: "auto"}}>
            <Menu.Item key="product">
              <Link to="/">Product</Link>
            </Menu.Item>
            <Menu.Item key="company">
              <Link to="/company">Company</Link>
            </Menu.Item>
            <Menu.Item key="preregister">
              <Link to="/preregister">Preregister</Link>
            </Menu.Item>
            <Menu.Item key="github" className="social">
              <a href="#" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
            </Menu.Item>
            <Menu.Item key="twitter" className="social">
              <a href="#" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
            </Menu.Item>
            <Menu.Item key="linkedin" className="social">
              <a href="#" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
            </Menu.Item>
          </Menu>
      </>
    );
}



{/* <div className="main-menu">
      <Link to="/">Product</Link>
      <Link to="/company">Company</Link>
      <Link to="/inquiry">Inquiry</Link>
    </div> */}
