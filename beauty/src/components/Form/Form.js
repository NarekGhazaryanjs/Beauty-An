const Form = (props) => {
    return (
        <form
          ref={props.formref} 
          onSubmit={props.onSubmit}
          className={props.className}
        >
            {props.children}
        </form>
    )
}

export default Form