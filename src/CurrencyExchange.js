import React, { useEffect, useState } from 'react';

const CurrencyExchange = ({ baseCurrency }) => {
    const [rates, setRates] = useState(null);

    useEffect(() => {
        fetch(`https://api.exchangerate-api.com/v4/latest/${"USD"}?apikey=${process.env.REACT_APP_CURRENCY_API_KEY}`)
            .then((response) => response.json())
            .then((data) => setRates(data.rates));
    }, [baseCurrency]);

    return (
        <div>
            {rates ? (
                <div>
                    <p>1 {baseCurrency} = {rates['EUR']} EUR</p>
                    <p>1 {baseCurrency} = {rates['USD']} USD</p>
                </div>
            ) : (
                <p>Loading exchange rates...</p>
            )}
        </div>
    );
};

export default CurrencyExchange;
