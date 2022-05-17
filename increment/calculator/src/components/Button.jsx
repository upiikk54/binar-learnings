import React from "react";

import { ACTIONS } from "../libs/const";

export default function Button(props) {
    const {valueOne, valueTwo, setResult, action, text} = props;

    const increment = () => {
        setResult(Number(valueOne) + Number(valueTwo));
    };

    const decrement = () => {
        setResult(Number(valueOne) - Number(valueTwo));
    };

    const multiply = () => {
        setResult(Number(valueOne) * Number(valueTwo));
    };

    return (
        <button
            onClick={() => {
                if (action === ACTIONS.INCREMENT) return increment();
                else if (action === ACTIONS.DECREMENT) return decrement();
                else if (action === ACTIONS.MULTIPLY) return multiply();
            }}
        >
            {text}
        </button>
    );
}