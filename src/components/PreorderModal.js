import React, { useState, useImperativeHandle } from 'react';
import { Modal, Button, Form, Input, notification } from 'antd';
import ReactGA from 'react-ga4';

const PreorderModal = React.forwardRef((props, ref) => {
    const [visible, setVisible] = useState(false);
    const [emailForm] = Form.useForm();
    const show = () => { setVisible(true); }
    const hide = () => { setVisible(false); }
    useImperativeHandle(ref, () => ({ show, hide }));

    /* eslint-disable no-template-curly-in-string */
    const validateMessages = {
        required: 'This field is required!',
        types: {
          email: 'Invalid email!',
        },
    };
    /* eslint-enable no-template-curly-in-string */

    const onEmailFinish = (values) => {
        var url = new URL('https://docs.google.com/forms/d/e/1FAIpQLSffu_ua3wkTublRraW77ItO7CGFharPPcuHIUud0ku4gUe-oQ/formResponse');
        url.search = new URLSearchParams(values); 
        
        fetch(url.toString(), {
            method: 'GET',
            data: values,
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            }
        })
        .then(() => {
            ReactGA.event({
                category: "main",
                action: "preorder_email_submit_error_1",
            });
            notification.error({message: "Error submitting email", description: "There was an error while submitting the email address."})
        })
        .catch((error) => {
            if (error instanceof TypeError) {
                notification.success({message: "Email address submitted", description: "You should receive a cofirmation email."});
                emailForm.resetFields();
                ReactGA.event({
                    category: "main",
                    action: "preorder_email_submitted",
                });
            } else {
                ReactGA.event({
                    category: "main",
                    action: "preorder_email_submit_error_2",
                });
                notification.error({message: "Error submitting email", description: "There was an error while submitting the email address."})
            }
        });
    };

    return (
        <Modal
            title={<h1>Preorder ScourNomad</h1>}
            className="preorder-modal"
            open={visible}
            onOk={() => hide()}
            onCancel={() => hide()}
            width={700}
            footer={[
                <Button key="submit" className="shout-button-small shout-button primary" onClick={() => hide()}>
                    cancel
                </Button>,
            ]}>
            <p>
                ScourNomad is currently <b>in the internal alpha testing phase</b> and will become available in <b>January 2023</b>.
                If you are interested in ScourNomad, <b>please send us your email using the form below</b>, and we will inform you when it 
                becomes available.
            </p>
            <p>
                Also, we encourage you to <b>fill out the survey by clicking the button below</b>;
                whether you like the idea of ScourNomad or not, we would love to hear from you. <b>Let your voice be heard!</b>
            </p>
            <Form layout="vertical" form={emailForm} onFinish={onEmailFinish} validateMessages={validateMessages}>
                <Form.Item name="emailAddress" label="Email address" rules={[{ required: true }, { type: 'email' }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="entry.1216266519" style={{display: "none"}} initialValue="webpage">
                    <Input type="hidden" />
                </Form.Item>
                <Form.Item name="Submit">
                    <Button block htmlType="submit" className="shout-button primary">
                        Leave email for availability update
                    </Button>
                </Form.Item>
            </Form>
            <Button block htmlType="submit" className="shout-button primary" onClick={() => {
                ReactGA.event({
                    category: "main",
                    action: "preorder_survey_clicked",
                });
                window.open("https://docs.google.com/forms/d/e/1FAIpQLSepgX9yTxt7_ljmSOHb4KsqZpdyEv0Z32Z6-_gRnab7vWockw/viewform", "_blank")
            }}>
                Fill out the survey - let your voice be heard!
            </Button>
        </Modal>
    );
});

export default PreorderModal;
