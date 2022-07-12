const Router = require("express-promise-router");
const router = Router({ mergeParams: true });

const generalController = require("../controllers/general.controller");

const {
    registerValidate,
    loginDataValidate,
    getuserFromTokenValidate,
    setMFAAuthCodeValidate,
    validatePageAccessValidate,
    securityQuestionValidate
} = require('../middlewares/validators/generalValidator');

module.exports = () => {
    router.post(
        "/register",
        registerValidate,
        generalController.register
    );
    router.post(
        "/set_login_data",
        loginDataValidate,
        generalController.loginData
    );
    router.post(
        "/getUserFromToken",
        getuserFromTokenValidate,
        generalController.getuserFromTokenController
    );
    router.post(
        "/setMFAAuthCode",
        setMFAAuthCodeValidate,
        generalController.setMFAAuthCodeController
    );
    router.post(
        "/validatePageAccess",
        validatePageAccessValidate,
        generalController.validatePageAccessController  //accessToken
    );
    router.post(
        "/security_question",
        securityQuestionValidate,
        generalController.securityQuestionController  //accessToken
    );
    return router;
}