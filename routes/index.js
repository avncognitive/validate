const express = require("express");
const router = express.Router();
const { createProxyMiddleware } = require("http-proxy-middleware");
const adminRoutes = require("./admin.routes");
const generalRoutes = require("./general.routes");
const usersRoutes = require("./users.routes");
module.exports = (app) =>
    router
    .get('/health',(req,res) => res.json({status: 200, msg: "test"}))
    .use("/", generalRoutes())
    .use("/admin",adminRoutes())
    .use("/user",usersRoutes())