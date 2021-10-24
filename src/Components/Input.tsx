import React from "react";

type InputProps = {
    value: string | number;
    changeValue: (event : React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
};

export const Input = (props: InputProps) => {
    const { value, changeValue, placeholder } = props;
    return (
        <input
            type="text"
            value={value}
            onChange={changeValue}
            placeholder={placeholder}
        />
    );
};
