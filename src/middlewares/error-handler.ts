import { Context, Next } from "koa";

export async function errorHandler(ctx: Context, next: Next) {
  try {
    await next();
  } catch (err: any) {
    ctx.status = err.status || 500;
    ctx.body = {
      error: {
        message: err.message || "Internal Server Error",
        status: ctx.status,
      },
    };
    ctx.app.emit("error", err, ctx);
  }
}
