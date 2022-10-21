const Select = (props) => {
    return (
        <select value={props.value} defaultValue={props.defaultValue} onChange={props.onChange}  className={props.className}>
            {props.children}
        </select>
    )
}

export default Select