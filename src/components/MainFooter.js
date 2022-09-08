import React from 'react'
import { Row, Col } from 'antd';
import { Menu } from 'antd';

export function MainFooter(props) {
    return (
        <Row justify="center">
            <Col span={16}>
                <h3>Menu</h3>
                <Menu onClick={props.setSelectedPage} selectedKeys={[props.selectedPage]} mode="vertical" items={props.items} />
            </Col>
            {/* <Col span={12}>
                <h3>Social</h3>
                <ul>
                    <li></li>
                    <li></li>
                </ul>
            </Col> */}
        </Row>
    )
}



{/* <div className="main-menu">
      <Link to="/">Product</Link>
      <Link to="/company">Company</Link>
      <Link to="/inquiry">Inquiry</Link>
    </div> */}
