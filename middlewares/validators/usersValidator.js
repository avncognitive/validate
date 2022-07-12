const { check, validationResult } = require('express-validator');
const { query } = require('express-validator');

exports.createMessageValidate = [
    check('scheduletime')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Schedule Time Cannot Be Empty')
        .bail(),
    check('timezone')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Timezone Cannot Be Empty')
        .isLength({ min: 2 })
        .withMessage('Value must be longer than 2 characters')
        .bail(),
    check('filename')
        .trim()
        .not()
        .isEmpty()
        .withMessage('File Name Cannot Be Empty')
        .isLength({ min: 2 })
        .withMessage('Value must be longer than 2 characters')
        .bail(),
    check('filesize')
        .trim()
        .not()
        .isEmpty()
        .withMessage('phone Cannot Be Empty')
        .isFloat({ gt: 0 })
        .withMessage('Please Enter Valid File Size')
        .bail(),
    check('destinationstations')
    .custom((list) => (typeof list === 'object' && list && Array.isArray(list) && list.length ? true : false))
    .withMessage('Destinationstations cannot be empty')
      .bail(),
    check('destinationstationsIds')
    .custom((list) => (typeof list === 'object' && list && Array.isArray(list) && list.length ? true : false))
    .withMessage('destinationstationsIds cannot be empty')
      .bail(),
    check('broadcastimmediate')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Broadcastimmediate Cannot Be Empty')
        .isIn([true, false])
        .withMessage('Please Enter Valid Broadcastimmediate')
        .bail(),
    check('version')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Version Cannot Be Empty')
        .isFloat({ gt: 0 })
        .withMessage('Please Enter Valid Version')
        .bail(),
    check('transferVia')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Transfer Via Cannot Be Empty')
        .isLength({ min: 2 })
        .withMessage('Please Enter Valid Transfer Via')
        .bail(),
    check('contentType')
        .trim()
        .not()
        .isEmpty()
        .withMessage('contentType Cannot Be Empty')
        .isLength({ min: 2 })
        .withMessage('Please Enter Valid Content Type')
        .bail(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty())
            return res.status(422).json({ errors: errors.array() });
        next();
    },
]

exports.createMessageCustomValidate = [
    check('timezone')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Timezone Cannot Be Empty')
        .isLength({ min: 2 })
        .withMessage('Value must be longer than 2 characters')
        .bail(),
    check('destinationstations')
        .custom((list) => (typeof list === 'object' && list && Array.isArray(list) && list.length ? true : false))
        .withMessage('Destinationstations cannot be empty')
        .bail(),
    check('destinationstationsIds')
        .custom((list) => (typeof list === 'object' && list && Array.isArray(list) && list.length ? true : false))
        .withMessage('destinationstationsIds cannot be empty')
        .bail(),
    check('broadcastimmediate')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Broadcastimmediate Cannot Be Empty')
        .isIn([true, false])
        .withMessage('Please Enter Valid Broadcastimmediate')
        .bail(),
    check('version')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Version Cannot Be Empty')
        .isFloat({ gt: 0 })
        .withMessage('Please Enter Valid Version')
        .bail(),
    check('transferVia')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Transfer Via Cannot Be Empty')
        .isLength({ min: 2 })
        .withMessage('Please Enter Valid Transfer Via')
        .bail(),
    check('deviceSerial')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Device Serial No. Cannot Be Empty')
        .isLength({ min: 2 })
        .withMessage('Please Enter Valid Device Serial No.')
        .bail(),
    check('seqNo')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Seq No. Cannot Be Empty')
        .isInt({ min: 1 })
        .withMessage('Please Enter Valid Device Seq No.')
        .bail(),
    check('device_on')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Device On Cannot Be Empty')
        .isLength({ min: 2 })
        .withMessage('Please Enter Valid device on No.')
        .bail(),
        check('hour')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Hour Cannot Be Empty')
        .isInt({ min: 1 })
        .withMessage('Please Enter Valid Hour')
        .bail(),
        check('minutes')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Minutes Cannot Be Empty')
        .isInt({ min: 1 })
        .withMessage('Please Enter Valid Minutes')
        .bail(),
        check('month')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Month Cannot Be Empty')
        .isInt({ min: 1 })
        .withMessage('Please Enter Valid Month')
        .bail(),
        check('year')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Year Cannot Be Empty')
        .isInt({ min:2022 })
        .withMessage('Please Enter Valid Year')
        .bail(),
        check('_date')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Date Cannot Be Empty')
        .isInt({ min:1,max:31 })
        .withMessage('Please Enter Valid Date')
        .bail(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty())
            return res.status(422).json({ errors: errors.array() });
        next();
    },
]


exports.updateMessageStatusValidate=[
    check('id')
        .custom((list) => (typeof list === 'object' && list && Array.isArray(list) && list.length ? true : false))
        .withMessage('Id cannot be empty')
        .bail(),
    check('code')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Code Cannot Be Empty')
        .isInt()
        .isIn([2, 5])
        .withMessage('Please Enter Valid Code')
        .bail(),
        (req, res, next) => {
            const errors = validationResult(req);
            if (!errors.isEmpty())
                return res.status(422).json({ errors: errors.array() });
            next();
        },
]

