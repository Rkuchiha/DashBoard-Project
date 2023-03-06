import express from "express";

import {
    getAllInformation,
    getInformationByID,
} from "./infromation.controller.js";

const router = express.Router();

router.route("/all").get(getAllInformation);
router.route("/:id").get(getInformationByID);

export default router;
