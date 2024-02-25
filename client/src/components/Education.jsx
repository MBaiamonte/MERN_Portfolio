import React from 'react';
import {Container, Row, Card} from 'react-bootstrap';

const Education = () => {
    return (
        <Container className='pt-5'>
            <Row>
                <h3>My Academic Journey</h3>
            </Row>
            <Row>
                <Card style={{'width': '80%'}}>
                    <Card.Body>
                    <Card.Img variant="top" src="../images/Coding_Dojo_Bootcamp_Banner.png" />
                        <Card.Title>University of Alaska Fairbanks</Card.Title>
                        <Card.Subtitle>Bachelors in Biology</Card.Subtitle>
                        <Card.Text>GPA</Card.Text>
                        <Card.Text>Course Description</Card.Text>
                        <Card.Text> Acomplishments</Card.Text>
                    </Card.Body>
                    {/* Quote Maybe */}
                </Card>
            </Row>
            <Row>
                <Card style={{'width': '80%'}}>
                    <Card.Body>
                    <Card.Img variant="top" src="../images/UAF_Banner.png" />
                        <Card.Title>University of Alaska Fairbanks</Card.Title>
                        <Card.Subtitle>Bachelors in Biology</Card.Subtitle>
                        <Card.Text>GPA</Card.Text>
                        <Card.Text>Course Description</Card.Text>
                        <Card.Text> Acomplishments</Card.Text>
                    </Card.Body>
                    {/* Quote Maybe */}
                </Card>
            </Row>
            <Row>
                <Card style={{'width': '80%'}}>
                    <Card.Body>
                    <Card.Img variant="top" src="../images/CU_Boulder_Banner.png" />
                        <Card.Title>University Colorado Boulder</Card.Title>
                        <Card.Subtitle>Studied Integrated Physiology </Card.Subtitle>
                        <Card.Text className='mt-2'>GPA: 3.3</Card.Text>
                        <Card.Text>Course Description</Card.Text>
                    </Card.Body>
                </Card>
            </Row>

        </Container>
    )
}

export default Education