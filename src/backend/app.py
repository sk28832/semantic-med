from flask import Flask, request, jsonify
from google.cloud import speech_v1p1beta1 as speech
import os

os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = 'semanticmed-a8f84dbf0ee3.json'
client = speech.SpeechClient()

app = Flask(__name__)

@app.route('/transcribe', methods=['POST'])
def transcribe_audio():
    audio_file = request.files['file']
    audio = speech.RecognitionAudio(content=audio_file.read())
    config = speech.RecognitionConfig(
        encoding=speech.RecognitionConfig.AudioEncoding.LINEAR16,
        sample_rate_hertz=16000,
        language_code='en-US',
    )

    response = client.recognize(config=config, audio=audio)

    # Collecting the transcription results
    for result in response.results:
        transcription = result.alternatives[0].transcript

    return jsonify({'transcription': transcription})

if __name__ == '__main__':
    app.run(debug=True)
