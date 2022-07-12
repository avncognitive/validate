const approveRejectUserController = async (req, res) => {
    res.json({ status: 200, msg: "test" });
}
const addStationController = async (req, res) => {
    res.json({ status: 200, msg: "test" });
}
const addCompanyDataController = async (req, res) => {
    res.json({ status: 200, msg: "test" });
}
const updateStationStatusController = async (req, res) => {
    res.json({ status: 200, msg: "test" });
}

const editStationController = async (req, res) => {
    res.json({ status: 200, msg: "test" });
}

const userInfoController = async (req, res) => {
    res.json({ status: 200, msg: "test" });
}

const addRegionController = async (req, res) => {
    res.json({ status: 200, msg: "test" });
}
const getUserDetailsandAddController = async (req, res) => {
    res.json({ status: 200, msg: "test" });
}
const addRemoveStationsToCompanyController = async (req, res) => {
    res.json({ status: 200, msg: "test" });
}
const addRemoveStationsToUserController = async (req, res) => {
    res.json({ status: 200, msg: "test" });
}
const updateAccessPrivilegeController = async (req, res) => {
    res.json({ status: 200, msg: "test" });
}

const getTableDataDynamoDBController = async (req, res) => {
    res.json({ status: 200, msg: "test" });
}
const updateIoTDeviceInfoStateController = async (req, res) => {
    res.json({ status: 200, msg: "test" });
}
const updateIoTDeviceInfoDataController = async (req, res) => {
    res.json({ status: 200, msg: "test" });
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