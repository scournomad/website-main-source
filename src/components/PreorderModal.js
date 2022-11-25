import React, { useState, useImperativeHandle } from 'react';
import { Modal, Row, Col, Button } from 'antd';

const PreorderModal = React.forwardRef((props, ref) => {
    const [visible, setVisible] = useState(false);
    const show = () => { setVisible(true); }
    const hide = () => { setVisible(false); }
    useImperativeHandle(ref, () => ({ show, hide }));

    const nothing = () => {};

    return (
        <Modal
            title={<h1>Preorder ScourNomad</h1>}
            className="preorder-modal"
            open={visible}
            onOk={() => hide()}
            onCancel={() => hide()}
            footer={[
                <Button key="submit" className="shout-button-small shout-button primary" onClick={() => hide()}>
                    cancel
                </Button>,
            ]}>
            <p>
                ScourNomad is currently <b>in the internal alpha testing phase</b> and will become available in <b>January 2023</b>.
            </p>
            <p>
                If you would like to receive the <b>update once the project becomes available</b>, please click the button below to <b>leave an email</b>.
            </p>
            <Button block className="shout-button primary" onClick={() => nothing()}>
                Leave email for availability update
            </Button>
            <p>
                If you wish to receive a <b>50% discount for the first six months and the unique "early adopter" status for life</b>, please click the button and <b>fill out the questionnaire form</b>.
            </p>
            <Button block className="shout-button primary" onClick={() => nothing()}>
                Fill out questionaire
            </Button>
        </Modal>
    );
});

export default PreorderModal;
