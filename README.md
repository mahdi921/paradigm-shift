<div align="center">

# 🧠 Paradigm Shift

### هوش مصنوعی برای کسب‌وکارهای ایرانی | AI for Iranian Businesses

[![Django](https://img.shields.io/badge/Django-5.0-green?style=flat-square&logo=django)](https://djangoproject.com)
[![React](https://img.shields.io/badge/React-18.3-blue?style=flat-square&logo=react)](https://react.dev)
[![Docker](https://img.shields.io/badge/Docker-Alpine-2496ED?style=flat-square&logo=docker)](https://docker.com)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)

**[🇮🇷 فارسی](#-نسخه-فارسی) | [🇬🇧 English](#-english-version)**

</div>

---

<details open>
<summary><h2>🇮🇷 نسخه فارسی</h2></summary>

### 👋 سلام!

این پروژه یه وب‌سایت مدرن و حرفه‌ای برای معرفی خدمات هوش مصنوعی به کسب‌وکارهای ایرانیه. ایده اصلی اینه که AI رو از یه چیز پیچیده و ترسناک، تبدیل کنیم به یه ابزار ساده و قابل فهم برای همه.

### 🎯 هدف پروژه

خیلی از صاحبان کسب‌وکار ایرانی هنوز نمی‌دونن هوش مصنوعی چطور می‌تونه بهشون کمک کنه. این سایت با زبان ساده و بدون اصطلاحات فنی، نشون میده که:

- ✅ AI چه مشکلاتی رو حل می‌کنه
- ✅ هر صنف چه راه‌حل‌هایی داره
- ✅ چطور می‌تونن شروع کنن

### 🏗️ معماری پروژه

```
┌─────────────────────────────────────────────────────┐
│                    Nginx (Port 3000)                 │
│                   Reverse Proxy                      │
└───────────────┬─────────────────────┬───────────────┘
                │                     │
    ┌───────────▼───────────┐ ┌───────▼───────────┐
    │   React Frontend      │ │   Django Backend  │
    │   (Port 5173)         │ │   (Port 8000)     │
    │   - RTL فارسی         │ │   - REST API      │
    │   - Dark Theme        │ │   - 43 کسب‌وکار   │
    │   - Plyr Video        │ │   - JSON Storage  │
    └───────────────────────┘ └───────────────────┘
```

### 📦 چی ساختیم؟

| بخش | توضیحات |
|-----|---------|
| **صفحه اصلی** | Hero با ویدیو، مشکلات رایج، راه‌حل‌های AI، کارت کسب‌وکارها |
| **صفحات اختصاصی** | ۴۳ صفحه برای انواع کسب‌وکار با مشکلات و راه‌حل‌های خاص هر صنف |
| **فرم تماس** | ثبت اطلاعات مشتری → ذخیره در فایل JSON |
| **NotebookLM** | جایگاه خالی برای embed کردن پرزنتیشن‌ها |

### 🎨 دسته‌بندی کسب‌وکارها

| دسته | تعداد | مثال |
|------|-------|------|
| 🔧 خدمات فنی و ساختمانی | ۸ | نقاش، لوله‌کش، برقکار |
| 💇 خدمات شخصی | ۵ | آرایشگاه، خیاطی، باشگاه |
| 🛒 خرده‌فروشی | ۱۰ | سوپرمارکت، نانوایی، طلافروشی |
| 🚗 خدمات خودرو | ۸ | مکانیکی، صافکاری، کارواش |
| 💼 واسطه‌گری | ۴ | مشاور املاک، تریدر |
| 🛠️ تعمیرات | ۴ | لوازم خانگی، موبایل |
| 🎨 صنایع دستی | ۴ | قالی‌بافی، سفالگری |

### 🚀 اجرای پروژه

```bash
# کلون کردن
git clone https://github.com/your-username/paradigm-shift.git
cd paradigm-shift

# اجرا با داکر (پیشنهادی)
docker compose up --build

# یا اجرای دستی
# ترمینال ۱ - بک‌اند
cd backend && pip install -r requirements.txt
python manage.py migrate && python manage.py runserver

# ترمینال ۲ - فرانت‌اند
cd frontend && npm install && npm run dev
```

**آدرس‌ها:**
- 🌐 سایت: http://localhost:3000
- 🔧 API: http://localhost:8000/api/

### 📁 ساختار فولدرها

```
paradigm-shift/
├── backend/                 # جنگو
│   ├── api/
│   │   ├── data.py         # ۴۳ کسب‌وکار با مشکلات و راه‌حل‌ها
│   │   ├── views.py        # API endpoints
│   │   └── urls.py
│   ├── config/             # تنظیمات جنگو
│   └── data/contacts.json  # اطلاعات فرم تماس
├── frontend/               # ری‌اکت + وایت
│   ├── src/
│   │   ├── components/     # کامپوننت‌های قابل استفاده مجدد
│   │   ├── pages/          # صفحات اصلی
│   │   └── index.css       # سیستم طراحی (CSS Variables)
│   └── package.json
├── nginx/                  # پراکسی معکوس
└── docker-compose.yml
```

### ✨ ویژگی‌های طراحی

- � **تم تاریک** با گرادیان بنفش/آبی
- 📱 **موبایل‌فرست** و ریسپانسیو
- ✨ **Glassmorphism** و افکت‌های مدرن
- 🔤 **فونت وزیر‌متن** برای خوانایی بهتر
- ➡️ **RTL** کامل برای فارسی

</details>

---

<details>
<summary><h2>🇬🇧 English Version</h2></summary>

### 👋 Hey there!

This is a modern website showcasing AI services for Iranian businesses. The core idea? Making AI accessible and understandable for everyone, not just tech folks.

### 🎯 The Problem We're Solving

Many Iranian business owners don't realize how AI can help them. They hear "artificial intelligence" and think it's only for big tech companies. This website changes that by showing:

- ✅ Real problems AI solves
- ✅ Specific solutions for each industry
- ✅ How to get started

### 🏗️ Architecture

```
┌─────────────────────────────────────────────────────┐
│                    Nginx (Port 3000)                 │
│                   Reverse Proxy                      │
└───────────────┬─────────────────────┬───────────────┘
                │                     │
    ┌───────────▼───────────┐ ┌───────▼───────────┐
    │   React Frontend      │ │   Django Backend  │
    │   (Port 5173)         │ │   (Port 8000)     │
    │   - RTL Persian       │ │   - REST API      │
    │   - Dark Theme        │ │   - 43 Businesses │
    │   - Plyr Video        │ │   - JSON Storage  │
    └───────────────────────┘ └───────────────────┘
```

### 📦 What We Built

| Section | Description |
|---------|-------------|
| **Landing Page** | Hero with video, pain points, AI solutions, business cards |
| **Business Pages** | 43 dedicated pages with industry-specific problems & solutions |
| **Contact Form** | Captures leads → saves to JSON file |
| **NotebookLM** | Placeholder for embedding presentations |

### 🎨 Business Categories

| Category | Count | Examples |
|----------|-------|----------|
| 🔧 Technical & Construction | 8 | Painter, Plumber, Electrician |
| 💇 Personal Services | 5 | Salon, Tailor, Gym |
| 🛒 Retail | 10 | Supermarket, Bakery, Jewelry |
| 🚗 Automotive | 8 | Mechanic, Body Shop, Car Wash |
| 💼 Intermediary | 4 | Real Estate, Trading |
| 🛠️ Repairs | 4 | Appliances, Mobile |
| 🎨 Handicrafts | 4 | Carpet Weaving, Pottery |

### 🚀 Quick Start

```bash
# Clone
git clone https://github.com/your-username/paradigm-shift.git
cd paradigm-shift

# Run with Docker (recommended)
docker compose up --build

# Or run manually
# Terminal 1 - Backend
cd backend && pip install -r requirements.txt
python manage.py migrate && python manage.py runserver

# Terminal 2 - Frontend
cd frontend && npm install && npm run dev
```

**Access:**
- 🌐 Website: http://localhost:3000
- 🔧 API: http://localhost:8000/api/

### 📡 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/categories/` | GET | List all 7 categories |
| `/api/categories/{id}/` | GET | Category with its businesses |
| `/api/businesses/` | GET | All 43 businesses |
| `/api/businesses/{id}/` | GET | Business detail with problems/solutions |
| `/api/contact/` | POST | Submit contact form |

### 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | React 18, Vite, Plyr, React Router |
| **Backend** | Django 5, Django REST Framework |
| **Styling** | Vanilla CSS, CSS Variables, Vazirmatn Font |
| **Deployment** | Docker, Docker Compose, Nginx |

### ✨ Design Features

- 🌙 **Dark theme** with purple/blue gradients
- 📱 **Mobile-first** responsive design
- ✨ **Glassmorphism** effects
- 🔤 **Vazirmatn font** for Persian text
- ➡️ **Full RTL** support

### 🎬 Customization

**Add Hero Video:**
```jsx
// frontend/src/components/HeroSection.jsx
<source src="/video/intro.mp4" type="video/mp4" />
```

**Embed NotebookLM:**
```jsx
// frontend/src/components/NotebookPlaceholder.jsx
<iframe src="your-notebooklm-url" />
```

**Edit Business Data:**
```python
# backend/api/data.py
BUSINESS_CATEGORIES = [...]
```

</details>

---

<div align="center">

### 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first.

### 📄 License

[MIT](LICENSE)

---

**Built with ❤️ for Iranian businesses**

</div>
