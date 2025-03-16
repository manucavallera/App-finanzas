import { z } from "zod";
import { Hono } from "hono";
import { handle } from "hono/vercel";
import { zValidator } from "@hono/zod-validator";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";

export const runtime = "edge";

const app = new Hono().basePath("/api");

// Middleware para manejo de errores
app.use("*", async (c, next) => {
  try {
    await next();
  } catch (err) {
    console.error(err);
    return c.json({ error: "Internal Server Error" }, 500);
  }
});

// Ruta GET /hello
app.get("/hello", clerkMiddleware(),helloController(); (c) => {
  const auth = getAuth(c);
  if (!auth?.userId) {
    return c.json(
      {
        error: "Unauthorized",
      },
      401
    );
  }

  return c.json({
    message: "Hello Next.js!",
  });
});

// Exportar manejadores para cada método HTTP como funciones de Next.js
export async function GET(request: Request) {
  return handle(app)(request);
}

export async function POST(request: Request) {
  return handle(app)(request);
}
