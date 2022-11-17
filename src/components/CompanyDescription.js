import React from 'react'
import { Row, Col } from 'antd';
import { faEye, faGlobe, faPeopleGroup, faTrowelBricks, faUserSecret, faVault } from '@fortawesome/pro-duotone-svg-icons';
import { CompanyDescriptionItem } from './CompanyDescriptionItem';

const items = [
    {
        icon: faVault,
        title: "Security",
        text: "ScourNomad considers user data sacred and will do everything in our power to protect it",
        textItems: [
            "We will perform internal penetration tests regularly",
            "We will perform third-party penetration tests as regularly as possible",
            "We will start with the bug bounty program as soon as possible",
            "We will publish security findings on our platform",
        ]
    },
    {
        icon: faUserSecret,
        title: "Privacy",
        text: "We will never give our customers' data away",
        textItems: [
            "As previously stated, we consider our users' data sacred",
            "We will never sell or give away our customers' data",
            "We will never use our customers' data ourselves",
            "This is your bread and butter; our task is to protect it.",
        ]
    },
    {
        icon: faEye,
        title: "Transparency",
        text: "We believe in transparency as the primary driver of great relationships",
        textItems: [
            "As stated earlier, we will publish third-party pentest results as transparently as possible",
            "We will publish bug bounty finds",
            "We will always publish bad news when it comes, and we will never wait to do so",
        ]
    },
    {
        icon: faTrowelBricks,
        title: "Availability",
        text: "We want to build and provide affordable software security testing tools and services to everyone that needs them",
        textItems: [
            "We want to make our platform affordable to anyone who wishes to use it",
            "We will work on modularizing it so that the base license becomes affordable",
        ]
    },
    {
        icon: faPeopleGroup,
        title: "Community",
        text: "We will always proactively support communication and collaboration both online and in-person",
        textItems: [
            "We will be organizing online services for learning, code sharing, and information sharing",
            "We will encourage cooperation and collaboration on all our platforms",
            "We will be joining as many live events as possible so that our customers can meet us in person",
        ]
    },
    {
        icon: faGlobe,
        title: "Equality",
        text: "One thing that we will never tolerate is hatred, hate speeches, or any inequality-based degradation or humiliation. Be kind to each other. Period.",
        textItems: [
            "We pledge to work hard against gender inequalities in the infosec community because gender inequality simply makes no sense",
            "We will investigate and ban anyone providing any kind of hate speech",
            "We will work hard to make our community centered around information sharing and networking, not on \"infosec drama.\"",
        ]
    },
];

export function CompanyDescription() {
    return (
        <>
            <Row className="company-description-item-row" style={{ marginTop: "100px" }} gutter={32} justify="center">
            {
                items.map((item) =>
                    <Col xl={8} lg={12} xs={24} >
                        <CompanyDescriptionItem data={item} />
                    </Col>)
            }
            </Row>
        </>
    );
}
