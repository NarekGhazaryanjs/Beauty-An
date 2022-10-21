const Card = (props) => {
    return (
        <section style={props.style} className={props.className}>
          {props.children}
        </section>
    )
}

export default Card