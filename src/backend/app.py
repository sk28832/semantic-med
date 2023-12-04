from flask import Flask, request, jsonify
from flask_cors import CORS
import openai
from dotenv import load_dotenv
import os
import traceback

app = Flask(__name__)
CORS(app)

load_dotenv()  
openai.api_key = os.getenv("OPENAI_API_KEY")

@app.route("/process_transcription", methods=["POST"])
def process_transcription():
    transcription = request.json.get("transcription", "")

    system_message = '''You are a helpful assistant designed to output JSON. Based on the provided transcription
                      fill out the patient's information in a JSON format with the following fields:
                      Name, Age, Gender, Date of Birth, Current Medications, and Allergies.
                      The corresponding keys in the json should be 'name','age','gender','dob','currentMedications','allergies'
                      If the transcription does not contain specific information for a field, leave that field blank.'''

    try:
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo-1106",
            response_format={"type": "json_object"},
            messages=[
                {"role": "system", "content": system_message},
                {"role": "user", "content": transcription}
            ]
        )
        patient_info = response.choices[0].message['content']

        return jsonify({"patientData": patient_info}), 200
    except Exception as e:
        print("An error occurred:", e)
        traceback.print_exc()  
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True)
