import Card from "../../Card/Card"

const Home = (props) => {
    return (
        <Card> 
            {props.children}
        </Card>
    )
}

export default Home