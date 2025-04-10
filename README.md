# Svara Bekasi — The Voice of Bekasi 🏙️💬  
![Build](https://img.shields.io/badge/build-passing-brightgreen?style=flat-square)  
![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)  
![Ollama](https://img.shields.io/badge/ollama-LLaMA2-success?style=flat-square)  
![Made with NestJS](https://img.shields.io/badge/nestjs-%E2%9D%A4-red?style=flat-square)  
![Next.js](https://img.shields.io/badge/Next.js-frontend-black?style=flat-square)  
![Typescript](https://img.shields.io/badge/TypeScript-strong-blue?style=flat-square)

---

**Empowering public access with intelligent, local-language support.**  
Svara Bekasi is an AI-powered chatbot that helps citizens get answers to questions about public services in **Bahasa Indonesia**, powered by **Ollama**, **NestJS**, and **Next.js**.

---

## 🌟 What Can Svara Bekasi Do?

| 🏛️ Feature               | 📌 Description                                                                 |
|--------------------------|---------------------------------------------------------------------------------|
| 🧾 Resident Services      | Info on ID cards, family certs, permits, and official procedures.              |
| 🏫 Education & Healthcare | Locate schools, clinics, public services, and general info.                    |
| 💳 Taxes & Payments       | Get help with paying local taxes and accessing financial support.              |
| 🗺️ Navigation & Contact   | Find government office addresses, hours, contact info, and more.               |

---

## 🧠 Tech Stack

| Layer       | Technology         |
|-------------|--------------------|
| **Frontend**| Next.js + TypeScript |
| **Backend** | NestJS + TypeScript |
| **AI Engine**| Ollama (LLaMA2 / compatible LLM) |
| **HTTP Client**| Axios |
| **Styling** | Tailwind CSS |
| **Linting** | ESLint with TypeScript support |

---

## 📦 Project Structure

```bash
apps/
├── client/          # Next.js frontend
└── server/          # NestJS backend (chat controller/service)
```

## 🚀 Getting Started
1. Clone the Repository
```bash
git clone https://github.com/your-username/svara-bekasi.git
cd svarabekasi
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Install & Run Ollama

```bash
Install Ollama from: https://ollama.com/download

Once installed, pull and start the LLM model:
```

```bash
ollama run llama2
This will start Ollama on default: http://localhost:11434
```

### 4. Run the Backend (NestJS)

```bash
cd apps/server
npm start:dev
The backend NestJS API will be live at http://localhost:3000.
```

### 5. Run the Frontend (Next.js)

```bash
cd apps/client
npm run dev
Access the UI via http://localhost:3001 (or whatever port is configured).
```

## 🧪 Testing the API
You can test the backend directly with curl:

```bash
curl -X POST http://localhost:3000/chat \
  -H "Content-Type: application/json" \
  -d '{"prompt": "Apa itu KTP?"}'
This should return a response from the local LLM through Ollama.
```

## 🛡️ Security Notes

The current version does not implement rate limiting or authentication.

Consider adding guard mechanisms in production.


