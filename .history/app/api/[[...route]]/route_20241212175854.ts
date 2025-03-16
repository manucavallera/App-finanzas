import { Hono } from "hono";
import { handle } from "hono/vercel";

import authors from "./authors";
import books from "./books";

export const runtime = "edge"; // Define el entorno de ejecución como 'edge'

const app = new Hono().basePath("/api"); // Define el prefijo base de las rutas

// Configura las subrutas para autores y libros
app.route("/authors", authors);
app.route("/books", books);

// Manejadores exportados para cada método HTTP
export const GET = async (request: Request) => {
  return handle(app)(request); // Procesa las solicitudes GET con Hono
};

export const POST = async (request: Request) => {
  return handle(app)(request); // Procesa las solicitudes POST con Hono
};
