import React, { useState } from 'react';

// converter function -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=
function TempConverter() {
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');

// Handler for converter -=-=-=-=-==-=-=-=-=-=-=-=-==-=-=-==-=-=
    const handleCelsiusChange = (value) => {
        const converted = (value * 9/5) + 32;
        setFahrenheit(converted || '');
    };

    return (
        <div>
            <label>
                Celsius:
                <input
                    type="number"
                    value={celsius}
                    onChange={(e) => setCelsius(e.target.value)}
                    onBlur={(e) => handleCelsiusChange(e.target.value)}
                    />

                    
            </label>
            <label>
                Fahrenheit:
                <input
                    type="number"
                    value={fahrenheit}
                    onChange={(e) => setFahrenheit(e.taget.value)}
                    onBlur={(e) => {
                        const converted = (e.taget.value -32) * 5/9;
                        setCelsius(converted || '');
                    }}
                />
                
            </label>
        </div>
    );
}

export default TempConverter;