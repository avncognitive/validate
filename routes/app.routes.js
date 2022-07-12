const Router = require("express-promise-router");
const router = Router({ mergeParams: true });
const { verifyToken, verifySession } = require("../middlewares/verifyAuth");

const appController = require("../controllers/app.controller");

module.exports = () => {
    
    return router;
}