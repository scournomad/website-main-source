import React from 'react'
import { Row, Col } from 'antd';
import { Link } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

export function MainFooter() {
    return (
        <>
            <Row>
                <Col xs={24} sm={5} md={4} xl={3}>
                    <h3>Menu</h3>
                    <ul>
                        <li><Link to="/">Product</Link></li>
                        <li><Link to="/company">Company</Link></li>
                        <li><Link to="/preregister">Preregister</Link></li>
                    </ul>
                </Col>
                <Col xs={24} sm={5} md={9} xl={5}>
                    <h3>Social</h3>
                    <ul>
                        <li><a href="#" target="_blank"><FontAwesomeIcon icon={faGithub} /> Github</a></li>
                        <li><a href="#" target="_blank"><FontAwesomeIcon icon={faTwitter} /> Twitter</a></li>
                        <li><a href="#" target="_blank"><FontAwesomeIcon icon={faLinkedin} /> Linkedin</a></li>
                    </ul>
                </Col>
                <Col xs={24} sm={14} md={11} xl={8}>
                    <h3>Partners</h3>
                    <Row className='partners'>
                        <Col xs={24} sm={8}>
                            <a href="https://filrougecapital.com/" target="_blank">
                                <img src="./img/partners/FRC.png"></img>
                            </a>
                        </Col>
                        <Col xs={24} sm={8}>
                            <img src="./img/partners/EU.png"></img>
                        </Col>
                        <Col xs={24} sm={8}>
                            <img src="./img/partners/ESIF.png"></img>
                            <span className="esif-text">
                                Krajnji primatelj ﬁnancijskog instrumenta suﬁnanciranog iz Europskog fonda za 
                                regionalni razvoj u sklopu Operativnog programa "Konkurentnost i kohezija".
                            </span>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <hr></hr>
            <Row justify="space-between">
                <Col xs={24} sm={5}>
                    <a href="#" target="_blank">Terms and Conditions</a>&nbsp;&nbsp;&nbsp;
                    <a href="#" target="_blank">Privacy Policy</a>
                </Col>
                <Col xs={24} sm={5} className="copyright">&copy; 2022 by NetScour Security</Col>
            </Row>
        </>
    )
}