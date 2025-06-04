
# ⚛️ React + Vite Setup

This project is a modern React application using [Vite](https://vitejs.dev/) for fast development and [pnpm](https://pnpm.io) for efficient dependency management.

## 📦 Requirements

- [Node.js](https://nodejs.org/en) v22.3.0
- [pnpm](https://pnpm.io) (Install via `npm install -g pnpm`)

---

## 🚀 Running the Project

1. **Install dependencies:**

   ```bash
   pnpm install
   ```

2. **Create the environment file:**

   In the root directory, create a file named `.env.local` with the following content:

   ```env
   NEXT_PUBLIC_API_URL=https://your-api-url.com
   ```


3. **Start the development server:**

   ```bash
   pnpm dev
   ```

---

## 🌐 Application URL

Once running, the application will be available at:

```
http://localhost:3000
```

(or the port shown in your terminal)

---

## 🛑 Stopping the Server

To stop the development server, press:

```
CTRL + C
```

in the terminal where it is running.

---

## 📁 Environment Variable

| Variable             | Description               |
|----------------------|---------------------------|
| `NEXT_PUBLIC_API_URL`| Base URL for the API used |

---

## 🧪 Useful Scripts

| Command        | Description                    |
|----------------|--------------------------------|
| `pnpm dev`     | Starts the development server  |

