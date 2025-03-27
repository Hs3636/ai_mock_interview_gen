# 🎯 Interview Prep Platform

A modern, interactive platform built with **Next.js** to help users prepare for technical interviews. This application features **AI-powered interview practice, real-time feedback, and an immersive 3D interface**.

## ✨ Features

- 🤖 **AI-powered interview practice sessions**
- 🎨 **Immersive 3D interface** with Three.js
- 📊 **Interactive data visualization** using Chart.js
- 🔐 **Secure authentication** with Firebase
- 📧 **Email notifications** via Nodemailer
- 📱 **Responsive design** with Tailwind CSS

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Firebase account & credentials**
- **Google AI API key** (for AI features)

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/interview_prep.git
   cd interview_prep
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file in the root directory with the following variables:

   ```env
   FIREBASE_PRIVATE_KEY=firebase_api_key
   FIREBASE_CLIENT_EMAIL=firebase_client_email
   GOOGLE_GENERATIVE_AI_API_KEY=genimi_api_key
   NEXT_PUBLIC_VAPI_API_KEY=vapi_application_id
   NEXT_PUBLIC_VAPI_WORKFLOW_ID=vapi_workflow_id
   MY_EMAIL=your_email_address
   MY_PASSWORD=your_email_application_password
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

## 🛠️ Tech Stack

| **Category**       | **Technology**  |
|-------------------|----------------|
| **Framework**    | Next.js 15.2.3   |
| **Language**     | TypeScript       |
| **Styling**      | Tailwind CSS     |
| **Authentication** | Firebase       |
| **3D Graphics**  | Three.js         |
| **Charts**       | Chart.js         |
| **Form Handling** | React Hook Form |
| **UI Components** | Radix UI        |
| **Email**        | Nodemailer       |

## 📁 Project Structure

```
interview_prep/
├── app/                    # Next.js app directory
│   ├── (auth)/             # Authentication routes
│   ├── (root)/             # Main application routes
│   ├── api/                # API routes
│   └── layout.tsx          # Root layout
├── components/             # Reusable components
├── lib/                    # Utility functions
├── firebase/               # Firebase configuration
├── types/                  # TypeScript type definitions
├── constants/              # Application constants
└── public/                 # Static assets
```

## 🔧 Available Scripts

| **Command**         | **Description**                              |
|--------------------|----------------------------------------------|
| `npm run dev`     | Start development server with Turbopack      |
| `npm run build`   | Build the production application             |
| `npm run start`   | Start the production server                  |

## 📞 Support

Need help? Reach out:

📧 **Email:** heetshah4545@gmail.com  
📩 **Message:** https://www.instagram.com/heet_shah_0404/

💡 **Made with ❤️ by Heet Shah**  
