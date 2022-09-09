import React, { useState } from 'react';
import { useLocation } from "@reach/router";
import { Link } from 'components/Router';
import { Menu } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/pro-duotone-svg-icons';

export function MainMenu() {
    const location = useLocation();
    const [current, setCurrent] = useState(location.pathname); // TODO: Works as long as there are no complex paths
    const onClick = e => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return (
      <>
          <div className="logo">
            <Link to="/">
              <img src="./img/NetScourSecLogo.png" />&nbsp;<span className="company-name">NetScour Security</span>
            </Link>
          </div>
          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            overflowedIndicator={<FontAwesomeIcon icon={faBars} />}>
            <Menu.Item key="/">
              <Link to="/">Product</Link>
            </Menu.Item>
            <Menu.Item key="/company">
              <Link to="/company">Company</Link>
            </Menu.Item>
            <Menu.Item key="/preregister">
              <Link to="/preregister">Preregister</Link>
            </Menu.Item>
            <Menu.Item key="github" className="social">
              <a href="#" target="_blank"><FontAwesomeIcon icon={faGithub} /><span className="social-name">Github</span></a>
            </Menu.Item>
            <Menu.Item key="twitter" className="social">
              <a href="#" target="_blank"><FontAwesomeIcon icon={faTwitter} /><span className="social-name">Twitter</span></a>
            </Menu.Item>
            <Menu.Item key="linkedin" className="social">
              <a href="#" target="_blank"><FontAwesomeIcon icon={faLinkedin} /><span className="social-name">Linkedin</span></a>
            </Menu.Item>
          </Menu>
      </>
    );
}
