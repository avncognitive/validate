const Router = require("express-promise-router");
const router = Router({ mergeParams: true });

const usersController = require("../controllers/users.controller");

const {
    createMessageValidate,
    createMessageCustomValidate,
    updateMessageStatusValidate,
   
} = require('../middlewares/validators/usersValidator');

module.exports = () => {
    router.post(
        "/createMessage",
        createMessageValidate,
        usersController.createMessageController
    );
    router.post(
        "/createMessageCustom",
        createMessageCustomValidate,
        usersController.createMessageCustomController
    );
    router.post(
        "/updateMessageStatus",
        updateMessageStatusValidate,
        usersController.updateMessageStatusController
    );
    // router.post(
    //     "/rescheduleMessage",
    //     rescheduleMessageValidate,
    //     usersController.rescheduleMessageController
    // );
    return router;
}