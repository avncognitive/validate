const approveRejectUserController = async (req, res) => {
    console.log("mmmm");
    res.json({ status: 200, msg: "testmm" });
}
const addStationController = async (req, res) => {
    console.log("mmmm");
    res.json({ status: 200, msg: "testmm" });
}
const addCompanyDataController = async (req, res) => {
    console.log("mmmm");
    res.json({ status: 200, msg: "testmm" });
}
const updateStationStatusController = async (req, res) => {
    console.log("mmmm");
    res.json({ status: 200, msg: "testmm" });
}

const editStationController = async (req, res) => {
    console.log("mmmm");
    res.json({ status: 200, msg: "testmm" });
}

const userInfoController = async (req, res) => {
    console.log("mmmm");
    res.json({ status: 200, msg: "testmm" });
}

const addRegionController = async (req, res) => {
    console.log("mmmm");
    res.json({ status: 200, msg: "testmm" });
}
const getUserDetailsandAddController = async (req, res) => {
    console.log("mmmm");
    res.json({ status: 200, msg: "testmm" });
}
const addRemoveStationsToCompanyController = async (req, res) => {
    console.log("mmmm");
    res.json({ status: 200, msg: "testmm" });
}
const addRemoveStationsToUserController = async (req, res) => {
    console.log("mmmm");
    res.json({ status: 200, msg: "testmm" });
}
const updateAccessPrivilegeController = async (req, res) => {
    console.log("mmmm");
    res.json({ status: 200, msg: "testmm" });
}

const getTableDataDynamoDBController = async (req, res) => {
    console.log("mmmm");
    res.json({ status: 200, msg: "testmm" });
}
const updateIoTDeviceInfoStateController = async (req, res) => {
    console.log("mmmm");
    res.json({ status: 200, msg: "testmm" });
}
const updateIoTDeviceInfoDataController = async (req, res) => {
    console.log("mmmm");
    res.json({ status: 200, msg: "testmm" });
}
// const stationsController = async(req,res)=>{
//     console.log(req.body.region)
//     res.json({ status: 200, msg: req.body.region })
// }
module.exports = {
    approveRejectUserController,
    addStationController,
    addCompanyDataController,
    updateStationStatusController,
    editStationController,
    userInfoController,
    addRegionController,
    getUserDetailsandAddController,
    addRemoveStationsToCompanyController,
    addRemoveStationsToUserController,
    updateAccessPrivilegeController,
    getTableDataDynamoDBController,
    updateIoTDeviceInfoStateController,
    updateIoTDeviceInfoDataController
    //stationsController
}