import React from 'react'
import { Row, Col, Card, Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PlatformDescriptionItem } from '../components/PlatformDescriptionItem';
import { faBrainCircuit, faBugs, faGears, faListCheck, faBullhorn, faRadar, faSignsPost } from '@fortawesome/pro-duotone-svg-icons';
import { Roadmap } from '../components/Roadmap';

const { Meta } = Card;

export default () => (
  <div className="main-body">
    <Row className="app-logo" justify="center">
      <Col xs={{span: 24}} md={{ span: 21, offset: 3 }}>
        <Row className="app-logo-container" justify="center">
          <Col xs={{ flex: "350px" }} md={6}>
            <img src="./img/NetScourSecLogo.png"/>
          </Col>
          <Col xs={{ flex: "350px" }} md={18}>
            <span className="intro-text">NetScour Security presents</span>
            <h1 className="header1">ScourNomad</h1>
            <h2 className="header2">Redefining infosec toolbox</h2>
          </Col>
        </Row>
      </Col>
    </Row>
    <div className="content">
      <h2>
        What is <span className="platform-name">ScourNomad</span>?
      </h2>
      <p>
        The goal of the ScourNomad platform is to reduce the security experts' time and effort performing 
        mundane tasks and improve testing performance. It enhances the penetration tests and bug hunts speed 
        and precision, providing easy-to-use interfaces and powerful integrations.
      </p>
      <b>
        Build and execute your full software security testing methodologies quickly and easily!
      </b>
      <Row className="initial-description" gutter={32}>
        <Col xl={8} lg={12} xs={24}>
          <Card
            cover={<FontAwesomeIcon icon={faBugs} />}>
            <Meta description="Build security testing methodologies and access them from anywhere" />
          </Card>
        </Col>
        <Col xl={8} lg={12} xs={24}>
          <Card
            cover={<FontAwesomeIcon icon={faGears} />}>
            <Meta description="Automate what can be automated" />
          </Card>
        </Col>
        <Col xl={8} lg={12} xs={24}>
          <Card
            cover={<FontAwesomeIcon icon={faRadar} />}>
            <Meta description="Discover resources and loot by automated or manual security testing" />
          </Card>
        </Col>
        <Col xl={8} lg={12} xs={24}>
          <Card
            cover={<FontAwesomeIcon icon={faListCheck} />}>
            <Meta description="Build easy notes and reports" />
          </Card>
        </Col>
        <Col xl={8} lg={12} xs={24}>
          <Card
            cover={<FontAwesomeIcon icon={faSignsPost} />}>
            <Meta description="Visualize your tasks with checklists and mindmaps" />
          </Card>
        </Col>
        <Col xl={8} lg={12} xs={24}>
          <Card
            cover={<FontAwesomeIcon icon={faBrainCircuit} />}>
            <Meta description="Correlate your knowledge base with the attack surface resources" />
          </Card>
        </Col>
      </Row>
      
      <h2>How <span className="platform-name">ScourNomad</span> platform works:</h2>
      <p>
        ScourNomad platform provides multiple user interfaces to cover the daily tasks that software 
        security professionals require. It also offers the most used tools that are readily available 
        at any moment.
      </p>
      <PlatformDescriptionItem />
      <Roadmap />
      <Row justify="center" style={{ marginTop: "100px"}}>
        <Col xs={24} xl={18}>
          <Button block className="shout-button" onClick={() => document.location = "/preregister"}>
            <FontAwesomeIcon icon={faBullhorn} /> Preregister
          </Button>
        </Col>
      </Row>
    </div>
  </div>
)
