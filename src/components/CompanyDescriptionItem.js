import React from 'react'
import { Button, Card, Popover } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const { Meta } = Card;

export function CompanyDescriptionItem(props) {
    const data = props.data;
    return (
        <Card
            cover={<FontAwesomeIcon icon={data.icon} />}>
            <Meta 
                title={data.title}
                description={data.text} />
            <Popover content={<ul>{data.textItems.map(i => <li>{i}</li>)}</ul>}>
                <Button className="find-out-more" block>Find out more</Button>
            </Popover>
        </Card>
    );
}
