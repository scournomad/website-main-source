import React from 'react'
import { Badge, Button, Tag } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserSecret } from '@fortawesome/pro-duotone-svg-icons';

// props:
// - tierName
// - tierTextItems
// - wrapperText
// - wrapperColor
// - price
// - discount
// - payment type
// - action

export function PricingTier(props) {
    debugger;
    const WrapperText = props.wrapperText
        ? inner => <Badge.Ribbon 
            className="pricing-tier-wrapper"
            text={props.wrapperText}
            color={props.wrapperColor ?? "purple"}>{inner.children}</Badge.Ribbon>
        : inner => <>{inner.children}</>;
    const CostOutput = props.discount
        ? () => <><span className="crossed-over">{props.price}</span> {props.discount}</>
        : () => <>{props.price}</>;
    return (
        <WrapperText>
            <div className="pricing-tier">
                <h2>{props.title}</h2>
                {props.contents}
                <h3><CostOutput /></h3>
                {props.priceSecondaryItems.map(psi => <h4>{psi}</h4>)}
                <p>Includes:</p>
                <ul>
                    {props.includedItems.map(item => <li>{item}</li>)}
                </ul>
                {props.actionContent}
            </div>
        </WrapperText>
    );
}
