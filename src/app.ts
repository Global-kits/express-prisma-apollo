import express from "express";
import routes from "./routes";
import helmet from "helmet";

const app = express();
app.use(helmet());

app.use(routes);
app.get("/", (req, res) => {
  return res.json("hi");
});

export default app;
