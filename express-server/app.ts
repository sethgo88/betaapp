import Express, { Response, Request, NextFunction } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { Sequelize, Model, DataTypes } from "sequelize";
import routeRoutes from "./routes/routes";

const app = Express();
const port = process.env.PORT || 5000;

const corsOptions: cors.CorsOptions = {
  origin: ["http://localhost:5173"],
};

// const sequelize = new Sequelize({
//   dialect: "sqlite",
//   storage: "./database.sqlite",
// });

// class Route extends Model {}
// Route.init(
//   {
//     name: DataTypes.STRING,
//     type: DataTypes.STRING,
//     grade: DataTypes.STRING,
//   },
//   { sequelize, modelName: "route" }
// );

// sequelize.sync();

app.use(cors(corsOptions));
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/routes", routeRoutes);

// app.get("/routes", async (req, res) => {
//   const routes = await Route.findAll();
//   res.json(routes);
// });

// app.post("/routes", async (req, res) => {
//   const route = await Route.create(req.body);
//   res.json(route);
// });

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
