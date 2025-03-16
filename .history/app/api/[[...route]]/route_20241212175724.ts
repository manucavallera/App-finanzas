import { Hono } from "hono";
import { handle } from "hono/vercel";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";

export const runtime = "edge";

const app = new Hono().basePath("/api");

app.route("/authors", authors);
app.route("/books", books);

// Exportar manejadores para cada método HTTP como funciones de Next.js
export async function GET(request: Request) {
  return handle(app)(request);
}

export async function POST(request: Request) {
  return handle(app)(request);
  /*************  ✨ Codeium Command ⭐  *************/
  /**
   * Handles incoming POST requests to the API.
   *
   * @param {Request} request
   * The incoming request object.
   *
   * @returns {Promise<Response>}
   * The response object.
   */
  /******  b2e0cbb7-a78e-4360-ab32-c92fcc5cb251  *******/
}
