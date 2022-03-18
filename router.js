import { Router as RouterExpress } from "express";
import { Home } from "./controller/home.js";

const Router = RouterExpress({ strict: true });

Router.get("/", Home);

export default Router;
