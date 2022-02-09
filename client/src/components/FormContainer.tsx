import React, {FC} from 'react';
import { Container, Row, Col } from 'react-bootstrap'


interface FormContainer {
    children?: any
}

const FormContainer: FC<FormContainer> = ({ children }) => {
    return (
        <Container>
            <Row className='justify-content-md-center'>
                <Col xs={12} md={6}>
                    {children}
                </Col>
            </Row>
        </Container>
    )
}

export default FormContainer;