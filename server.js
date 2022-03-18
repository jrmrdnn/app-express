import { createServer } from "http";
import { config } from "dotenv";
import express from "express";
import helmet from "helmet";
import Socket from "./socket.js";
import Router from "./router.js";
import https from "./middleware/https.js";

// Init .env
config();

// Init App
const app = express();

// Create Server
const httpServer = createServer(app);

// Init Socket
Socket(httpServer);

// Init Helmet
app.use(helmet());

// Parse application/json
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(express.static("public"));

// http -> https.
app.use(https);

app.set("view engine", "ejs");

// Routes
app.use("/", Router);

// Error 404
app.use((req, res) => {
  res.status(404).json({
    type: "error",
    msg: "Error 404",
  });
});

// Start Server
app.set("port", process.env.PORT || 4000);
httpServer.listen(app.get("port"), () => {
  const port = httpServer.address().port;
  console.log(`http://localhost:${port}`);
});
