//authors.ts
import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  c.json("list authors");
});

app.post("/", (c) => c.json(create an author', 201)

  app.get("/:id", (c) => {
    const id = c.req.param("id");
    c.json(`get author with id ${id}`);
  });
  
  
});
