import "dotenv/config";
import config from "./config";
import app from "./app";

app.listen(8000, () => {
  console.log(`SERVER RUNNING ON - ${process.env.APP_URL + ":" + config.port}`);
});
