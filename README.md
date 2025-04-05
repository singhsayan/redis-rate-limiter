# Redis Rate Limiter (Node.js + Redis + Docker)

A lightweight rate-limiting service built with Node.js and Redis, containerized using Docker. This middleware ensures API endpoints are protected from abuse by limiting the number of requests from a single client within a defined time window.

---

## Tech Stack

- Node.js (Express)
- Redis (In-memory data store)
- Docker + Docker Compose
- ES6 Modules

---

## Features

- Rate limiting logic using Redis with expiry
- Custom middleware using Express
- Handles HTTP 429 Too Many Requests error gracefully
- Dockerized setup with Redis service
- Easy to scale and plug into any Express app

---

## How It Works

- Each incoming request is tracked using the IP address.
- A Redis key is created for the IP with a TTL (time to live).
- If request count exceeds the limit (e.g. 5 requests per 10 seconds), a 429 response is returned.

---

## Screenshots

### Docker Containers Running

![Docker Containers](https://github.com/user-attachments/assets/72f3a080-1a2e-4225-8273-2eee5af707e6)

### Curl Requests from 1 to 10 – Rate Limit Triggered After 5 Requests

**Initial Requests (Within Limit):**

![Curl Loop 1](https://github.com/user-attachments/assets/529272b9-8b19-4b05-932f-42baa4c8148f)

**More Requests (Exceeding Limit):**

![Curl Loop 2](https://github.com/user-attachments/assets/4205fd96-1d5c-48d9-aada-923d529bc959)

**Terminal Output of Rate Limiting in Action:**

![Rate Limiting Triggered](https://github.com/user-attachments/assets/1aa7a451-87d1-4288-b191-11b58c039927)

---

## Test It Locally

### 1. Clone the repository

```bash
git clone https://github.com/your-username/redis-rate-limiter.git
cd redis-rate-limiter
