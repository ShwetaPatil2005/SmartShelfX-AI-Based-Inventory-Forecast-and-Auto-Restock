# 🛒 SmartShelfX – AI-Based Inventory Forecast & Auto-Restock

**SmartShelfX** is a modern, full-stack inventory management ecosystem designed to bridge the gap between traditional stock tracking and predictive AI analytics. It empowers Admins, Managers, and Vendors with real-time data visibility and automated reorder intelligence.

---

## 🚀 Key Features

* **Role-Based Access Control:** Distinct dashboards for **Admin** (System Control), **Manager** (Operations & Analysis), and **Vendor** (Supply Management).
* **AI-Driven Alerts:** Automated "Reorder" status triggers when stock hits the pre-defined Reorder Level (ROL).
* **Transaction Tracking:** Comprehensive **IN** (Purchase) and **OUT** (Issue) logging to map inventory velocity.
* **Visual Analytics:** Interactive Pie Charts for category-wise sales distribution and demand analysis.
* **Predictive Vision:** Designed to feed historical transaction data into an ML model for stockout prediction.

---

## 🛠️ Tech Stack

### Frontend
* **React.js (v18):** Functional components with Hooks (`useEffect`, `useState`).
* **Axios:** For seamless REST API communication.
* **React-Bootstrap:** Responsive "Glassmorphism" UI components.
* **Chart.js:** For data visualization and sales analysis.

### Backend
* **Java 17 & Spring Boot 3:** Robust micro-service architecture.
* **Spring Data JPA:** For database abstraction and ORM.
* **Spring Security:** Protecting sensitive inventory operations.
* **MySQL:** Reliable relational data storage.

---

## 📂 Project Structure

```text
SmartShelfX/
├── inventoryApplication/    # Spring Boot Backend (Logic & Database)
├── inventory-front/        # React Frontend (UI/UX)
├── SMART-INVENTORY...ppt   # Project Presentation & Architecture
└── README.md               # Documentation
