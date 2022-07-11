const loadash = require('lodash');
const crypto = require('crypto');
const { isArray } = require('lodash');
function validatingName(name) {
    let value = loadash.trim(name);
    let errorMsgName = '';
    let validateName = false;
    //console.log(loadash.size(value))
    if (!value) {
        errorMsgName = "Please enter a  name";
        validateName = false;
    }
    else if (loadash.size(value) < 2) {
        errorMsgName = "Please enter a valid name";
        validateName = false;
    }
    else {
        validateName = true;
    }
    return { errorMsgName, validateName }

}
function validatingEmail(email) {
    let value = loadash.trim(email);
    let errorMsgEmail = '';
    let validateEmail = false;
    //console.log(loadash.size(value))
    if (!value) {
        errorMsgEmail = "Please enter a  email";
        validateEmail = false;
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        errorMsgEmail = "Please enter a valid  eamil";
        validateEmail = false;
    }
    else {
        validateEmail = true;
    }

    return { errorMsgEmail, validateEmail }
}
function validatingPhone(phone) {
    let pattern = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
    let value = loadash.trim(phone);
    let errorMsgPhone = '';
    let validatePhone = false;
    if (!value) {
        errorMsgPhone = "Please enter a  phone number";
        validatePhone = false;
    }
    else if (!pattern.test(value.substring(1))) {
        errorMsgPhone = "Please enter a valid phone number";
        validatePhone = false;
    }
    else {
        validatePhone = true
    }
    return { errorMsgPhone, validatePhone }
}
function validatingPassword(password) {
    let re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    let value = loadash.trim(password);
    let errorMsgPassword = '';
    let validatePassword = false;
    if (!value) {
        errorMsgPassword = "Please enter a  password";
        validatePassword = false;
    } else if (loadash.size(value) < 8) {
        errorMsgPassword = "Value must be longer than 8 character";
        validatePassword = false;
    } else if (!re.test(value)) {
        errorMsgPassword = "Please enter a valid  password";
        validatePassword = false;
    } else {
        validatePassword = true;
    }
    return { errorMsgPassword, validatePassword }
}
function encryptHash(value) {
    const ciphertext = crypto.createHash('sha256').update(value, "A^D!F@12@Q40W$ERT").digest('hex');
    //let ciphertext = SHA256(value, process.env.REACT_APP_GENERAL_HASH);
    return ciphertext.toString();
};
function validatingCompanyName(comapnyNamename) {
    let value = loadash.trim(comapnyNamename);
    let errorMsgCompanyPassword = '';
    let validateCompanyName = false;
    let companyArr = ["40c2c5602e3b869e8680ad0caa1df5095d4a098c17b546b8f1310766a0d00751",
        "d9b5f58f0b38198293971865a14074f59eba3e82595becbe86ae51f1d9f1f65e",
        "36c1a2e8fa37eb683c0c4705bfa95b4791ffb1e4f19faef860003e58622bb409"]
    let dvalue = encryptHash(value);
    //console.log(dvalue)
    if (!value) {
        errorMsgCompanyPassword = "Please Choose a company";
        validateCompanyName = false;
    } else if (companyArr && loadash.indexOf(companyArr, dvalue, 0) === -1) {
        errorMsgCompanyPassword = "Company Id is not registered with us";
        validateCompanyName = false;
    } else {
        validateCompanyName = true;
    }
    return { errorMsgCompanyPassword, validateCompanyName }
}
function validatingIp(ip) {
    let value = loadash.trim(ip);
    let errorMsgIp = '';
    let validateIp = false;
    var regEx =
        /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)(\.(?!$)|$)){4}$/;
    if (!value) {
        errorMsgIp = "Please enter IP";
        validateIp = false;
    } else if (!value.match(regEx)) {
        errorMsgIp = "Please enter valid IP";
        validateIp = false;
    } else {
        validateIp = true;
    }
    return { errorMsgIp, validateIp }

}


function validatingTs(ts) {
    let value = ts;
    let errorMsgTs = '';
    let validateTs = false;
    if (!value || isNaN(value) || Number(value) < 0) {
        errorMsgTs = "TimeStamp is Invalid";
        validateTs = false;
    } else {
        validateTs = true;
    }
    return { errorMsgTs, validateTs }

}
function validatingCode(code) {
    let value = loadash.trim(code);
    let errorMsgCode = '';
    let validateCode = false;
    if (!value) {
        errorMsgCode = "Please Enter a  Code";
        validateCode = true
    } else {
        validateCode = true
    }
    return { errorMsgCode, validateCode }
}
function validatingQuestion(question) {
    let value = loadash.trim(question);
    let errorMsgQuestion = '';
    let validateQuestion = false;
    if (!value) {
        errorMsgQuestion = "Please Enter a  Question";
        validateQuestion = true
    } else {
        validateQuestion = true
    }
    return { errorMsgQuestion, validateQuestion }
}
function validatingPageId(pageId) {
    let value = loadash.trim(pageId);
    let errorMsgPageId = '';
    let validatePageId = false;
    if (!value) {
        errorMsgPageId = "Please Enter a  PageId";
        validatePageId = true
    } else {
        validatePageId = true
    }
    return { errorMsgPageId, validatePageId }
}

