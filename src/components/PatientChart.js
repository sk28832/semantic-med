// PatientChart.js
import React from 'react';
import { Card } from 'react-bootstrap';

function PatientChart({ patientData }) {

    
    if (!patientData) {
        return <div>No patient data available.</div>;
    }

    return (
        <Card className="patient-chart">
            <Card.Header>Patient Chart</Card.Header>
            <Card.Body>
                {patientData.name && <p><strong>Name:</strong> {patientData.name}</p>}
                {patientData.age && <p><strong>Age:</strong> {patientData.age}</p>}
                {patientData.gender && <p><strong>Gender:</strong> {patientData.gender}</p>}
                {patientData.dob && <p><strong>Date of Birth:</strong> {patientData.dob}</p>}
                {patientData.currentMedications && <p><strong>Current Medications:</strong> {patientData.currentMedications}</p>}
                {patientData.allergies && <p><strong>Allergies:</strong> {patientData.allergies}</p>}

            </Card.Body>
        </Card>
    );
}

export default PatientChart;
