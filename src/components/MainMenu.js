import React, { useState } from 'react'
import { Link } from 'components/Router'
import { Menu } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/pro-duotone-svg-icons';

export function MainMenu() {
    const [current, setCurrent] = useState('product');
    const onClick = e => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return (
      <>
          <div className="logo"><img src="./img/NetScourSecLogo.png" />&nbsp;<span className="company-name">NetScour Security</span></div>
          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            overflowedIndicator={<FontAwesomeIcon icon={faBars} />}>
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
              <a href="#" target="_blank"><FontAwesomeIcon icon={faGithub} /><span class="social-name">Github</span></a>
            </Menu.Item>
            <Menu.Item key="twitter" className="social">
              <a href="#" target="_blank"><FontAwesomeIcon icon={faTwitter} /><span class="social-name">Twitter</span></a>
            </Menu.Item>
            <Menu.Item key="linkedin" className="social">
              <a href="#" target="_blank"><FontAwesomeIcon icon={faLinkedin} /><span class="social-name">Linkedin</span></a>
            </Menu.Item>
          </Menu>
      </>
    );
}
