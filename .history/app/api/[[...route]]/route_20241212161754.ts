import { z } from "zod";
import { Hono } from "hono";
import { handle } from "hono/vercel";
import { zValidator } from "@hono/zod-validator";

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
  "/hello/:test",
  zValidator(
    "param",
    z.object({
      test: z.string(),
    })
  ),
  (c) => {
    return c.json({
      message: `Hello ${c.req.valid("param").test}`,
    });
  }
);

// Ruta POST /create/:postId
app.post(
  "/create/:postId",
  zValidator(
    "json",
    z.object({
      name: z.string(),
      userId: z.number(),
    })
  ),
  zValidator(
    "param",
    z.object({
      postId: z.number(),
    })
  ),
  (c) => {
    const { name, userId } = c.req.valid("json");
    const { postId } = c.req.valid("param");

    // Aquí puedes agregar la lógica para crear un nuevo recurso
    return c.json({ message: "Post created", postId, name, userId });
  }
);

// Exportar el manejador para cada método HTTP
export const GET = app.get;
export const POST = app.post;

// Exportar el manejador de la aplicación
export const handler = handle(app);
