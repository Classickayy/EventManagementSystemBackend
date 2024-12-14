const express = require("express");
const { getEvents, createEvent } = require("../controllers/eventContoller");
const router = express.Router();

router.get("/getEvents", getEvents);
router.post("/createEvent", createEvent);

module.exports = router;

