import Express from "express";
import cors from "cors";
import routeRoute from "./routes/route.route";

const app = Express();
const corsOptions: cors.CorsOptions = {
  origin: ["http://localhost:5173"],
};

app.use(cors(corsOptions));
app.use(Express.json());
app.use("/routes", routeRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
