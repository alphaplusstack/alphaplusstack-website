
```md
# AlphaPlusStack

Official website and operations platform for **AlphaPlusStack** — web development, hosting, and reliable digital products.

Public site,, and client portal in one codebase.

---

## Overview

AlphaPlusStack helps businesses launch and run websites, web apps, and custom software.

This repository contains:

- **Public website** — home, services, pricing, portfolio, blog, reviews, contact


---

## Features

### Public

- Marketing pages (About, Services, Pricing, Portfolio, Blog, FAQ)
- Project enquiry form
- Pricing table (development / deployment / total)
- Dark / light theme


---

## Tech stack

| Layer | Stack |
|--------|--------|
| Frontend | React, React Router, Tailwind CSS, Vite |
| Backend | Node.js, Express |
| Database | MongoDB (Mongoose) |
| Auth | JWT + sessions |
| Email | Nodemailer (SMTP) |

---

## Project structure

```text
alphaplusstack/
├── client/                 # React frontend (Vite)
│   ├── src/pages/
│   ├── src/services/api.js
│   └── src/context/
├── server/                 # Express API
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── utils/
└── README.md
```

---

## Prerequisites

- Node.js 18+
- MongoDB (local or Atlas)
- SMTP mailbox for transactional email (Gmail App Password recommended)

---

## Setup

### 1. Clone

```bash
git clone https://github.com/YOUR_ORG/alphaplusstack.git
cd alphaplusstack
```

### 2. Backend

```bash
cd server
npm install
cp .env.example .env
npm run dev
```

### 3. Frontend

```bash
cd client
npm install
cp .env.example .env
npm run dev
```

---

## Environment variables


### Client `.env`

```env
VITE_API_URL=http://localhost:5000/api
```
---

## Scripts

| Location | Command | Purpose |
|----------|---------|---------|
| `server` | `npm run dev` | API with reload |
| `client` | `npm run dev` | Vite frontend |
| `client` | `npm run build` | Production build |

---

## Local URLs

| App | URL |
|-----|-----|
| Public site | http://localhost:5173 |
| API | http://localhost:5000/api |

---

## Security notes

- Admin and client password-reset pages are separate
- Reset tokens are hashed at rest and expire in 30 minutes
- Failed login and forgot-password responses do not reveal whether an email exists
- CORS origin must match the frontend URL (`CLIENT_URL`)

---

## Contact

**AlphaPlusStack**  
Email: alphaplusstack@gmail.com  
India

---

## License

Private — © AlphaPlusStack. All rights reserved.

Unauthorized copying or distribution of this source is not permitted.
```
