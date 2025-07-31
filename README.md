# 💊 Medicine & Pill Checker Web App

A simple, responsive, and user-friendly web application that allows users to search and explore medicine and pill information using API. Built with HTML, CSS, and JavaScript, this project emphasizes clean UI design, performance optimization, and a responsive user experience.

 The main objective was to deepen understanding of how APIs work, how to integrate them into frontend applications, and how to handle real-time data retrieval and display.

To achieve this, the application leverages the FDA Drug Label API to provide users with up-to-date and accurate information about medications based on keyword input. This includes drug names, manufacturers, active ingredients, usage instructions, and warnings—directly fetched and parsed from live FDA datasets.

The app showcases how API calls can be used not only to enrich a web experience with dynamic content, but also to solve real-world problems such as verifying drug data and promoting safe medication use.

---

## 📌 Project Objectives (Rubric-Aligned)

- ✅ Build a **fully functional frontend application** using HTML, CSS, and JavaScript.
- ✅ Ensure **responsiveness** across mobile, tablet, and desktop devices.
- ✅ Apply **external libraries or frameworks**, including Google Fonts and Font Awesome.
- ✅ Use **Git & GitHub** for version control with clear commit history.
- ✅ Containerize the project using **Docker** and manage services via `docker-compose`.
- ✅ Provide a **well-documented README** explaining the project, structure, and usage.
- ✅ Organize files/folders professionally and include a proper `.gitignore`.

---
📡 API Used
This project integrates the FDA Drug Label API provided by the U.S. Food and Drug Administration (FDA).
The API provides open access to structured information on drug labeling, which was used to identify and verify medications based on user input.

API Name: FDA Drug Label API (JSON)

Provider: openFDA

API Docs: https://open.fda.gov/apis/drug/label/

Use Case: Retrieves drug data such as brand name, manufacturer, warnings, dosage, and active ingredients using keywords from the user's input.

## 🎯 Key Features

- 📱 **Responsive design** for all devices
- 🌗 **Dark mode toggle** for personalized user settings (bonus)
- ⚡ **Client-side caching** to reduce API calls and improve speed (bonus)
- 🔍 Simple and intuitive UI for pill/medicine information lookup
- 🧠 Clear JS logic for interactivity and mode persistence
- 🎨 Custom fonts and icons to enhance aesthetic appeal

---

## 📂 Folder Structure
medicine-and-pill-checker-ndunge-mbithi/
│
├── loadbalancer/
│ ├── default.conf # Nginx configuration for load balancing
│ └── Dockerfile # Docker image for the load balancer
│
├── web/
│ ├── index.html # Main HTML file
│ ├── styles.css # Styling (CSS)
│ ├── script.js # App logic (JavaScript)
│ └── Dockerfile # Docker image for frontend app
│
├── .gitignore # Ignored files and folders
├── README.md # Project documentation
└── docker-compose.yml # Orchestrates multi-container deployment

🧪 Technologies Used
HTML5

CSS3

JavaScript

Docker & Docker Compose

Nginx (for container serving)

⚙️ How to Run This Project
⚠️ Docker is required to run this project locally.

🔹 Steps:
Clone the repository:
git clone https://github.com/ndunge-mbithi/medicine-and-pill-checker-ndunge-mbithi.git
cd medicine-and-pill-checker-ndunge-mbithi
Build and run with Docker Compose:
docker-compose up --build
Open your browser and go to:
http://localhost:8080

🏆 Bonus Features (Extra Credit)
These features go beyond the assignment requirements.

🌗 Dark Mode Toggle
Allows users to personalize their experience. The setting is saved in localStorage so it persists across sessions.

⚡ Client-Side Caching
API responses are stored in the browser's memory to reduce load times and avoid redundant network requests, significantly improving performance and efficiency.

🚧 Challenges Faced
Building and containerizing the project on Windows 10 Home presented several technical barriers:

🪟 Windows 10 Home lacks Hyper-V support, making Docker Desktop installation problematic. It required a workaround using WSL 2 (Windows Subsystem for Linux), which involved running complex PowerShell scripts to enable virtualization manually.

🔐 Running Docker through PowerShell resulted in access restrictions and permission issues, especially due to inherited user account configurations on the laptop.

🐌 The limited hardware performance of my laptop made Docker setup, image building, and testing significantly slower, adding to the time and debugging overhead.

Docker Compose setup is tested and configured correctly, though due to compatibility issues with Docker on Windows 10 Home, I was unable to fully run it locally.
KINDLY FIND LINK TO DEMO VIDEO BELOW :))
https://www.loom.com/share/bca1ea50d36f44538997fba31c42f966?sid=d4ef5260-7313-4be6-ba90-9bc067f8cb3e