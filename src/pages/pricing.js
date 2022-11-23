import React from 'react'
import { Button, Col, Row } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/pro-duotone-svg-icons'
import { PricingTier } from '../components/PricingTier'


export default function PricingPage() {
    const tiers = [
        {
            title: "Preorder",
            contents: <>
                <p>
                    ScourNomad is now in alpha testing. Once you preorder ScourNomad, you will receive
                    the first six months of the 50% discount on the license price once it becomes
                    available.
                </p>
                <p>
                    New features automatically will become available as they are developed.
                </p>
            </>,
            price: "$50",
            priceSecondaryItems: [
                " + scanning resources"
            ],
            discount: "$25 / month",
            wrapperText: "-20% for first 6 months",
            includedItems: [
                "Project management",
                "Automation",
                "Early supporter badge",
            ],
            actionContent: <Button>Sign up</Button>
        },
        {
            title: "Basic",
            contents: <>
                <p>
                    Best suitable for individual security professionals looking to organize and accelerate
                    their work. Automate what needs automating, prepare your checklists, and then continue
                    with manual testing.
                </p>
            </>,
            price: "$50 / month",
            priceSecondaryItems: [
                " + scanning resources"
            ],
            includedItems: [
                "Project management",
                "Automation",
                "Reporting",
                "Attack surface management",
                "Knowledge base",
                "Timeline",
            ],
            actionContent: <span>Coming soon</span>
        },
        {
            title: "Teams",
            contents: <>
                <p>
                    Best suitable for small teams of security professionals. Collaborate on the projects and 
                    share information between the team. Set the tasks for each team member and move them between 
                    team members as they are being complemted. 
                </p>
            </>,
            price: "$50 / month",
            priceSecondaryItems: [
                " + 20 / user / month",
                " + scanning resources"
            ],
            includedItems: [
                "Everything in Base license",
                "Roles",
                "Internal task management",
                "Internal knowledgebase management",
                "Team insingts"
            ],
            actionContent: <span>Coming soon</span>
        },
        // {
        //     title: "Corporate",
        //     contents: <p></p>,
        //     price: "Contact us",
        //     includedItems: [
        //         "Everything in Base and Team licenses",
        //         "CI / CD integration",
        //         "24/7 helpdesk and support",
        //         "Initial operational setup",
        //     ],
        //     actionContent: <span>Coming soon</span>
        // },
    ];
    return (
        <div className="pricing-page">
            <div className="content">
                <h1><span className="platform-name"><FontAwesomeIcon icon={faCartShopping} />&nbsp;Pricing</span> - buy ScourNomad</h1>
                
                <Row className="pricing-table" justify="center" gutter={32}>
                    {tiers.map((tier, index) => 
                        <Col key={index} span={8}>
                            <PricingTier 
                                title = {tier.title}
                                contents = {tier.contents}
                                price = {tier.price}
                                priceSecondaryItems = {tier.priceSecondaryItems}
                                discount = {tier.discount}
                                wrapperText = {tier.wrapperText}
                                includedItems = {tier.includedItems}
                                actionContent = {tier.actionContent} />
                        </Col>
                    )}
                </Row>
            </div>
        </div>
    )
}
