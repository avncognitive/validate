const register = async (req, res) => {
    res.json({ status: 200, msg: "test" });
}

const loginData = async (req, res) => {
    res.json({ status: 200, msg: "test" });
}
const getuserFromTokenController = async (req, res) => {
    res.json({ status: 200, msg: "test" });
}
const setMFAAuthCodeController = async (req, res) => {
    res.json({ status: 200, msg: "test" });
}

const validatePageAccessController = async (req, res) => {
    res.json({ status: 200, msg: "test" });
}

const securityQuestionController = async (req, res) => {
    res.json({ status: 200, msg: "test" });
}
module.exports = {
    register,
    loginData,
    getuserFromTokenController,
    setMFAAuthCodeController,
    validatePageAccessController,
    securityQuestionController
}