import React from 'react'
import { Badge } from 'antd';

// props:
// - tierName
// - tierTextItems
// - wrapperText
// - wrapperColor
// - price
// - discount
// - payment type
// - action

export function PricingTierDescription(props) {
    const WrapperText = props.wrapperText
        ? inner => <Badge.Ribbon 
            className="pricing-tier-wrapper"
            text={props.wrapperText}
            color={props.wrapperColor ?? "purple"}>{inner.children}</Badge.Ribbon>
        : inner => <>{inner.children}</>;
    return (
        <WrapperText>
            <div className="pricing-tier pricing-tier-first">
                <h2>{props.title}</h2>
                {props.contents}
            </div>
        </WrapperText>
    );
}
