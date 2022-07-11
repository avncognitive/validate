
const { validatingName,
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
    validatingFileName
} = require('./func');
let { errorMsgName, validateName } = validatingName("a");
console.log(errorMsgName);
console.log(validateName);


let { errorMsgEmail, validateEmail } = validatingEmail("a@gmail.com")
console.log(errorMsgEmail);
console.log(validateEmail);


let { errorMsgPhone, validatePhone } = validatingPhone("11111111111")
console.log(errorMsgPhone);
console.log(validatePhone);

let { errorMsgPassword, validatePassword } = validatingPassword("kkk@hhJ9")
console.log(errorMsgPassword);
console.log(validatePassword);

let { errorMsgCompanyPassword, validateCompanyName } = validatingCompanyName("Xperi-2021-hdradio")
console.log(errorMsgCompanyPassword);
console.log(validateCompanyName);

let { errorMsgIp, validateIp } = validatingIp("80.80.80.80")
console.log(errorMsgIp);
console.log(validateIp);

let { errorMsgTs, validateTs } = validatingTs(9999888)
console.log(errorMsgTs);
console.log(validateTs);

let { errorMsgCode, validateCode } = validatingCode("mmm")
console.log(errorMsgCode);
console.log(validateCode);

let { errorMsgQuestion, validateQuestion } = validatingQuestion("mmm")
console.log(errorMsgQuestion);
console.log(validateQuestion);

let { errorMsgPageId, validatePageId } = validatingPageId("a/b")
console.log(errorMsgPageId);
console.log(validatePageId);

let { errorMsgScheduleTime, validateScheduleTime } = validatingScheduleTime("Mon Aug 22 2022 14:55:00")
console.log(errorMsgScheduleTime);
console.log(validateScheduleTime);

let { errorMsgTimeZone, validateTimeZone } = validatingTimezone("America/Toronto")
console.log(errorMsgTimeZone);
console.log(validateTimeZone);

let { errorMsgFileSize, validateFileSize } = validatingFilesize(0.800)
console.log(errorMsgFileSize);
console.log(validateFileSize);

let { errorMsgStation, validateStation } = validatingDestinationstations(0.800)
console.log(errorMsgStation);
console.log(validateStation);

let { errorMsgDestinationIds, validateDestinationIds } = validatingDestinationStationsIds(0.800)
console.log(errorMsgDestinationIds);
console.log(validateDestinationIds);

let { errorMsgVersion, validateVersion } = validatingVersion(0.800)
console.log(errorMsgVersion);
console.log(validateVersion);

let { errorMsgTransferVia, validateTransferVia } = validatingTransferVia("http")
console.log(errorMsgTransferVia);
console.log(validateTransferVia);

let { errorMsgContenType, validateContentType } = validatingContentType("aaplicatiomn/JSON")
console.log(errorMsgContenType);
console.log(validateContentType);


let { errorMsgIds, validateIds } = validatingRecordIds([])
console.log(errorMsgIds);
console.log(validateIds);

let { errorMsgTotalRecords, validateTotalRecords } = validatingTotalRecords(9)
console.log(errorMsgTotalRecords);
console.log(validateTotalRecords);

let { errorMsgFileName, validateFileName } = validatingFileName("")
console.log(errorMsgFileName);
console.log(validateFileName);
//console.log(validateEmail("a@gmail.com"))