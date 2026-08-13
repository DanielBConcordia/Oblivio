# 🧠 Oblivio

> **Connecting people who need care with the people who can help.**

**Oblivio** is a system designed to help protect and assist people who may be vulnerable to getting lost, disoriented, or unable to communicate important personal information in an emergency.

The project was developed as a **final academic project (TCC)** and consists of a mobile application, a web application and a REST API working together as a single ecosystem.

---

## 💡 The Idea

Imagine finding someone alone on the street who is unable to properly explain who they are, what condition they have, what medication they take, or how they should be approached.

This is the problem Oblivio was designed to address.

Each registered patient can receive a **personalized physical wristband containing a QR Code**.

If the patient gets lost and someone finds them, scanning the QR Code opens the Oblivio Web interface, providing essential information that can help the person provide appropriate assistance.

At the same time, the patient's caregivers can be notified with information about the scan, including its **location and time**.

---

## 🔄 How It Works

```text
👤 Caregiver
     │
     ▼
Creates an account
     │
     ▼
Registers a patient
     │
     ▼
Patient receives a personalized QR Code wristband
     │
     ▼
Patient gets lost
     │
     ▼
Someone finds and scans the QR Code
     │
     ▼
🌐 Oblivio Web
     │
     ├── 🩸 Blood type
     ├── ⚠️ Allergies
     ├── 💊 Medications
     ├── 🧠 Condition
     ├── 💬 How to communicate / provide care
     └── 📞 Contact options
     │
     ▼
🔔 Caregivers receive a notification
     │
     ├── 📍 Location
     └── 🕐 Scan time
```

---

## 👥 Caregiver System

The caregiver is responsible for managing the patient's information.

A caregiver must register at least one patient before being able to fully use the system.

The caregiver who initially registers a patient becomes their **primary caregiver**, with permission to manage the patient's information.

### Primary caregivers can:

* ➕ Add patient information
* ✏️ Edit patient information
* 🗑️ Remove information
* 👥 Manage caregivers
* ➕ Register additional patients
* 🔔 Receive QR Code scan notifications

---

## 🤝 Temporary Caregivers

Oblivio also supports **temporary caregivers**.

This feature was designed for situations such as:

* 👶 Babysitters
* ✈️ Trips
* 👨‍👩‍👧 Family members
* 🏠 Temporary assistance

Temporary caregivers can access the information necessary to assist the patient, but **cannot modify, delete or add patient information**.

This separation helps maintain control over sensitive information while allowing the patient to be safely cared for by someone else.

---

## 👨‍👩‍👧 Multiple Patients

A caregiver can register multiple patients.

This allows the system to support situations such as:

* Multiple children
* Siblings
* Parents
* Other dependents

The system also establishes limits on the number of primary caregivers associated with a patient to help prevent unauthorized or excessive access.

---

## 🩺 Patient Information

The patient's profile can contain information relevant to their safety and care, including:

* 👤 Name
* 🎂 Date of birth
* 🧠 Condition
* 🩸 Blood type
* ⚠️ Allergies
* 💊 Medications
* 🧠 Temperament
* 💬 Communication and care instructions
* 👨‍👩‍👧 Responsible caregivers
* 📷 Profile information

The goal is not to expose unnecessary personal information, but to provide **relevant information that may help someone assist the patient in an emergency situation**.

---

## 🆘 QR Code & Emergency Assistance

The QR Code is the central bridge between the patient and someone who finds them.

When scanned, the QR Code directs the person to the **Oblivio Web application**.

The web interface provides essential information for immediate assistance and allows the finder to contact:

* 👨‍👩‍👧 The patient's primary caregiver
* 🚔 Emergency / police assistance

The scan is also registered by the system, allowing caregivers to receive information about **when and where the QR Code was accessed**.

---

## 🏗️ System Architecture

Oblivio is composed of three main applications:

```text
                    ┌──────────────────┐
                    │   Oblivio Mobile │
                    │  React Native    │
                    └────────┬─────────┘
                             │
                             │
                             ▼
                    ┌──────────────────┐
                    │   Oblivio API    │
                    │ Node + TypeScript│
                    │     + Prisma     │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │   PostgreSQL     │
                    └──────────────────┘
                             ▲
                             │
                    ┌────────┴─────────┐
                    │                  │
                    │                  │
          ┌─────────┴────────┐ ┌───────┴─────────┐
          │   Oblivio Web    │ │ QR Code Access  │
          │      React       │ │                 │
          └──────────────────┘ └─────────────────┘
```

---

## 🛠️ Technologies

### 📱 Mobile

* React Native
* Expo
* TypeScript
* React Context

### 🌐 Web

* React
* TypeScript
* React Context

### ⚙️ Backend

* Node.js
* TypeScript
* Express
* Prisma
* PostgreSQL
* JWT

### ☁️ Deployment

* Vercel

---

## 📦 Repositories

### 📱 Mobile Application

The main mobile application used by caregivers.

**Repository:**
[github.com/DanielBConcordia/Oblivio](https://github.com/DanielBConcordia/Oblivio)

---

### 🌐 Web Application

The web interface accessed through the patient's QR Code.

**Repository:**
[github.com/DanielBConcordia/webOblivio](https://github.com/DanielBConcordia/webOblivio)

**Live:**
[web-oblivio.vercel.app](https://web-oblivio.vercel.app/)

---

### ⚙️ REST API

Backend responsible for business logic, authentication, database communication and relationships between the system entities.

**Repository:**
[github.com/DanielBConcordia/oblivio-api](https://github.com/DanielBConcordia/oblivio-api)

**Live API:**
[oblivio-api.vercel.app](https://oblivio-api.vercel.app/)

---

## 👨‍💻 My Contribution

Oblivio was developed as a **five-person academic project**.

I was primarily responsible for the **backend and database development**, including:

* 🏗️ Backend architecture
* ⚙️ REST API development
* 🗄️ Database modeling
* 🔗 Entity relationships
* 🔐 Authentication
* 🎫 JWT implementation
* 🧩 CRUD operations
* 🔎 Relational queries
* 🛠️ Prisma integration
* ☁️ API deployment

The backend was developed independently by me as part of the team project.

---

## 📋 Requirements & Documentation

The project was developed based on functional and non-functional requirements defined during the academic development process.

Additional documentation includes:

* Functional Requirements (RF)
* Non-Functional Requirements (RNF)
* Database modeling
* System design
* UI/UX prototype

---

## 🎨 Design

The Oblivio interface was designed and prototyped using **Figma**.

> Design materials and screenshots will be added here.

---

## 📸 Screenshots

### 📱 Mobile

> Screenshots coming soon.

### 🌐 Web

> Screenshots coming soon.

### 🧠 System Flow

> Diagrams coming soon.

---

## 🎓 Academic Project

Oblivio was developed as a **TCC (Trabalho de Conclusão de Curso)** project during the **Analysis and Systems Development** program.

The project combines software development, database modeling, UI/UX design and a real-world problem focused on safety and assistance.

---

## 🌱 Future Improvements

Possible future improvements include:

* 🔐 Strengthening authentication and security
* 📍 Improving location tracking
* 🔔 Expanding notification capabilities
* 📱 Improving the mobile experience
* 🌐 Expanding the emergency assistance flow
* 🎨 Refining the user interface
* 📚 Expanding technical documentation

---

> **Oblivio — because being lost shouldn't mean being unreachable.**

