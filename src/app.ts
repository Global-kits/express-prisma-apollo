import express, { json } from "express";
import routes from "./routes";
import helmet from "helmet";
import cors from "cors";
import apolloServer from "./graphql";
import { expressMiddleware } from "@apollo/server/express4";

const app = express();
app.use(helmet());
app.use(cors());

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "img-src 'self' data: https://apollo-server-landing-page.cdn.apollographql.com",
  );
  next();
});

const server = async () => {
  await apolloServer.start();
  app.use("/graphql", cors(), json(), expressMiddleware(apolloServer));
};
server();

app.use(routes);

app.get("/", (req, res) => {
  return res.json("hi");
});

export default app;
