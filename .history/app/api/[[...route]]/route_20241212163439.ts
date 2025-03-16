import { z } from "zod";
import { Hono } from "hono";
import { handle } from "hono/vercel";
import { zValidator } from "@hono/zod-validator";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";

export const runtime = "edge";

const app = new Hono().basePath("/api");

// Middleware para manejo de errores
app.use((c, next) => {
  return next().catch((err) => {
    console.error(err);
    return c.json({ error: "Internal Server Error" }, 500);
  });
});

// Ruta GET /hello
app.get("/hello", (c) => {
  return c.json({
    message: "Hello Next.js!",
  });
});

// Ruta GET /hello/:test
app.get(
  "/hello",
  "/hello",

  (c) => {
    const auth = getAuth(c);
    if (!auth?.userId) {
      return c.json({
        error: "Unauthorized",
      });
    }

    return c.json({
      message: "Hello Next.js!",
    });
  }
);

// Exportar el manejador para cada método HTTP
export const GET = app.get;
export const POST = app.post;

// Exportar el manejador de la aplicación
export const handler = handle(app);
