# Azure Innovations

**Azure Innovations** is a dynamic Apple Reseller and Service Provider headquartered in Naraina, Delhi, with branches in Noida and Gurgaon. Our core focus is delivering genuine Apple products and tailored IT services to individuals and educational institutions.

We are also an official **Microsoft Surface Partner**, expanding our reach into premium hardware solutions.

---

## 📁 Project Overview

This repository contains three main components:

- **Website** – A dynamic customer-facing site.
- **Dashboard (CMS)** – Internal content management system for managing website data.
- **Backend** – RESTful API server that powers both the website and dashboard.

Each service is developed independently and runs on a separate port. The backend is containerized using Docker.

---

## 📂 Folder Structure

```
azure-innovations/
├── website/      # Next.js + Tailwind CSS frontend for users (Port 3000)
├── dashboard/    # Admin dashboard with CMS (Next.js + Tailwind, Port 3001)
├── backend/      # Node.js + Express backend with Docker (Port 9000)
└── README.md
```

---

## ⚙️ Tech Stack

| Layer       | Tech Used                    |
|-------------|------------------------------|
| Frontend    | Next.js, Tailwind CSS        |
| Dashboard   | Next.js, Tailwind CSS (CMS)  |
| Backend     | Node.js, Express.js          |
| Container   | Docker (backend only)        |

---

## 🔌 Port Configuration

| Service      | Port |
|--------------|------|
| Website      | 3000 |
| Dashboard    | 3001 |
| Backend API  | 9000 |

---

## 🧠 CMS Integration

The **Dashboard** acts as a CMS for the **Website**. Admins can manage content like text, images, links, and other dynamic data through the dashboard interface. These updates are served in real-time to the frontend via the backend API.

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/azure-innovations.git
cd azure-innovations
```

### 2. Run the Backend (Requires Docker)

```bash
cd backend
docker build -t azure-backend .
docker run -p 9000:9000 azure-backend
```

### 3. Start the Website

```bash
cd website
npm install
npm run dev
# Available at http://localhost:3000
```

### 4. Start the Dashboard

```bash
cd dashboard
npm install
npm run dev
# Available at http://localhost:3001
```

---

## 🤝 Contributing

Contributions, feedback, and suggestions are welcome. Please feel free to fork the repo and open pull requests.

---

## 📄 License

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.
