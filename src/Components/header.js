import React from 'react';

export const Header = ({currency}) =>{
    return(
        <div>
            <div>
                1 USD / UAH : {currency ? (currency.USDUAH) : null}
            </div>
            <div>
                1 EUR / UAH : {currency ? (currency.EURUAH) : null}
            </div>
            <div>
                1 USD / EUR : {currency ?(currency.USDEUR) : null}
            </div>
        </div>
    )
}