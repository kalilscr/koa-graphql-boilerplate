import Router from "@koa/router";

export function routes(router: Router) {
  router.get("/", async (ctx) => {
    ctx.body = {
      message: "Welcome to Koa TypeScript API",
    };
  });

  router.get("/health", async (ctx) => {
    ctx.body = {
      status: "ok",
      timestamp: new Date().toISOString(),
    };
  });
}
