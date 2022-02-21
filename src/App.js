import './App.css';
import react, {useEffect, useState} from 'react';

import {Header} from './Components/header';
import {Converter} from './Components/converter';

function App() {
    const [currencyObject, setCurrencyObject] = useState(null)
    useEffect(() =>{
        fetch(`http://api.currencylayer.com/live?access_key=fb124bf1648f324fad0c98de960ab24b`)
            .then (async response => {
                const result = await response.json()
                setCurrencyObject({
                    USDEUR:result.quotes.USDEUR,
                    USDUAH:result.quotes.USDUAH,
                    EURUAH:result.quotes.USDUAH / result.quotes.USDEUR,
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
