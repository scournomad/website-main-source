import React from 'react'
import { Row, Col } from 'antd';

export default () => (
  <div className="main-body">
    <Row className="app-logo">
      <Col xl={{ span: 2, offset: 3 }}>
        <img src="./img/ScourNomadLogo.png"/>
      </Col>
      <Col xl={8}>
        <span className="intro-text">NetScour Security presents</span>
        <h1 className="header1">ScourNomad</h1>
        <h2 className="header2">Redefining infosec toolbox</h2>
      </Col>
    </Row>
  </div>
)
