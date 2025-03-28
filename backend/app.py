from flask import Flask, request, jsonify
from flask_cors import CORS
from openai import OpenAI
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Initialize Flask app
app = Flask(__name__)

# Enable CORS (Allow all origins during development)
CORS(app, resources={r"/*": {"origins": "*"}})

# Initialize OpenAI Client
client = OpenAI(
    base_url="https://openrouter.ai/api/v1",
    api_key=os.getenv("OPENROUTER_API_KEY"),
)

def chat_with_bot(user_message):
    try:
        completion = client.chat.completions.create(
            extra_headers={
                "HTTP-Referer": "http://localhost:3000",  # Adjusted for frontend dev (React)
                "X-Title": "R38 Assistant",
            },
            model="openai/gpt-3.5-turbo",
            messages=[{"role": "user", "content": user_message}]
        )

        if not completion.choices or len(completion.choices) == 0:
            return "Error: Empty response from API"
            
        return completion.choices[0].message.content
        
    except Exception as e:
        print(f"API Error: {str(e)}")
        if hasattr(e, 'response'):
            print(f"API Response: {e.response.text}")
        return f"Error: {str(e)}"

@app.route('/chat', methods=['POST'])
def chat():
    user_message = request.json.get('message')
    if not user_message:
        return jsonify({"error": "No message provided"}), 400
    
    bot_response = chat_with_bot(user_message)
    return jsonify({"response": bot_response})

if __name__ == '__main__':
    # Enable debug mode for hot reloading and detailed error logs
    app.run(host='127.0.0.1', port=5000, debug=True)










# from flask import Flask, request, jsonify
# from flask_cors import CORS
# from openai import OpenAI
# import os
# from dotenv import load_dotenv
# from pymongo import MongoClient
# from datetime import datetime

# # Load environment variables
# load_dotenv()

# # Initialize Flask app
# app = Flask(__name__)
# CORS(app, resources={r"/*": {"origins": "*"}})

# # Initialize MongoDB Connection
# mongo_client = MongoClient(os.getenv("MONGO_URI"))  # Example: "mongodb://localhost:27017"
# db = mongo_client["chatbotDB"]  # Database name
# chat_collection = db["chats"]   # Collection name

# # Initialize OpenAI Client
# client = OpenAI(
#     base_url="https://openrouter.ai/api/v1",
#     api_key=os.getenv("OPENROUTER_API_KEY"),
# )

# def chat_with_bot(user_message):
#     try:
#         completion = client.chat.completions.create(
#             extra_headers={
#                 "HTTP-Referer": "http://localhost:3000",
#                 "X-Title": "R38 Assistant",
#             },
#             model="openai/gpt-3.5-turbo",
#             messages=[{"role": "user", "content": user_message}]
#         )

#         if not completion.choices or len(completion.choices) == 0:
#             return "Error: Empty response from API"
            
#         return completion.choices[0].message.content
        
#     except Exception as e:
#         print(f"API Error: {str(e)}")
#         if hasattr(e, 'response'):
#             print(f"API Response: {e.response.text}")
#         return f"Error: {str(e)}"

# @app.route('/chat', methods=['POST'])
# def chat():
#     user_message = request.json.get('message')
#     if not user_message:
#         return jsonify({"error": "No message provided"}), 400
    
#     bot_response = chat_with_bot(user_message)

#     # Save chat history to MongoDB
#     chat_document = {
#         "user_message": user_message,
#         "bot_response": bot_response,
#         "timestamp": datetime.utcnow()
#     }
#     chat_collection.insert_one(chat_document)

#     return jsonify({"response": bot_response})

# if __name__ == '__main__':
#     app.run(host='127.0.0.1', port=5001, debug=True)

