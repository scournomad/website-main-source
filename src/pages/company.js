import React from 'react'
import { Button, Col, Layout, Row } from 'antd'
import { CompanyDescription } from '../components/CompanyDescription'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuildingShield, faMegaphone } from '@fortawesome/pro-duotone-svg-icons'
import { Content } from 'antd/lib/layout/layout'

export default function Blog() {
  return (
    <div className="company-page">
      <div className="content">
        <h1><span className="platform-name"><FontAwesomeIcon icon={faBuildingShield} /> NetScour Security</span> - the company</h1>
        <h2>Mission</h2>
        <p>To build a next-generation platform for software security testing.</p>

        <h2>Vision</h2>
        <p>To provide quality tools and services for software security testing that will be affordable to everyone.</p>

        <CompanyDescription />

        <Row justify="center" style={{ marginTop: "100px"}}>
          <Col xs={24} xl={18}>
            <Button block className="shout-button" /*onClick={() => document.location = "/visit"}*/>
              <FontAwesomeIcon icon={faMegaphone} /> Preorder &amp; Mailing list
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  )
}
