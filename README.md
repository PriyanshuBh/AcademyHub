<a name="readme-top"></a>

<br />
<div align="center">
  <a href="https://github.com/priyanshubh/AcademyHub">
    <img src="https://cdn-icons-png.flaticon.com/512/3413/3413535.png" alt="AcademyHub Logo" width="80" height="80">
  </a>

  <h3 align="center">AcademyHub</h3>

  <p align="center">
    Interactive Learning & Teaching Platform
    <br />
    <a href="https://academyhub-pb.vercel.app"><strong>View Demo »</strong></a>
    <br />
    <br />
    <a href="https://github.com/priyanshubh/AcademyHub">View Code</a>
    ·
    <a href="https://github.com/priyanshubh/AcademyHub/issues">Report Bug</a>
    ·
    <a href="https://github.com/priyanshubh/AcademyHub/issues">Request Feature</a>
  </p>
</div>

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
</div>

<br />

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#-about-the-project">About The Project</a></li>
    <li><a href="#-key-features">Key Features</a></li>
    <li><a href="#-tech-stack">Tech Stack</a></li>
    <li><a href="#-architecture">Architecture</a></li>
    <li><a href="#-api-design">API Design</a></li>
    <li><a href="#-getting-started">Getting Started</a></li>
    <li><a href="#-contributing">Contributing</a></li>
    <li><a href="#-contact">Contact</a></li>
  </ol>
</details>

---

## 🤖 About The Project

**AcademyHub** is a comprehensive full-stack ed-tech platform designed to facilitate seamless interaction between instructors and students. It empowers instructors to create, manage, and monetize courses while offering students a robust learning environment with progress tracking and secure payments.
<!-- 
The platform was engineered to handle real-world scenarios, achieving **100+ course enrollments** during its testing phase and successfully processing live transactions. -->

<div align="center">
  <img src="./public/assets/image.png" alt="Dashboard" />
</div>

---

## 🔥 Key Features

- **🔐 Secure Authentication**
  Robust JWT-based authentication system with **Bcrypt encryption** to ensure secure user login and data protection.
  
- **👥 Role-Based Access Control (RBAC)**
  Distinct interfaces for **Students** and **Instructors**, allowing for specialized functionalities like course creation for teachers and enrollment for students.

- **📚 Advanced Course Management**
  Instructors can upload and manage multimedia content (video/images) seamlessly, powered by **Cloudinary**.

- **💳 Monetization & Payments**
  Integrated **Razorpay** payment gateway with a full cart and checkout workflow, successfully processing transactions for **20+ test users**.

- **📈 Interactive Learning**
  Features include course enrollment, content consumption, and progress tracking to enhance the student experience.

- **⚡ State Management**
 Utilizes **Zustand** for efficient and lightweight global state management across the application.

---

## ⚙️ Tech Stack

| Category | Technology | Description |
| :--- | :--- | :--- |
| **Frontend** | <img src="https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white"/> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white"/> <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white"/> | Next.js for SSR, typed with TypeScript, and styled with Tailwind CSS. |
| **Backend** | <img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white"/> <img src="https://img.shields.io/badge/Express.js-404D59?style=flat&logo=express&logoColor=white"/> |Scalable RESTful API architecture built on Node.js and Express. |
| **Database** | <img src="https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white"/> | Flexible NoSQL database schema for storing course and user data. |
| **State** | <img src="https://img.shields.io/badge/Zustand-orange?style=flat&logo=react&logoColor=white"/> | Lightweight state management for handling user sessions and cart data. |
| **Services** | <img src="https://img.shields.io/badge/Razorpay-02042B?style=flat&logo=razorpay&logoColor=white"/> <img src="https://img.shields.io/badge/Cloudinary-3448C5?style=flat&logo=cloudinary&logoColor=white"/> | Secure payments and optimized media storage/delivery. |

---

## 🏗 Architecture

```mermaid
graph TD
    subgraph Client
        Browser[User Browser]
    end

    subgraph Backend
        Server[Express.js Server]
        Auth[JWT Middleware]
    end

    subgraph Data & Services
        DB[MongoDB]
        Cloud[Cloudinary]
        Payment[Razorpay]
    end

    Browser -->|API Requests| Server
    Server -->|Validate| Auth
    Server -->|Query| DB
    Server -->|Upload Media| Cloud
    Browser -->|Process Payment| Payment
    Payment -->|Verify Signature| Server
```
---

## ⚡ API Design

AcademyHub follows a RESTful API architecture structured under `/api/v1/`.

| Method | Endpoint | Description |
| --- | --- | --- |
| **Auth** |  |  |
| `POST` | `/api/v1/auth/signup` | Register a new User (Student/Instructor) |
| `POST` | `/api/v1/auth/login` | Login and receive JWT token |
| **Courses** |  |  |
| `GET` | `/api/v1/course/getAllCourses` | Retrieve all published courses |
| `POST` | `/api/v1/course/createCourse` | Create a new course (Instructor Only) |
| `POST` | `/api/v1/course/addSection` | Add sections/content to a course |
| **Payments** |  |  |
| `POST` | `/api/v1/payment/capturePayment` | Initiate Razorpay order |
| `POST` | `/api/v1/payment/verifyPayment` | Verify payment signature |

---

## 🧰 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

* **Node.js** (v18 or higher)
* **MongoDB** (Local instance or Atlas connection string)
* **Git**

### Installation

1. **Clone the repository**
```bash
git clone [https://github.com/priyanshubh/AcademyHub.git](https://github.com/priyanshubh/AcademyHub.git)
cd AcademyHub

```


2. **Install dependencies**
```bash
# If using npm
npm install

# If using yarn
yarn install

```


3. **Set up Environment Variables**
Create a `.env` file in the root directory and add the following keys:
```env
PORT=4000
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

# Cloudinary Config
CLOUD_NAME=your_cloud_name
API_KEY=your_api_key
API_SECRET=your_api_secret

# Razorpay Config
RAZORPAY_KEY=your_razorpay_key
RAZORPAY_SECRET=your_razorpay_secret

```


4. **Run the application**
```bash
npm run dev

```



---

## 🔧 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 💎 Acknowledgements

I'd like to express my gratitude to the following libraries and tools that helped me with this project:

* [Next.js](https://nextjs.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Razorpay](https://razorpay.com/)
* [Cloudinary](https://cloudinary.com/)
* [Zustand](https://github.com/pmndrs/zustand)

---

## 🚀 Follow Me

<div align="center">
  <a href="https://github.com/priyanshubh">
    <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
  <a href="https://linkedin.com/in/priyanshu-bharti">
    <img src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
  <a href="https://priyanshubharti.vercel.app">
    <img src="https://img.shields.io/badge/Portfolio-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white" alt="Portfolio" />
  </a>
</div>

<br />
<p align="center">Built with ❤️ by <a href="https://www.google.com/search?q=https://github.com/priyanshubh">Priyanshu Bharti</a></p>

```

```