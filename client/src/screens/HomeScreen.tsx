import React, { useState } from 'react';
import { Carousel, Row, Col, Container, Button, Card } from "react-bootstrap";

import One from '../images/agric.jpeg'
import Two from '../images/ict.jpeg'
import Three from '../images/registry.jpeg'
import Four from '../images/library.jpeg'
import Five from '../images/tlecturet.jpeg';
import Six from '../images/mili.jpeg';
import Seven from '../images/fm.jpeg';
import Eight from '../images/biss.jpeg';


const HomeScreen = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: any, e: any) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="mb-5">
            <Carousel activeIndex={index} onSelect={handleSelect} fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={One}
                        alt="First slide"
                        style={{ height: '85vh' }}
                    />
                    <Carousel.Caption>
                        <h3 className='text-success bg-dark p-2'>Agric Building</h3>
                        <p className='bg-success p-2'>Faculty of Argicultural Tech. Building</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Two}
                        alt="Second slide"
                        style={{ height: '85vh' }}
                    />

                    <Carousel.Caption>
                        <h3 className='text-success bg-dark p-2'>ICT Building B</h3>
                        <p className='bg-success p-2'>The Information Communication Technology Building</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Three}
                        alt="Third slide"
                        style={{ height: '85vh' }}
                    />

                    <Carousel.Caption>
                        <h3 className='text-success bg-dark p-2'>The Office of the Registrar</h3>
                        <p className='bg-success p-2'>
                            The Registrar office building
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Four}
                        alt="Fourth slide"
                        style={{ height: '85vh' }}
                    />

                    <Carousel.Caption>
                        <h3 className="text-success bg-dark p-2">The Library</h3>
                        <p className='bg-success p-2'>
                            The Library Building 
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Five}
                        alt="Fourth slide"
                        style={{ height: '85vh' }}
                    />

                    <Carousel.Caption>
                        <h3 className="text-success bg-dark p-2">Twin Lecture Theater</h3>
                        <p className='bg-success p-2'>
                            This facility is to provide space of lecture for larger size departments and combined courses 
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Six}
                        alt="Fourth slide"
                        style={{ height: '85vh' }}
                    />

                    <Carousel.Caption>
                        <h3 className="text-success bg-dark p-2">The Millennium Lecture Theatre </h3>
                        <p className='bg-success p-2'>
                        Millennium Lecture Theatre
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Seven}
                        alt="Seventh slide"
                        style={{ height: '85vh' }}
                    />

                    <Carousel.Caption>
                        <h3 className="text-success bg-dark p-2">The FM Building</h3>
                        <p className='bg-success p-2'>
                            Rugipo 103.3 FM Building 
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Eight}
                        alt="Seventh slide"
                        style={{ height: '85vh' }}
                    />

                    <Carousel.Caption>
                        <h3 className="text-success bg-dark p-2">Faculty of Business Studies</h3>
                        <p className='bg-success p-2'>
                            Faculty of Business Studies
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div className='bg-dark mt-5 p-3'>
                <Container>
                    <Row>
                        <Col>
                            <h2 className=" lead mt-3 bold text-bold text-success">WELCOME TO RUFUS GIWA POLYTECHNIC STUDENT BLOGGING SYSTEM</h2>
                        </Col>
                        <Col>
                            <h3 className='lead mt-3 pb-3 text-light'>WE HEREBY INVITE YOU TO THE RUGIPO STUDENT'S BLOGGING NETWORK, PLEASE ENSURE TO CHECK IN DAILY FOR NEWS UPDATES ON THE HAPPENINGS AROUND THE POLYTECHNIC, ALSO YOU ARE INVITED TO SHARE GENUINE UPDATES </h3>
                            <div className="d-grid ">
                                <Button className="btn-sm btn-success" href="about">Learn more</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>




            <div className="mt-5">

                <Container>
                    <h4 className="text-success">Some of our featured articles</h4>
                    <hr />

                    <Row>
                        <Col>
                            <Card style={{ width: '18rem', height: '27rem' }}>
                                <Card.Img variant="top" src={Four} />
                                <Card.Body>
                                    <Card.Title>how to get settle on your first visit at school: freshers guide to Polytechnic Library </Card.Title>
                                    <Card.Text>
                                        written by * <span className='text-success'>Madueke Godswill</span>
                                    </Card.Text>
                                    <div className='d-grid'>
                                        <Button variant="success" href="login">Read Now</Button>
                                    </div>

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                        <Card style={{ width: '18rem', height: '27rem' }}>
                                <Card.Img variant="top" src={Two}  />
                                <Card.Body>
                                    <Card.Title>how to find best tutorial classes on campus: freshers guide</Card.Title>
                                    <Card.Text>
                                        written by * <span className='text-success'>Gift Honeybell</span>
                                    </Card.Text>
                                    <div className='d-grid'>
                                        <Button variant="success" href="login">Read Now</Button>
                                    </div>

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                        <Card style={{ width: '18rem', height: '27rem' }}>
                                <Card.Img variant="top" src={Four} />
                                <Card.Body>
                                    <Card.Title>how to find housing and accomodation on campus</Card.Title>
                                    <Card.Text>
                                        written by * <span className='text-success'>Tony Otonne</span>
                                    </Card.Text>
                                    <div className='d-grid'>
                                        <Button variant="success" href="login">Read Now</Button>
                                    </div>

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                        <Card style={{ width: '18rem', height: '27rem' }}>
                                <Card.Img variant="top" src={One} />
                                <Card.Body>
                                    <Card.Title>cs50 lecture: freshers guide to com. science</Card.Title>
                                    <Card.Text>
                                        written by * <span className='text-success'>Godspower Ukaukwu</span>
                                    </Card.Text>
                                    <div className='d-grid'>
                                        <Button variant="success" href="login">Read Now</Button>
                                    </div>

                                </Card.Body>
                            </Card>
                        </Col>
                      
                    </Row>
                </Container>
            </div>


            <div className='mt-5 mb-5 bg-dark p-5'>
                <Container>
                    <div className="text-center">
                        <p className='lead text-light'>YOU TOO CAN START WRITING FOR THE POLYTECHNICS, TODAY !</p>
                        <Button className="btn-success " href="login">Start Writing Today</Button>
                    </div>
                </Container>
            </div>


            <div className="mt-3">

            </div>
        </div>
    );
}

export default HomeScreen
