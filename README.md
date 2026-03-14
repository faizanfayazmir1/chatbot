# AI Chatbot Frontend with LLM Backend

This project is a simple chatbot frontend deployed on Vercel that interacts with a language model backend. The chatbot classifies different types of user inputs and responds accordingly while also dynamically coloring its responses based on predefined rules.

The chatbot fulfills the following functional requirements:

1. Task + Deadline Detection
If the user enters a task with a deadline (for example "finish report in 3 hours"), the chatbot colors the response depending on the time remaining.

Color Logic:
- Blue → 24 hours or more remaining
- Yellow → around 12 hours remaining
- Orange → less than 2 hours remaining

2. Random Number Handling
If the user enters a random number, the chatbot extracts the last two digits and maps them to grayscale.

Color Logic:
- 00 → White
- 50 → Grey
- 100 → Black

3. Tone Detection
If the message is neither a number nor a deadline, the chatbot analyzes the emotional tone of the message using a language model.

Tone Colors:
- Very Sad → Dark Red
- Sad → Light Red
- Neutral → Amber/Brown
- Happy → Green
- Very Happy → Dark Green

4. Political Leader Persona
All chatbot responses are generated as if they are spoken by the Prime Minister of India (Narendra Modi).

Each response includes:
- A Hindi message
- An English translation

Example Response:

Hindi:
"मेरे प्यारे मित्रों, कठिन समय जीवन का हिस्सा है..."

English:
"My dear friends, difficult times are part of life..."

5. Authentication Guardrail
The chatbot only accepts users whose email ends with:

@petasight.com

If the email does not match this domain, the chatbot denies access.

6. Accessibility (WCAG 2.0)
The interface follows accessibility guidelines including:
- High contrast colors
- Keyboard accessible inputs and buttons
- Visible focus outlines
- Semantic labels for inputs

Project Structure

chatbot/
│
├ index.html
├ style.css
├ script.js
├ vercel.json
│
└ api
    └ chat.js

File Descriptions

index.html  
Defines the main chatbot interface including email input, message input, and chat display.

style.css  
Provides accessible styling with focus indicators and readable contrast ratios.

script.js  
Handles frontend logic including:
- input classification
- color logic
- authentication check
- calling the backend API
- rendering chat messages

api/chat.js  
Serverless backend function deployed through Vercel that connects to a language model using the Groq API.

vercel.json  
Configures Vercel serverless runtime.

Language Model

This chatbot connects to the Groq LLM API and uses the following model:

llama-3.1-8b-instant

The model performs:
- tone classification
- persona-based response generation
- translation to English

Deployment

The project is deployed using Vercel.

Deployment Steps

1. Clone or download the repository.

2. Install dependencies (not required for this project since it uses serverless functions).

3. Create a Groq API key.

Groq Console:
https://console.groq.com

4. In the Vercel dashboard add an environment variable:

GROQ_API_KEY = your_api_key

5. Deploy the project.

Once deployed, the chatbot will be available through a public URL such as:

https://chatbot-yourname.vercel.app

Tools Used

Development Tools
- Visual Studio Code
- GitHub for version control

AI / Backend Tools
- Groq LLM API
- Llama 3.1 8B model

Deployment
- Vercel serverless functions

Design Assistance
- ChatGPT used for ideation, architecture planning, and prompt engineering.

Thinking Process

The solution was designed by first breaking the requirements into three categories of user input:

1. Deadline-based tasks  
2. Numeric input  
3. Free-form conversational messages

The frontend performs lightweight classification to determine which rule should apply.

For conversational inputs, the message is sent to the backend where the language model performs tone detection and generates a response using a political leader persona.

Responses are then rendered in the UI and color-coded according to the detected tone or rule category.

A simple domain-based authentication guard was added to ensure that only users with the required email domain can access the chatbot.

This architecture keeps the frontend lightweight while delegating language understanding and response generation to the LLM backend.

Author

Faizan Fayaz Mir
