# URL Shortener

## Project Overview

This is a full-stack **URL Shortener application** that converts long URLs into short, shareable links.  
Users can create shortened URLs, get redirected using the short link, and view analytics like click counts and recently created URLs.

The system tracks usage data and displays analytics through a responsive user interface.

---

## Tech Stack

### Frontend
- React
- TypeScript
- HTML
- CSS

### Backend
- Java
- Spring Boot
- Maven

### Database
- SQLite

### Tools
- Node.js
- npm
- Git

---

## Features

- Create shortened URLs
- Redirect short URLs to the original link
- Track click count
- Display recently created URLs
- Analytics chart for clicks
- Responsive UI

---

## Project Structure

```
URL-Shortener
│
├── frontend
│   ├── src
│   ├── public
│   └── package.json
│
├── backend
│   ├── src
│   ├── pom.xml
│   └── mvnw
│
└── urls.db
```

---

## Prerequisites

Before running the project install:

- Node.js (v16 or higher)
- npm
- Java JDK 17+
- Maven
- Git

---

## Run the Backend

Navigate to the backend folder:

```bash
cd backend
```

Run the Spring Boot application:

Linux / Mac:
```bash
./mvnw spring-boot:run
```

Windows:
```bash
mvnw.cmd spring-boot:run
```

Backend runs at:

```
http://localhost:8080
```

---

## Run the Frontend

Navigate to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Frontend runs at:

```
http://localhost:3000
```

---

## Seed Data

Sample data is stored in the SQLite database `urls.db`.

You can add seed data by inserting records into the database containing:

- Original URL
- Short code
- Click count
- Created timestamp

---

## Running Tests

### Backend Tests

```bash
cd backend
mvn test
```

### Frontend Tests

```bash
cd frontend
npm test
```

---

## Application Workflow

1. User enters a long URL
2. Backend generates a unique short code
3. Short URL is returned to the frontend
4. When a user visits the short URL:
   - The backend redirects to the original URL
   - Click count increases
5. Recent URLs and analytics update automatically

---

## Assumptions / Tradeoffs

- SQLite used for simplicity
- No authentication implemented
- URL validation is basic
- Analytics limited to click count tracking
- Designed for demonstration purposes

---

## Future Improvements

- User authentication
- Custom short URLs
- Advanced analytics dashboard
- URL expiration
- Cloud deployment

---

## Author

Santhiyaa
