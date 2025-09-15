🌸 SkinShots – AI-Powered Skincare Platform

An AI-driven skincare platform that analyzes user-uploaded skin images to detect concerns like acne, dark spots, or dark circles, and recommends personalized skincare products based on the results and user questionnaire responses.

---

⚡ Features

📷 Image Upload & Analysis – Detects common skin concerns using a trained AI/ML model (TensorFlow/Keras).

🧑‍⚕️ Personalized Recommendations – Suggests products after analyzing skin + questionnaire responses.

🌐 Full-Stack App – Flask backend + React (React-Bootstrap) frontend.

🔒 CORS Enabled – Seamless communication between backend and frontend.

🛠 Extensible – Easy to add new features like user authentication, history tracking, or product databases.

---

📂 Project Structure

SkinShots_AI_powered_skincare_platform/
│── backend/                # Flask backend (API + ML model)
│   ├── app.py              # Main Flask app
│   ├── model/              # Trained ML/TensorFlow models
│   └── requirements.txt    # Backend dependencies
│
│── frontend/               # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── App.js          # Main app logic
│   │   └── index.js        # Entry point
│   └── package.json        # Frontend dependencies
│
│── README.md               # Project documentation

---

⚙️ Installation & Setup

🔹 Backend (Flask + TensorFlow)
# Clone the repo
git clone https://github.com/ayushi-gajendra/SkinShots_AI_powered_skincare_platform.git
cd SkinShots_AI_powered_skincare_platform/backend

# Create virtual environment
python -m venv venv
source venv/bin/activate   # On Mac/Linux
venv\Scripts\activate      # On Windows

# Install dependencies
pip install -r requirements.txt

# Run Flask server
python app.py

Backend will run at: http://127.0.0.1:5000

🔹 Frontend (React + Bootstrap)
cd ../frontend

# Install dependencies
npm install

# Start development server
npm start

Frontend will run at: http://localhost:3000

---

🚀 Usage

Open the app in your browser.

Upload a skin image to detect concerns.

Answer skincare questions for better personalization.

Receive AI-powered analysis + product recommendations.

---

🧠 Tech Stack

- Frontend: React, React-Bootstrap

- Backend: Flask, Flask-CORS

- AI/ML: TensorFlow / Keras, NumPy

- Database: SQLite / PostgreSQL

---

📌 Future Improvements

Add user accounts to save history.

Improve model accuracy with larger datasets.

Deploy to Heroku / Vercel / AWS.

Integrate with e-commerce APIs for live product recommendations.

📜 License

This project is licensed under the MIT License – free to use and modify.
