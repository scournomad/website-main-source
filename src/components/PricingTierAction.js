import React from 'react'

// props:
// - tierName
// - tierTextItems
// - wrapperText
// - wrapperColor
// - price
// - discount
// - payment type
// - action

export function PricingTierAction(props) {
    return (
        <div className="pricing-tier pricing-tier-last">
            {props.actionContent}
        </div>
    );
}
