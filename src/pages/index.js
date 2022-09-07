import React from 'react'
import { Row, Col, Card } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PlatformDescriptionItem } from '../components/PlatformDescriptionItem';
import { faBrainCircuit, faBugs, faGears, faListCheck, faRadar, faSignsPost } from '@fortawesome/pro-duotone-svg-icons';

const { Meta } = Card;

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
    <Row className="initial-description" justify="center">
      <Col xl={{ span: 16 }}>
        <h3>Build and execute your software security testing methodologies quickly and easily with <span className="platform-name">ScourNomad.</span></h3>

        <p>
          The goal of the ScourNomad platform is to reduce the security experts' time and effort performing 
          mundane tasks and improve testing performance. It enhances the penetration tests and bug hunts speed 
          and precision, providing easy-to-use interfaces and powerful integrations.
        </p>
      </Col>
    </Row>
    <Row className="initial-description" justify="center" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col xl={{ span: 4 }}>
        <Card
          cover={<FontAwesomeIcon icon={faBugs} />}>
          <Meta description="Build security testing methodologies" />
        </Card>
      </Col>
      <Col xl={{ span: 4 }}>
        <Card
          cover={<FontAwesomeIcon icon={faGears} />}>
          <Meta description="Automate what can be automated" />
        </Card>
      </Col>
      <Col xl={{ span: 4 }}>
        <Card
          cover={<FontAwesomeIcon icon={faRadar} />}>
          <Meta description="Discover resources and loot by automated or manual security testing" />
        </Card>
      </Col>
    </Row>
    <Row className="initial-description" justify="center" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col xl={{ span: 4 }}>
        <Card
          cover={<FontAwesomeIcon icon={faListCheck} />}>
          <Meta description="Build easy notes and reports" />
        </Card>
      </Col>
      <Col xl={{ span: 4 }}>
        <Card
          cover={<FontAwesomeIcon icon={faSignsPost} />}>
          <Meta description="Visualize your tasks with checklists and mindmaps" />
        </Card>
      </Col>
      <Col xl={{ span: 4 }}>
        <Card
          cover={<FontAwesomeIcon icon={faBrainCircuit} />}>
          <Meta description="Correlate your knowledge base with the attack surface resources" />
        </Card>
      </Col>
    </Row>
    <Row className="initial-description" justify="center" style={{ marginTop: "100px"}}>
      <Col xl={{ span: 16 }}>
        <h3>How <span className="platform-name">ScourNomad</span> platform works:</h3>

        <p>
          ScourNomad platform will provide multiple user interfaces to cover all the tasks that 
          software security professionals require on the daily basis.
        </p>
      </Col>
    </Row>
    <PlatformDescriptionItem />
  </div>
)
