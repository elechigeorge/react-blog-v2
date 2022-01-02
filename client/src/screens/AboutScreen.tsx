import { Container, Button } from "react-bootstrap"


const AboutScreen = () => {
    return (
        <Container>
            <h3 className="lead mt-5">ABOUT THE RUGIPOLY STUDENT BLOGGING SYSTEM</h3>
            <hr />
            <br />
            <p className="lead">
                this is the about section of this software !
            </p>
            <Button className="btn-dark btn-lg"><i className="fas fa-door-closed"></i> Explore this software </Button>
        </Container>
    )
}

export default AboutScreen
