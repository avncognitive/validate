const register = async (req, res) => {
    console.log("mmmm");
    res.json({ status: 200, msg: "testmm" });
}

const loginData = async (req, res) => {
    console.log("mmmm");
    res.json({ status: 200, msg: "testmm" });
}
const getuserFromTokenController = async (req, res) => {
    console.log("mmmm");
    res.json({ status: 200, msg: "testmm" });
}
const setMFAAuthCodeController = async (req, res) => {
    console.log("mmmm");
    res.json({ status: 200, msg: "testmm" });
}

const validatePageAccessController = async (req, res) => {
    console.log("mmmm");
    res.json({ status: 200, msg: "testmm" });
}

const securityQuestionController = async (req, res) => {
    console.log("mmmm");
    res.json({ status: 200, msg: "testmm" });
}
module.exports = {
    register,
    loginData,
    getuserFromTokenController,
    setMFAAuthCodeController,
    validatePageAccessController,
    securityQuestionController
}