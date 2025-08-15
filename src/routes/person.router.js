import { Router } from "express";
import { Person } from "../controller/person.controller.js";

const route = Router();

route.get("/list", Person.getList);
route.get("/:id", Person.getById);
route.post("/", Person.create);

export default route;
