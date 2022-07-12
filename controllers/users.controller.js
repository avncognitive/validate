const createMessageController = async (req, res) => {
    console.log("mmmm");
    res.json({ status: 200, msg: "testmm" });
}
const createMessageCustomController = async (req, res) => {
    console.log("mmmm");
    res.json({ status: 200, msg: "testmm" });
}
const updateMessageStatusController = async (req, res) => {
    console.log("mmmm");
    res.json({ status: 200, msg: "testmm" });
}
// const rescheduleMessageController = async (req, res) => {
//     console.log("mmmm");
//     res.json({ status: 200, msg: "testmm" });
// }
module.exports = {
    createMessageController,
    createMessageCustomController,
    updateMessageStatusController,
    
}