const express = require("express");
const router = express.Router();


const { getAllhotels} = require("../controllers/hotels");

router.route("/").get(getAllhotels);




module.exports = router;


