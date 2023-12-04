import React, { useState } from 'react';
import { Container, Row, Col, DropdownButton, Dropdown } from 'react-bootstrap';
import TranscriptionButton from '../src/components/TranscriptionButton';
import TranscriptionText from '../src/components/TranscriptionText';
import PatientChart from '../src/components/PatientChart';
import '../src/App.css';

function TranscriptionPage() {
    const [transcription, setTranscription] = useState('');
    const [patientDataList, setPatientDataList] = useState([]); 
    const [selectedPatient, setSelectedPatient] = useState(null); 

    const handleTranscriptionSubmit = async (transcript) => {
        try {
            const response = await fetch('https://semantic-med-e031886a95ed.herokuapp.com/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ transcription: transcript }),
            });
            const data = await response.json();

            // Parse the patientData string into an object
            if (data.patientData) {
                const patientDataObject = JSON.parse(data.patientData);
                console.log('Received patient data:', patientDataObject);

                // Add the new patient data to the list
                setPatientDataList(prevList => [...prevList, patientDataObject]);
            } else {
                console.error('No patientData found');
            }
        } catch (error) {
            console.error('Error sending transcription:', error);
        }
    };

    const selectPatientChart = (patientData) => {
        setSelectedPatient(patientData);
    };

    return (
        <Container fluid>
            <Row className="flex-nowrap">
                <Col md={6} className="transcription-section">
                    <TranscriptionText transcription={transcription} />
                    <TranscriptionButton
                        setTranscription={setTranscription}
                        onStartRecording={() => setTranscription('')} // Reset transcription on start
                        onStopRecording={handleTranscriptionSubmit}
                    />
                </Col>
                <Col md={6} className="chart-section">
                {selectedPatient && <PatientChart patientData={selectedPatient} />}
                <DropdownButton id="dropdown-patient-list" title="Select Patient">
                    {patientDataList.map((patient, index) => (
                        <Dropdown.Item key={index} onClick={() => selectPatientChart(patient)}>
                            {patient.name}
                        </Dropdown.Item>
                    ))}
                </DropdownButton>
            </Col>
            </Row>
        </Container>
    );
}

export default TranscriptionPage;