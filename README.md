# 🔐 SecureFlow – Real-Time Virtual Deal Room

**SecureFlow** is a secure, real-time platform that enables buyers and sellers to negotiate deals, share documents, and finalize transactions—all in a virtual deal room environment. Built for efficiency, transparency, and trust.

---

## 🚀 Features

### 🧑‍💼 User Management & Authentication
- JWT-based authentication system (Register/Login).
- Role-based access:
  - **Buyer**: Create and negotiate deals.
  - **Seller**: Accept or reject offers.

### 💼 Secure Deal Creation & Negotiation
- Create deals with title, description, and price.
- Deal statuses: `Pending`, `In Progress`, `Completed`, `Cancelled`.
- Real-time price negotiation using **Socket.io**.

### 💬 Real-Time Chat & Notifications
- Instant messaging within deal rooms.
- Typing indicators and read receipts.
- Live notifications for:
  - New messages
  - Deal status changes
  - Document uploads

### 📎 Secure Document Upload & Access Control
- Upload documents in PDF, DOCX, or PNG formats.
- Fine-grained access control: Buyers can choose who can view documents.
- Encrypted and securely stored.

### ⚡ Performance Optimization
- **Redis** used for:
  - Caching active deals
  - Caching frequently accessed messages
  - Storing session data

### 📊 Admin Analytics Dashboard
- Transaction insights:
  - Completed vs. pending deals
  - User engagement stats
- Built using **Chart.js** / **Recharts**

### 💳 Payment Integration
- Integrate with **Stripe** to process deal payments securely.

---

## 🛠 Tech Stack

| Layer      | Technology                             |
|------------|----------------------------------------|
| Frontend   | Nextjs (with Redux, React Query)      |
| Backend    | Node.js, Express                       |
| Realtime   | Socket.io                              |
| Database   | MongoDB Atlas                          |
| Caching    | Redis                                  |
| Auth       | JWT                                    |
| Deployment | Vercel | Google Cloud Run / Render     |
| Storage    | Cloudinary        |
| Charts     | Chart.js / Recharts                    |

---

## 🧪 Running the Project

### Prerequisites

- Node.js v18+
- MongoDB Atlas account
- Redis instance
- Google Cloud CLI (for deployment) | Render and Vercel


Repo
git: `https://github.com/Navaf-U/secureFlow.git`
cd client & server