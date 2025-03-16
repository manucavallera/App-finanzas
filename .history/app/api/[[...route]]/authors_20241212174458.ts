//authors.ts
import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  c.json("list authors");
});

app.post("/", (c) => {
  c.json("create author");
});
