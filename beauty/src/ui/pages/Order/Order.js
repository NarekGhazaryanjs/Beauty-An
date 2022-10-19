import Card from "../../Card/Card"

const Order = (props) => {
    return (
        <Card> 
            {props.children}
        </Card>
    )
}

export default Order