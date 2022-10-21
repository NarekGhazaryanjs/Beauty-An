const Input = (props) => {
    return (
        <input 
           className={props.className}
           onChange={props.onChange}
           ref={props.inputRef}
           placeholder={props.placeholder}
           type={props.type || 'text'}
        />
    )
}

export default Input