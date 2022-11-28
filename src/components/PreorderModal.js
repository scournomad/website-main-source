import React, { useState, useImperativeHandle } from 'react';
import { Modal, Button, Form, Input, Checkbox, notification } from 'antd';

const PreorderModal = React.forwardRef((props, ref) => {
    const [visible, setVisible] = useState(false);
    const show = () => { setVisible(true); }
    const hide = () => { setVisible(false); }
    useImperativeHandle(ref, () => ({ show, hide }));

    // const [emailForm] = Form.useForm();
    const [questionnaireForm] = Form.useForm();

    /* eslint-disable no-template-curly-in-string */
    const validateMessages = {
        required: 'This field is required!',
        types: {
          email: 'Invalid email!',
        },
    };
    /* eslint-enable no-template-curly-in-string */

    // const onFinish = (values) => {
    //     var url = new URL('https://docs.google.com/forms/d/e/1FAIpQLSffu_ua3wkTublRraW77ItO7CGFharPPcuHIUud0ku4gUe-oQ/formResponse');
    //     url.search = new URLSearchParams(values); 
        
    //     fetch(url.toString(), {
    //         method: 'GET',
    //         data: values,
    //         headers: {
    //           'Content-Type': 'application/x-www-form-urlencoded',
    //         }
    //     })
    //     .catch((error) => {
    //         if (error instanceof TypeError) {
    //             notification.success({message: "Email address submitted", description: "You should receive a cofirmation email."});
    //             emailForm.resetFields();
    //         } else {
    //             notification.error({message: "Error submitting email", description: "There was an error while submitting the email address."})
    //         }
    //     });
    // };

    const onFinishQuestionnaire = (values) => {
        var url = new URL('https://docs.google.com/forms/d/e/1FAIpQLSepgX9yTxt7_ljmSOHb4KsqZpdyEv0Z32Z6-_gRnab7vWockw/formResponse');
        url.search = prepareURLSearchParams(values); 
        debugger;
        fetch(url.toString(), {
            method: 'GET',
            data: values,
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            }
        })
        .then(() => {
            notification.error({message: "Error submitting questionnaire", description: "There was an error while submitting questionnaire."});
        })
        .catch((error) => {
            if (error instanceof TypeError) {
                notification.success({message: "Questionnaire answers submitted", description: "Thank you for answering our questionnaire. You should receive a cofirmation email."});
                questionnaireForm.resetFields();
            } else {
                notification.error({message: "Error submitting questionnaire", description: "There was an error while submitting questionnaire."});
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
            </p>
            {/* <p>
                If you would like to receive the <b>update once the project becomes available</b>, please click the button below to <b>leave an email</b>.
            </p>
            <Form layout="vertical" form={emailForm} onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item name="emailAddress1" label="Email address" rules={[{ required: true }, { type: 'email' }]}>
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
            </Form> */}
            <p>
                If you are interested in ScourNomad, <b>please fill out the questionnaire form</b>, and you will receive:
                <ul>
                    <li><b>a 50% discount for the first six months</b></li>
                    <li><b>the unique "early adopter" status for life</b></li>
                </ul>
            </p>
            <Form layout="vertical" form={questionnaireForm} onFinish={onFinishQuestionnaire} validateMessages={validateMessages}>
                <Form.Item name="emailAddress" rules={[{ required: true }, { type: 'email' }]} label="Email address">
                    <Input />
                </Form.Item>
                <Form.Item name="entry.874821023" rules={[{ required: true }]} label="Which tools are you currently using for organizing your penetration tests and bug bounty hunts?">
                    <Input.TextArea showCount />
                </Form.Item>
                <Form.Item name="entry.1814624787" rules={[{ required: true }]} label="What features do the products that you are using lack?">
                    <Input.TextArea showCount />
                </Form.Item>
                <Form.Item name="entry.1857490811" rules={[{ required: true }]} label="How much do you expect to pay for the product?">
                    <Input.TextArea showCount />
                </Form.Item>
                <Form.Item name="entry.998927137" rules={[{ required: true }]} label="Which of the following describes your need for the product?">
                    <Checkbox.Group>
                        <Checkbox value="I need automation" style={{ lineHeight: '32px' }}>
                            I need automation
                        </Checkbox>
                        <Checkbox value="I want results visualization for easier testing" style={{ lineHeight: '32px' }}>
                            I want results visualization for easier testing
                        </Checkbox>
                        <Checkbox value="I need simpler knowledgebase so that I have direct access from the results to my notes" style={{ lineHeight: '32px' }}>
                            I need simpler knowledgebase so that I have direct access from the results to my notes
                        </Checkbox>
                        <Checkbox value="I need faster and easier report writing" style={{ lineHeight: '32px' }}>
                            I need faster and easier report writing
                        </Checkbox>
                        <Checkbox value="I want to collaborate with other people" style={{ lineHeight: '32px' }}>
                            I want to collaborate with other people
                        </Checkbox>
                        <Checkbox value="I need project organization to split work inside my team" style={{ lineHeight: '32px' }}>
                            I need project organization to split work inside my team
                        </Checkbox>
                        <Checkbox value="I need CI / CD integration functionalities" style={{ lineHeight: '32px' }}>
                            I need CI / CD integration functionalities
                        </Checkbox>
                        <Checkbox value="__other_option__" style={{ lineHeight: '32px' }}>
                            Other: <Form.Item name="entry.998927137.other_option_response"><Input className='other-input' /></Form.Item>
                        </Checkbox>
                    </Checkbox.Group>
                </Form.Item>
                <Form.Item name="entry.657927503" rules={[{ required: true }]} label="How do you intend to use ScourNomad?">
                    <Checkbox.Group>
                        <Checkbox value="I'll use it to do penetration testing" style={{ lineHeight: '32px' }}>
                            I'll use it to do penetration testing
                        </Checkbox>
                        <Checkbox value="I'll use it to do bug bounty hunting" style={{ lineHeight: '32px' }}>
                            I'll use it to do bug bounty hunting
                        </Checkbox>
                        <Checkbox value="I want to automate performing security tests on my software" style={{ lineHeight: '32px' }}>
                            I want to automate performing security tests on my software
                        </Checkbox>
                        <Checkbox value="__other_option__" style={{ lineHeight: '32px' }} className="test">
                            Other: <Form.Item name="entry.657927503.other_option_response"><Input className='other-input' /></Form.Item>
                        </Checkbox>
                    </Checkbox.Group>
                </Form.Item>
                <Form.Item name="entry.1408057039" rules={[{ required: true }]} label="What is your overall reaction to a product like this?">
                    <Input.TextArea showCount />
                </Form.Item>
                <Form.Item name="entry.1443289466" label="Any other remarks? Feature requests?">
                    <Input.TextArea showCount />
                </Form.Item>
                <Form.Item name="Submit">
                    <Button block htmlType="submit" className="shout-button primary">
                        Fill out questionaire
                    </Button>
                </Form.Item>
            </Form>
            {/* <Button block className="shout-button primary" onClick={() => nothing()}>
                Fill out questionaire
            </Button> */}
        </Modal>
    );
});

function prepareURLSearchParams(data) {
    var params = new URLSearchParams();
    Object.entries(data).forEach((entry) => {
        if (Array.isArray(entry[1])) {
            entry[1].forEach(e => params.append(entry[0], e));
        } else {
            params.append(entry[0], entry[1]);
        }
    });
    return params;
}

export default PreorderModal;
