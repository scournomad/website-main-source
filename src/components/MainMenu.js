import React, { useState } from 'react'
import { Menu } from 'antd';

const items = [
    {
      label: 'Product',
      key: 'product',
      //icon: <MailOutlined />,
    },
    {
      label: 'Company',
      key: 'company',
      //icon: <AppstoreOutlined />,
    },
    {
      label: 'Inquiry',
      key: 'inquiry',
      //icon: <SettingOutlined />,
    }
  ];

export function MainMenu() {
    const [current, setCurrent] = useState('product');
    const onClick = e => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
}



{/* <div className="main-menu">
      <Link to="/">Product</Link>
      <Link to="/company">Company</Link>
      <Link to="/inquiry">Inquiry</Link>
    </div> */}
