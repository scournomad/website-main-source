import React from 'react'
import { Col, Row } from 'antd'
import { CompanyDescription } from '../components/CompanyDescription'

export default function Blog() {
  return (
    <div className="company-page">
      <Row justify="center">
        <Col span={16}>
          <h2><span className="platform-name">NetScour Security</span>: the company</h2>
          <h3>Mission</h3>

          <p>To build a next-generation platform for software security testing.</p>

          <h3>Vision</h3>

          <p>To provide quality tools and services for software security testing that will be affordable to everyone.</p>
        </Col>
      </Row>
      <CompanyDescription />
    </div>
  )
}