function validatingScheduleTime(time) {
    let value = loadash.trim(time);
    let errorMsgScheduleTime = '';
    let validateScheduleTime = false;
    let today = new Date();
    today = new Date(today.getTime() + 5 * 60000);
    if (!value) {
        errorMsgScheduleTime = "Please Enter a  Schedule Time";
        validateScheduleTime = true
    } else if (new Date(time) < today) {
        errorMsgScheduleTime = "Please Enter correct Date";
        validateScheduleTime = false;
    } else {
        validateScheduleTime = true
    }
    return { errorMsgScheduleTime, validateScheduleTime }
}

function validatingTimezone(TimeZone) {
    let value = loadash.trim(TimeZone);
    let errorMsgTimeZone = '';
    let validateTimeZone = false;
    if (!value) {
        errorMsgTimeZone = "Please Enter a Valid Time Zone";
        validateTimeZone = true;
    } else {
        validateTimeZone = true;
    }
    return { errorMsgTimeZone, validateTimeZone }
}

function validatingFilesize(Filesize) {
    let value = Filesize;
    let errorMsgFileSize = '';
    let validateFileSize = false;
    if (!value || isNaN(value) || Number(value) < 0) {
        errorMsgFileSize = "FileSize is Invalid";
        validateFileSize = false;
    } else {
        validateFileSize = true;
    }
    return { errorMsgFileSize, validateFileSize }
}

function validatingDestinationstations(station) {
    let value = station;
    let errorMsgStation = '';
    let validateStation = false;
    if (!value) {
        errorMsgStation = "Please Add Regions";
        validateStation = false;
    } else {
        validateStation = true;
    }
    return { errorMsgStation, validateStation }
}

function validatingDestinationStationsIds(id) {
    let value = id;
    let errorMsgDestinationIds = '';
    let validateDestinationIds = false;
    if (!value || isNaN(value) || Number(value) < 0) {
        errorMsgDestinationIds = "FileSize is Invalid";
        validateDestinationIds = false;
    } else {
        validateDestinationIds = true;
    }
    return { errorMsgDestinationIds, validateDestinationIds }
}
function validatingVersion(version) {
    let value = version;
    let errorMsgVersion = '';
    let validateVersion = false;
    if (!value || isNaN(value) || Number(value) < 0) {
        errorMsgVersion = "Version is Invalid";
        validateVersion = false;
    } else {
        validateVersion = true;
    }
    return { errorMsgVersion, validateVersion }
}
function validatingTransferVia(val) {
    let value = val;
    let errorMsgTransferVia = '';
    let validateTransferVia = false;
    if (!value) {
        errorMsgTransferVia = "Please Add Transfer Via";
        validateTransferVia = false;
    } else {
        validateTransferVia = true;
    }
    return { errorMsgTransferVia, validateTransferVia }
}

function validatingContentType(contenType) {
    let value = contenType;
    let errorMsgContenType = '';
    let validateContentType = false;
    if (!value) {
        errorMsgContenType = "Please Add Content Type";
        validateContentType = false;
    } else {
        validateContentType = true;
    }
    return { errorMsgContenType, validateContentType }
}

function validatingRecordIds(ids) {
    let value = ids;
    let errorMsgIds = '';
    let validateIds = false;
    if (!isArray(ids) || ids.length === 0) {
        errorMsgIds = "Please enter Id";
        validateIds = false;
    } else {
        validateIds = true;
    }
    return { errorMsgIds, validateIds }

}
function validatingTotalRecords(totalRecords) {
    let value = totalRecords;
    let errorMsgTotalRecords = '';
    let validateTotalRecords = false;
    if (!value || isNaN(value) || Number(value) < 0) {
        errorMsgTotalRecords = "Total records cannot be 0";
        validateTotalRecords = false;
    } else {
        validateTotalRecords = true;
    }
    return { errorMsgTotalRecords, validateTotalRecords }
}
function validatingFileName(fileName) {
    let value = loadash.trim(fileName);
    let errorMsgFileName = '';
    let validateFileName = false;
    if (!value) {
        errorMsgFileName = "Please Enter File Name";
        validateFileName = false;
    } else {
        validateFileName = true;
    }
    return { errorMsgFileName, validateFileName }
}
// function validatingAccessToken(token) {

// }




// function validateCompanyId() {

// }
// function validateUser() {

// }


// function validateBroadcastImmediate() {

// }

// function validateTransferVia() {

// }
// function validateContentType() {

// }
// function validateId() {

// }

// function validateRescheduleTime() {

// }
// function validateRecordIds() {

// }
// function validateTotalRecords() {

// }
// function validateFileName() {

// }
// function validateXmlData() {

// }



module.exports = {
    validatingName,
    validatingEmail,
    validatingPhone,
    validatingPassword,
    validatingCompanyName,
    validatingIp,
    validatingTs,
    validatingCode,
    validatingQuestion,
    validatingPageId,
    validatingScheduleTime,
    validatingTimezone,
    validatingFilesize,
    validatingDestinationstations,
    validatingDestinationStationsIds,
    validatingVersion,
    validatingTransferVia,
    validatingContentType,
    validatingRecordIds,
    validatingTotalRecords,
    validatingFileName,
    //validatingAccessToken,
    // validateCompanyId,

    // validateUser,



    // validateBroadcastImmediate,
    // validateId,//message  new Api
    // validateRescheduleTime, //message  new Api


    // validateXmlData///messageHistory newApi
};