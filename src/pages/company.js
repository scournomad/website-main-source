import React from 'react'
import { useNavigate } from '@reach/router'
import { Button, Col, Descriptions, Row } from 'antd'
import { CompanyDescription } from '../components/CompanyDescription'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuildingShield, faBullhorn } from '@fortawesome/pro-duotone-svg-icons'

export default function Blog() {
  const navigate = useNavigate();
  return (
    <div className="company-page">
      <div className="content">
        <h1><span className="platform-name"><FontAwesomeIcon icon={faBuildingShield} /> ScourNomad</span> - the company</h1>
        <h2>Mission</h2>
        <p>To build a next-generation platform for software security testing.</p>

        <h2>Vision</h2>
        <p>To provide quality tools and services for software security testing that will be affordable to everyone.</p>

        <CompanyDescription />

        <h2>Comapny legal information</h2>
        <Descriptions column={1}>
          <Descriptions.Item label="Company name">NETSCOUR SECURITY D.O.O.</Descriptions.Item>
          <Descriptions.Item label="Date formed">2022-07-13</Descriptions.Item>
          <Descriptions.Item label="Main activity">6201 - Computer Programming Activities</Descriptions.Item>
          <Descriptions.Item label="OIB">88192628473</Descriptions.Item>
          <Descriptions.Item label="MBS">040443521</Descriptions.Item>
          <Descriptions.Item label="VAT">HR88192628473</Descriptions.Item>
          <Descriptions.Item label="IBAN">HR2524020061101107494</Descriptions.Item>
          <Descriptions.Item label="Board members">Andrej Mohar, Director</Descriptions.Item>
          <Descriptions.Item label="Initial capital">20.000,00 kn, paid in full</Descriptions.Item>
          <Descriptions.Item label="Register">Trgovački sud u Rijeci, Tt-22/4982-2</Descriptions.Item>
        </Descriptions>

        <Row justify="center" style={{ marginTop: "100px"}}>
          <Col xs={24} xl={18}>
            <Button block className="shout-button" onClick={() => navigate("/preregister")}>
              <FontAwesomeIcon icon={faBullhorn} /> Preregister
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  )
}
