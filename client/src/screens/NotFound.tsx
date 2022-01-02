import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <Container>
            <h1 className="lead display-1 mt-5">Are you lost ? </h1>
            <p className="lead">Find your way back home <Link to="/">Home</Link></p>
        </Container>
    )
}

export default NotFound;
