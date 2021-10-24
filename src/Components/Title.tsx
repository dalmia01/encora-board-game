type TitleProps = {
    title : string
}

export const Title = (props:TitleProps) => {
    const {title} = props;
    return (
        <h1>{title}</h1>
    )
}