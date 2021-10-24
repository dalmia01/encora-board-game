type Buttonprops = {
    text: string;
    clickHandler: () => void;
    disabled?: boolean;
};

export const Button = (props: Buttonprops) => {
    const { text, clickHandler, disabled } = props;
    return (
        <button onClick={clickHandler} disabled={disabled}>
            {text}
        </button>
    );
};
