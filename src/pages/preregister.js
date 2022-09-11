import React, { useState } from 'react'
import Plausible from 'plausible-tracker'
import { Button, Col, Row } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdCard } from '@fortawesome/pro-duotone-svg-icons'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

const { trackEvent } = Plausible()

export default function Preregister() {
    const [text, setText] = useState("[Click to reveal]");
    const [url, setUrl] = useState("");
    const [isDecoded, setIsDecoded] = useState(false);

    return (
        <div className="preregister-page">
            <div className="content">
                <h1><span className="platform-name"><FontAwesomeIcon icon={faIdCard} /></span> Preregister</h1>
                <p>If you are interested in our product, take this opportunity to preregister! You can register for the following activities:</p>
                <ul>
                    <li>Mailing list - montly updates on platform's development progress</li>
                    <li>A live demo - once this option becomes available</li>
                    <li>Beta testing - if you'd like to be considered for a beta tester</li>
                </ul>
                <p>
                    We would very much like to hear a little bit about you, what you do, and how you think ScourNomad could help you in 
                    your daily activities. If you feel like sharing, chatting, and helping out, please join our community:
                </p>
                <ul style={{ listStyleType: "none" }}>
                    <li><a href="#" target="_blank"><FontAwesomeIcon icon={faGithub} /><span className="social-name">Github</span></a></li>
                    <li><a href="#" target="_blank"><FontAwesomeIcon icon={faTwitter} /><span className="social-name">Twitter</span></a></li>
                    <li><a href="#" target="_blank"><FontAwesomeIcon icon={faLinkedin} /><span className="social-name">Linkedin</span></a></li>
                </ul>
                <p>
                    If you'd like to contact us, send us an email here:
                </p>
                <ul>
                    <li><a href={url} onClick={event => decryptMail(event, isDecoded, setIsDecoded, setText, setUrl)}>{text}</a></li>
                </ul>
                <Row justify="center" style={{ marginTop: "100px"}}>
                <Col xs={24} xl={18}>
                    <Button block className="shout-button" onClick={() => {
                        trackEvent("preregister");
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

/* Concatenating and redirection mailstring function */
function decryptMail(event, isDecoded, setIsDecoded, setText, setUrl) {
    if (!isDecoded) {
        event.preventDefault();

        var addressString = atob("Y29udGFjdEBuZXRzY291cnNlYy5jb20=");
        
        setIsDecoded(true);
        setText(addressString);
        setUrl(`mailto:${addressString}`);
    }
}
