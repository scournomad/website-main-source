import React from 'react'
import { Button, Col, Row } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdCard, faStarExclamation } from '@fortawesome/pro-duotone-svg-icons'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function PreregisterPage() {
    return (
        <div className="preregister-page">
            <div className="content">
                <h1><span className="platform-name"><FontAwesomeIcon icon={faIdCard} /></span> Preregister</h1>
                <p>If you are interested in our product, take this opportunity to preregister! You can register for the following activities:</p>
                <ul>
                    <li>Mailing list - monthly updates on the platform's development progress</li>
                    <li>A live demo - once this option becomes available</li>
                    <li>Beta testing - if you'd like to be considered for a beta tester</li>
                </ul>
                <div className='alert'>
                    <div className='alert-content'>
                        <h2><span className="platform-name"><FontAwesomeIcon icon={faStarExclamation} /></span> Become an <span className="platform-name">early adopter</span>, and get <span className="platform-name">free perks</span> for life!</h2>
                        <p>
                            Take this opportunity to become our early adopter and get some <span className="platform-name">exciting perks</span>:
                        </p>
                        <ul>
                            <li>Be one of the first people to test cool new technology</li>
                            <li>Once the platform goes live, be the first to get the chance to try new stuff for free</li>
                            <li>Get other freebies and special offers</li>
                            <li>Wear the "early adopter" badge of honor on our social sites</li>
                        </ul>
                    </div>
                </div>
                <p>
                    We would like to hear a little about you, what you do, and how you think ScourNomad could help you in 
                    your daily activities. If you feel like sharing, chatting, and helping out, please join our community:
                </p>
                <ul style={{ listStyleType: "none" }}>
                    <li><a href="https://github.com/netscoursec" target="_blank" rel="nofollow noopener"><FontAwesomeIcon icon={faGithub} /><span className="social-name">GitHub</span></a></li>
                    <li><a href="https://twitter.com/netscoursec" target="_blank" rel="nofollow noopener"><FontAwesomeIcon icon={faTwitter} /><span className="social-name">Twitter</span></a></li>
                    <li><a href="https://www.linkedin.com/company/netscour-security/" target="_blank" rel="nofollow noopener"><FontAwesomeIcon icon={faLinkedin} /><span className="social-name">Linkedin</span></a></li>
                </ul>
                <Row justify="center" style={{ marginTop: "100px"}}>
                <Col xs={24} xl={18}>
                    <Button block className="shout-button" onClick={() => {
                        document.location = "https://forms.gle/WdBE9FiD2e7EERMW7";
                    }}>
                        <FontAwesomeIcon icon={faIdCard} /> Go to registration form
                    </Button>
                </Col>
                </Row>
            </div>
        </div>
    )
}
