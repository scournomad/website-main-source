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

    if (current !== location.pathname) setCurrent(location.pathname);
    const onClick = e => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return (
      <>
          <div className="logo">
            <Link to="/">
              <img src="./img/NetScourSecLogo.png" alt="" />&nbsp;<span className="company-name">ScourNomad</span>
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
              <a href="https://github.com/netscoursec" target="_blank" rel="nofollow noreferrer"><FontAwesomeIcon icon={faGithub} /><span className="social-name">GitHub</span></a>
            </Menu.Item>
            <Menu.Item key="twitter" className="social">
              <a href="https://twitter.com/netscoursec" target="_blank" rel="nofollow noreferrer"><FontAwesomeIcon icon={faTwitter} /><span className="social-name">Twitter</span></a>
            </Menu.Item>
            <Menu.Item key="linkedin" className="social">
              <a href="https://www.linkedin.com/company/netscour-security/" target="_blank" rel="nofollow noreferrer"><FontAwesomeIcon icon={faLinkedin} /><span className="social-name">Linkedin</span></a>
            </Menu.Item>
          </Menu>
      </>
    );
}
