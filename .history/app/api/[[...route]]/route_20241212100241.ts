import { z } from "zod";
import { Hono } from "hono";
import { handle } from "hono/vercel";
import { zValidator } from "@hono/zod-validator";

export const runtime = "edge";

const app = new Hono().basePath("/api");

app
  .get("/hello", (c) => {
    return c.json({
      message: "Hello Next.js!",
    });
  })
  .get(
    "hello/:test",
    zValidator(
      "param",
      z.object({
        test: z.string(),
      })
    ),
    (c) => {
      return c.json({
        message: "Hello World",
      });
    }
  )
  .post(
    "/create:postId",
    zValidator(
      "json",
      z.object({
        name: z.string(),
        userId: z.number(),
      })
    ),
    zValidator(
      ("param",
      z.object({
        postId: z.number(),
      }))
    ),

    (c) => {
      const { name, userId } = c.req.valid("json");
      const { postId } = c.req.valid("param");

      return c.json({});
    }
  );

export const GET = handle(app);
export const POST = handle(app);
