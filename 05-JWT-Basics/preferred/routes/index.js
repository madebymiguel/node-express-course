const express = require("express");
const { logon, welcome } = require("../controllers");
const authentication = require("../middleware/authentication");

const router = express.Router();

router.route("/logon").post(logon);
router.route("/hello").get(authentication, welcome);

module.exports = router;
