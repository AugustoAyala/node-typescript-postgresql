import express from "express";
const app = express();
import routes from "./routes/index";

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routes);

app.listen(3000, () => {
  console.log("Server on port", 3000);
});
