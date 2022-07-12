const Router = require("express-promise-router");
const router = Router({ mergeParams: true });

const adminController = require("../controllers/admin.controller");

const {
    approveRejectUserValidate,
    addStationValidate,
    addCompanyDataValidate,
    updateStationStatusValidate,
    editStationValidate,
    userInfoValidate,
    addRegionValidate,
    getUserDetailsandAddValidate,
    addRemoveStationsToCompanyValidate,
    addRemoveStationsToUserValidate,
    updateAccessPrivilegeValidate,
    getTableDataDynamoDBValidate,
    updateIoTDeviceInfoStateValidate,
    updateIoTDeviceInfoDataValidate
    // stationsValidate
} = require('../middlewares/validators/adminValidator');

module.exports = () => {
    router.post(
        "/approveRejectUser",
        approveRejectUserValidate,
        adminController.approveRejectUserController
    );
    router.post(
        "/addStation",
        addStationValidate,
        adminController.addStationController
    );
    router.post(
        "/addCompanyData",
        addCompanyDataValidate,
        adminController.addCompanyDataController
    );
    router.post(
        "/updateStationStatus",
        updateStationStatusValidate,
        adminController.updateStationStatusController
    );
    router.post(
        "/editStation",
        editStationValidate,
        adminController.editStationController
    );
    router.post(
        "/userInfo",
        userInfoValidate,
        adminController.userInfoController
    );
    router.post(
        "/addRegion",
        addRegionValidate,
        adminController.addRegionController
    );
    router.post(
        "/getUserDetailsandAdd",
        getUserDetailsandAddValidate,
        adminController.getUserDetailsandAddController
    );

    router.post(
        "/addRemoveStationsToCompany",
        addRemoveStationsToCompanyValidate,
        adminController.addRemoveStationsToCompanyController
    );
    router.post(
        "/addRemoveStationsToUser",
        addRemoveStationsToUserValidate,
        adminController.addRemoveStationsToUserController
    );

    router.post(
        "/updateAccessPrivilege",
        updateAccessPrivilegeValidate,
        adminController.updateAccessPrivilegeController
    );


    router.post(
        "/getTableDataDynamoDB",
        getTableDataDynamoDBValidate,
        adminController.getTableDataDynamoDBController
    );

    router.post(
        "/updateIoTDeviceInfoStateValidate",
        updateIoTDeviceInfoStateValidate,
        adminController.updateIoTDeviceInfoStateController
    );

    router.post(
        "/updateIoTDeviceInfoData",
        updateIoTDeviceInfoDataValidate,
        adminController.updateIoTDeviceInfoDataController
    );
    // router.post(
    //     "/regions/stations",
    //     stationsValidate,
    //     adminController.stationsController
    // );
    return router;
}