import React, { useState } from 'react';
import { useLocation, Link } from "react-router-dom";
import { Menu } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/pro-duotone-svg-icons';

import logo from '../img/ScourNomadLogo.png';

export function MainMenu() {
  const location = useLocation();
  const [current, setCurrent] = useState(location.pathname); // TODO: Works as long as there are no complex paths

  if (current !== location.pathname) setCurrent(location.pathname);
  const onClick = e => {
    setCurrent(e.key);
  };
  return (
    <>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />&nbsp;<span className="company-name">ScourNomad</span>
        </Link>
      </div>
      <Menu
        onClick={onClick}
        selectedKeys={[current !== "/" ? current.replace(/\/*$/, '') : current]}
        mode="horizontal"
        overflowedIndicator={<FontAwesomeIcon icon={faBars} />}>
        <Menu.Item key="/">
          <Link to="/">Product</Link>
        </Menu.Item>
        <Menu.Item key="/company">
          <Link to="/company">Company</Link>
        </Menu.Item>
        {/* <Menu.Item key="/pricing">
          <Link to="/pricing">Pricing</Link>
        </Menu.Item> */}
        <Menu.Item key="github" className="social">
          <a href="https://github.com/scournomad" target="_blank" rel="nofollow noreferrer"><FontAwesomeIcon icon={faGithub} /><span className="social-name">GitHub</span></a>
        </Menu.Item>
        <Menu.Item key="twitter" className="social">
          <a href="https://twitter.com/scournomad" target="_blank" rel="nofollow noreferrer"><FontAwesomeIcon icon={faTwitter} /><span className="social-name">Twitter</span></a>
        </Menu.Item>
        <Menu.Item key="linkedin" className="social">
          <a href="https://www.linkedin.com/company/scour-nomad/" target="_blank" rel="nofollow noreferrer"><FontAwesomeIcon icon={faLinkedin} /><span className="social-name">Linkedin</span></a>
        </Menu.Item>
      </Menu>
    </>
  );
}
