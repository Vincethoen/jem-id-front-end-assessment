import React, { useState } from 'react';

type SliderProps = {
    min: number;
    max: number;
    initialMinValue: number;
    initialMaxValue: number;
    onChange: (min: number, max: number) => void;
    name: string;
}

const Slider: React.FC<SliderProps> = ({ initialMinValue, initialMaxValue, onChange, name }) => {
    const [minValue, setMinValue] = useState(initialMinValue);
    const [maxValue, setMaxValue] = useState(initialMaxValue);

    const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        if (value <= maxValue) {
            setMinValue(value);
            onChange(value, maxValue);
        }
    };

    const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        if (value >= minValue) {
            setMaxValue(value);
            onChange(minValue, value);
        }
    };

    return (
        <div className='slider-container'>
            {/* Displaying range */}
            <p>{name}</p>
            <div className='slider-input-container'>
                {/* Min Range Slider */}
                <label htmlFor={`${name}-minimum`}>Min {minValue}</label>
                <input
                    type="range"
                    id={`${name}-minimum`}
                    min={initialMinValue}
                    max={initialMaxValue}
                    value={minValue}
                    onChange={handleMinChange}
                />
            </div>
            <div className='slider-input-container'>
                {/* Max Range Slider */}
                <label htmlFor={`${name}-minimum`}>Max {maxValue}</label>
                <input
                    type="range"
                    id={`${name}-minimum`}
                    min={initialMinValue}
                    max={initialMaxValue}
                    value={maxValue}
                    onChange={handleMaxChange}
                />
            </div>

        </div>
    );
};

export default Slider;
