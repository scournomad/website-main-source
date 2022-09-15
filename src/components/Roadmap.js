import React from 'react'
import { Col, Row, Timeline } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserSecret } from '@fortawesome/pro-duotone-svg-icons';

export function Roadmap() {
    return (
        <div className="roadmap">
            <h2>Roadmap</h2>
            <p>
                We currently have the PoC running and are actively working on finalizing the pre-alpha stage. After this stage we will perform
                initial pentest and start with the closed apha testing.
            </p>
            <Row>
                <Col xs={24}>
                    <Timeline mode="left">
                        <Timeline.Item label="" color="#1f1f1f">&nbsp;</Timeline.Item>
                        <Timeline.Item label="2021" color="#9e70c7">Proof of Concept development</Timeline.Item>
                        <Timeline.Item label="Q3 2022" color="#9e70c7">FRC investment received</Timeline.Item>
                        <Timeline.Item label="Sep 2022" color="#cf9ff8">Pre-alpha development</Timeline.Item>
                        <Timeline.Item label="Jan 2022" color="gray">Closed alpha testing starts</Timeline.Item>
                        <Timeline.Item label="Q1-Q2 2023" color="gray">Beta testing starts</Timeline.Item>
                        <Timeline.Item label="Q1 2023" color="gray" dot={<FontAwesomeIcon icon={faUserSecret} />}>Full third-party pentest</Timeline.Item>
                        <Timeline.Item label="Q2-Q3 2023" color="gray">First commercial version</Timeline.Item>
                    </Timeline>
                </Col>
            </Row>
        </div>
    );
}
