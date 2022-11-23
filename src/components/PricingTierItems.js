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

export function PricingTierItems(props) {
    return (
        <div className="pricing-tier">
            <p>Includes:</p>
            <ul>
                {props.includedItems.map(item => <li>{item}</li>)}
            </ul>
        </div>
    );
}
