import React, { useState } from 'react';
import ReactGA from 'react-ga4';
import { Row, Col, Image } from 'antd';

const items = [
    {
        image: "./img/platform/project-details.png",
        textItems: [
            "Easily access project notes and information",
            "Manage initial seed resources",
            "Review changes from automated scans",
        ]
    },
    {
        image: "./img/platform/automation.png",
        textItems: [
            "Use publicly available tools as well as the proprietary nodes",
            "Run the workflows manually or schedule them",
            "Set them up to be triggered from outside environments",
            "Observe the changes between the scan runs",
            "Get alerted on changes or interesting finds",
            "Automatically generate reports or add information to notes",
        ]
    },
    {
        image: "./img/platform/attack-surface.png",
        textItems: [
            "Review discovered resources and their relationships",
            "Review discovered CVE-s, bugs, keys, and other loot",
            "Expand the attack surface by automatic discovery workflows or by manual testing",
            "Execute per-resource tools to perform manual inspection, discovery, or attack",
            "Import resources from other tools",
        ]
    },
    {
        image: "./img/platform/report-templates.png",
        textItems: [
            "Build report templates, either for client reports or internal technical reports",
            "Fill them up automatically by running workflows or manual tools",
            "Update them manually as needed and review them easily",
            "Build mind maps and checklists for your internal use",
        ]
    },
    {
        image: "./img/platform/knowledge-base.png",
        textItems: [
            "Keep the knowledge base and project notes as correlated pieces of information",
            "Effortlessly locate your notes related to discovered resources, like ports and services, directly from the attack surface monitor",
            "Effortlessly locate your knowledge base notes related to tools and procedures directly from the flowgraphs and manual run screens",
        ]
    },
    {
        image: "./img/platform/timeline.png",
        textItems: [
            "The platform will automatically keep the timeline for you",
            "Set up what goes into the timeline and how it is displayed",
            "Manually edit the timeline",
            "Automatically use the timeline in your reports",
        ]
    },
    {
        image: "./img/platform/collaboration.png",
        textItems: [
            "Collaborate with your team, company, or fellow security researchers",
            "Selectively share the pieces of your knowledgebase",
            "Jointly edit the project notes, group knowledgebase, or project information",
            "Split the tasks, and create the tickets in one of the supported ticketing systems",
        ]
    },
];

export function PlatformDescriptionItem() {
    const [visible, setVisible] = useState(false);
    const [index, setIndex] = useState(false);
    return (
        <>
            {
                items.map((item, idx) =>
                    <Row className="platform-description-item-row" gutter={32} align="middle">
                        <Col xl={{ span: 12, push: idx % 2 === 0 ? 0 : 12 }}>
                            <Image
                                preview={{ visible: false }}
                                onClick={() => { 
                                    ReactGA.event({
                                        category: "main",
                                        action: "main_page_screenshot_viewed",
                                        label: `image ${idx}`
                                    });
                                    setIndex(idx);
                                    setVisible(true);
                                }}
                                src={item.image} />
                        </Col>
                        <Col xl={{ span: 12, pull: idx % 2 === 0 ? 0 : 12 }}>
                            <ul>
                                {item.textItems.map(textItem => <li>{textItem}</li>)}
                            </ul>
                        </Col>
                    </Row>
                )
            }
            <div style={{ display: 'none' }}>
                <Image.PreviewGroup preview={{ visible, onVisibleChange: vis => setVisible(vis), current: index }}>
                {
                    items.map((item) => <Image src={item.image} />)
                }
                </Image.PreviewGroup>
            </div>
        </>
    );
}
