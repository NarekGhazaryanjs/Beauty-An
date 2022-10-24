const Textarea = (props) => {
    return (
        <textarea readOnly name={props.name} value={props.value} style={props.style} />
    )
}

export default Textarea