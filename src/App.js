import './App.css';
import React, {useEffect, useState} from 'react';

import {Header} from './Components/header';
import {Converter} from './Components/converter';


function App() {
    const [currencyObject, setCurrencyObject] = useState(null)
    useEffect(() =>{
        fetch(`http://api.currencylayer.com/live?access_key=${process.env.REACT_APP_API_KEY}`)
            .then (async response => {
                const result = await response.json()
                setCurrencyObject({
                    USDEUR:result.quotes.USDEUR,
                    USDUAH:result.quotes.USDUAH,
                    EURUAH:result.quotes.USDUAH / result.quotes.USDEUR,
                    EURUSD:1 / result.quotes.USDEUR,
                    UAHUSD:1 / result.quotes.USDUAH,
                    UAHEUR:1 / (result.quotes.USDUAH / result.quotes.USDEUR),
                })
            });
    },[currencyObject!==null])

    return(
        <div>
            <Header currency={currencyObject}/>
            <Converter currency={currencyObject}/>
        </div>
    )

}
export default App;
