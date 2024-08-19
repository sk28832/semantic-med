# SemanticMed: Voice-Activated Notation Service for Healthcare Providers


<img width="1471" alt="Screenshot 2023-12-04 at 12 45 53 AM" src="https://github.com/sk28832/semantic-med/assets/33585911/5fc5ead9-3b65-400f-8c10-9044ed22c157">


## Abstract
SemanticMed represents a breakthrough in healthcare IT, offering a Siri-like voice-activated notation service designed to alleviate the administrative burden on healthcare providers. This innovative software aims to streamline data entry processes, thus optimizing the time spent on patient care.

## Background
With the advent of digitization in healthcare, challenges such as decreased patient-provider interaction and increased administrative load have become prominent. SemanticMed seeks to address these issues by introducing an intuitive and cost-effective voice recognition tool that integrates seamlessly with existing Electronic Health Records (EHRs).

## Problem Statement
SemanticMed tackles two primary challenges in modern healthcare settings:
- Reduced patient-provider interaction due to time spent behind computer screens for data entry.
- Excessive administrative burden placed on providers, leading to potential errors and burnout.

## Solution
Utilizing React's speech-to-text capabilities coupled with OpenAI's GPT for intelligent data processing, SemanticMed enables the recording of essential patient information through simple voice commands. The result is an up-to-date patient chart that reflects the latest vitals, symptoms, lab results, and other pertinent health data.

## Implementation
- **Frontend**: Developed using React, deployed on Vercel for seamless user interaction.
- **Backend**: Robust backend services running on Heroku, responsible for processing and converting audio data into structured text for EHR updates.

## Outcome and Further Work
SemanticMed has successfully demonstrated the capability to handle audio inputs, transcribe them, and convert them into meaningful updates to patient charts. Future iterations aim to integrate FHIR standards with platforms like OpenEMR to further enhance the scope and functionality.

## Contact
- Shreyank Kadadi - shreyankkadadi@gmail.com
