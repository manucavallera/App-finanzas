import { Hono } from "hono";

const app = new Hono();

// Ruta para listar autores
app.get("/", (c) => {
  return c.json({ message: "List authors" });
});

// Ruta para crear un autor
app.post("/", (c) => {
  return c.json({ message: "Create an author" }, 201);
});

// Ruta para obtener un autor por ID
app.get("/:id", (c) => {
  const id = c.req.param("id");
  return c.json({ message: `Get author with id ${id}` });
});

export default app;
