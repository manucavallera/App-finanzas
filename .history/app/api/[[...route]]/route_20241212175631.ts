import { Hono } from "hono";
import { handle } from "hono/vercel";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";

export const runtime = "edge";

const app = new Hono().basePath("/api");

// Exportar manejadores para cada método HTTP como funciones de Next.js
export async function GET(request: Request) {
  return handle(app)(request);
}

export async function POST(request: Request) {
  return handle(app)(request);
}
