const router = require("express").Router();
const controller = require("../controllers/event.controller");

router.post("/", controller.saveEvent);

module.exports = router;
