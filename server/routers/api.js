const express = require("express");
const router = express.Router();

//Authentication
//Sign Up
router.post("/user", require("../api/Auth/Handler").create);
router.get("/user/:id", require("../api/Auth/Handler").show);
router.delete("/user/:id", require("../api/Auth/Handler").destroy);
router.put("/user/:id", require("../api/Auth/Handler").update);
//Sign in
router.post("/user/login", require("../api/Auth/Handler").signIn);

//Grant Access with token
router.post("/user/token", require("../middleware/auth").grantAccessByToken);

//product
router.post("/product", require("../api/Product/Handler").create);
router.get("/product", require("../api/Product/Handler").getAll);
router.delete("/product/:id", require("../api/Product/Handler").destroy);
router.put("/product/:id", require("../api/Product/Handler").update);

//
module.exports = router;
