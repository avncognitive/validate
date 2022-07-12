const createMessageController = async (req, res) => {
    res.json({ status: 200, msg: "test" });
}
const createMessageCustomController = async (req, res) => {
    res.json({ status: 200, msg: "test" });
}
const updateMessageStatusController = async (req, res) => {
    res.json({ status: 200, msg: "test" });
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