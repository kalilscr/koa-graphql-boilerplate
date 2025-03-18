import Koa from "koa";
import Router from "@koa/router";
import bodyParser from "koa-bodyparser";
import { errorHandler } from "./middlewares/error-handler";
import { routes } from "./routes";
import { connectDatabase } from "./config/mongo";
import mount from "koa-mount";
import { graphqlHTTP } from "koa-graphql";
import { Schema } from "./graphql/Schema";

const app = new Koa();
const router = new Router();

// Middleware
app.use(errorHandler);
app.use(bodyParser());

// GraphQL
app.use(
  mount(
    "/graphql",
    graphqlHTTP({
      schema: Schema,
      graphiql: true,
    })
  )
);

// Database connection
connectDatabase();

// Routes
//routes(router);
app.use(router.routes()).use(router.allowedMethods());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
