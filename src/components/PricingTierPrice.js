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

export function PricingTierPrice(props) {
    const CostOutput = props.discount
        ? () => <><span className="crossed-over">{props.price}</span> {props.discount}</>
        : () => <>{props.price}</>;
    return (
        <div className="pricing-tier">
            <h3><CostOutput /></h3>
            {props.priceSecondaryItems.map(psi => <h4>{psi}</h4>)}
        </div>
    );
}
