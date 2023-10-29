// TranscriptionPage.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TranscriptionButton from '../src/components/TranscriptionButton';
import TranscriptionText from '../src/components/TranscriptionText';
import PatientChart from '../src/components/PatientChart';
import '../src/App.css';  

function TranscriptionPage() {
    return (
        <Container>
            <Row>
                <Col><TranscriptionButton /></Col>
                <Col><TranscriptionText /></Col>
                <Col><PatientChart /></Col>
            </Row>
        </Container>
    );
}

export default TranscriptionPage;
