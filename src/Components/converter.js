import React, {useState} from 'react';

export const Converter = ({currency})=>{
    const [state, setState] = useState({name1: '', sum1: 0, name2: '', sum2: 0});

    const currencyList = [
        'USD', 'EUR', 'UAH',
    ]

    const handleChange = (event) => {
        if (event.target.name.includes('name')){
            setState({...state, [event.target.name]: event.target.value})
        } else {
            if (event.target.name.includes(1)){
                setState({
                    ...state,
                    sum1: event.target.value,
                    sum2: event.target.value * currency[`${state.name1}${state.name2}`]
                })
            } else {
                setState({
                    ...state,
                    sum1: event.target.value * currency[`${state.name2}${state.name1}`],
                    sum2: event.target.value
                })
            }
        }
    }
    return(
        <div>
            <div>
                <label>
                    <input
                        onChange={handleChange}
                        type={'number'}
                        name={'sum1'}
                        value={state.sum1}
                        disabled={!state.name1 || !state.name2}
                    />
                </label>
                <select
                    name={'name1'}
                    onChange={handleChange}
                    value={state.name1}
                >
                    {['',...currencyList.filter((cur)=>{
                        return cur !== state.name2
                    })].map((currency1) =>(
                        <option
                            value={currency1}
                            key={currency1}
                        >
                            {currency1}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label>
                    <input
                        onChange={handleChange}
                        type={'number'}
                        name={'sum2'}
                        value={state.sum2}
                        disabled={!state.name2 || !state.name1 }
                    />
                </label>
                <select
                    name={'name2'}
                    onChange={handleChange}
                    value={state.name2}
                >
                    {['',...currencyList.filter((cur)=>{
                        return cur !== state.name1
                    })].map((currency2) => (
                        <option
                            value={currency2}
                            key={currency2}
                        >
                            {currency2}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}