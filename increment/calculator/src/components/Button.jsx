import React from "react";

import { ACTIONS } from "../libs/const";

export default function Button(props) {
    const { valueOne, valueTwo, setResult, action, text } = props;
    const increment = () => {
        const valueOneInt = parseInt(valueOne.current.value);
        const valueTwoInt = parseInt(valueTwo.current.value);
        setResult(valueOneInt + valueTwoInt);
    };

    const decrement = () => {
        const valueOneInt = parseInt(valueOne.current.value);
        const valueTwoInt = parseInt(valueTwo.current.value);
        setResult(valueOneInt - valueTwoInt);
    };

    const multiply = () => {
        const valueOneInt = parseInt(valueOne.current.value);
        const valueTwoInt = parseInt(valueTwo.current.value);
        setResult(valueOneInt * valueTwoInt);
    };

    return (
        <button className="Button"
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