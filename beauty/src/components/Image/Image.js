const Image = (props) => {
    return (
        <img height={props.height} width={props.width} src={props.src} className={props.className} alt={props.alt} />
    )
}

export default Image