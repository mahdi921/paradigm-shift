# Paradigm Shift - AI Services Website

A modern website showcasing AI services for Iranian businesses, built with Django + React + Docker.

## 🚀 Quick Start

```bash
# Start all services
docker compose up --build

# Access the website
# Frontend: http://localhost:5173 (dev server)
# Via Nginx: http://localhost:3000
# Backend API: http://localhost:8000/api/
```

## 📁 Project Structure

```
paradigm-shift/
├── backend/                 # Django REST API
│   ├── api/                 # API app (categories, businesses, contact)
│   ├── config/              # Django settings
│   ├── data/                # JSON storage (contacts.json)
│   └── Dockerfile
├── frontend/                # React + Vite
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── pages/           # Page components
│   │   └── index.css        # Design system
│   └── Dockerfile
├── nginx/                   # Reverse proxy
└── docker-compose.yml
```

## 🎨 Features

- **RTL Persian (Farsi)** interface with Vazirmatn font
- **Dark theme** with purple/blue tech gradients
- **Glassmorphism** design effects
- **Mobile-first** responsive layout
- **43 business categories** with dedicated pages
- **Plyr video** placeholder in Hero section
- **NotebookLM** placeholder sections
- **Contact form** → saves to JSON file

## 📡 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/categories/` | GET | List all categories |
| `/api/categories/{id}/` | GET | Get category details |
| `/api/businesses/` | GET | List all businesses |
| `/api/businesses/{id}/` | GET | Get business details |
| `/api/contact/` | POST | Submit contact form |

## 🛠️ Development

```bash
# Backend only
cd backend && pip install -r requirements.txt
python manage.py runserver

# Frontend only
cd frontend && npm install
npm run dev
```

## 📝 Contact Form

Form submissions are saved to `backend/data/contacts.json`:

```json
[
  {
    "id": "20241228121500123456",
    "name": "علی محمدی",
    "business_type": "خدمات فنی و ساختمانی",
    "problem": "نیاز به اتوماسیون",
    "contact": "09121234567",
    "submitted_at": "2024-12-28T12:15:00.123456"
  }
]
```

## 🎬 Adding Video

Replace the video source in `HeroSection.jsx`:

```jsx
<source src="/video/intro.mp4" type="video/mp4" />
```

## 📒 NotebookLM Integration

The `NotebookPlaceholder` component is ready for embedding NotebookLM content. Options:

1. **iframe embed**: Replace the placeholder with NotebookLM iframe
2. **External link**: Use the button to link to NotebookLM presentation
