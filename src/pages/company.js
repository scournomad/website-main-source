import React from 'react'
import { Button, Col, Layout, Row } from 'antd'
import { CompanyDescription } from '../components/CompanyDescription'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuildingShield, faMegaphone } from '@fortawesome/pro-duotone-svg-icons'
import { Content } from 'antd/lib/layout/layout'

export default function Blog() {
  return (
    <div className="company-page">
      <div class="content">
        <h2><span className="platform-name"><FontAwesomeIcon icon={faBuildingShield} /> NetScour Security</span> - the company</h2>
        <h3>Mission</h3>
        <p>To build a next-generation platform for software security testing.</p>

        <h3>Vision</h3>
        <p>To provide quality tools and services for software security testing that will be affordable to everyone.</p>

        <CompanyDescription />

        <Row justify="center" style={{ marginTop: "100px"}}>
          <Col xl={{ span: 10 }}>
            <Button block className="shout-button" /*onClick={() => document.location = "/visit"}*/>
              <FontAwesomeIcon icon={faMegaphone} /> Interested? Give us a shout!
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  )
}
