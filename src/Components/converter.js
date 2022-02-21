import react, {useState} from 'react';

export const Converter = ({currency})=>{
    const [currencySum, setCurrencySum] = useState(0)
    const [currencyName, setCurrencyName] = useState('')

    const actionsObject = {
        currencySum: setCurrencySum,
        currencyName: setCurrencyName,
    }

    const handleChange = event => {
        actionsObject[event.target.name](event.target.value)
    }
    return(
        <div>
            <label>
                Введите количество валюты
                <input onChange={handleChange} type={'number'} name={'currencySum'} value={currencySum}/>
            </label>
            <select name={'currencyName'} onChange={handleChange} value={currencyName}>
                {currency ? ['',...Object.keys(currency)].map((currencyName) =>{
                    return <option value={currencyName} key={currencyName}>{currencyName}</option>
                }):null}
            </select>
            {currencySum && currencyName ? (
                <div><section>{currencySum*currency[currencyName]}</section>UAH</div>
            ):null}
        </div>
    )
}