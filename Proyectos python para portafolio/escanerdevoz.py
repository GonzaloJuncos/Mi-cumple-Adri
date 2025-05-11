import speech_recognition as sr
import webbrowser
import pyttsx3
import os



recognizer = sr.Recognizer()
engine = pyttsx3.init()

def talk():
    mic = sr.Microphone()
    with mic as source:
        print("Escuchando...")
        audio = recognizer.listen(source)

    try:
        text = recognizer.recognize_google(audio, language='es-ES')
      
        print(f"Has dicho: {text}")
        return text.lower()
    except sr.UnknownValueError:
        print("Lo siento, no entendí el audio.")
        return ""
    except sr.RequestError as e:
        print(f"Error de solicitud a Google: {e}")
        return ""

if __name__ == "__main__":
    text = talk()
    if 'amazon' in text:
        engine.say("¿Qué quieres comprar en Amazon?")
        engine.runAndWait()
        search_term = talk()
        webbrowser.open(f'https://www.amazon.es/s?k={search_term}')

