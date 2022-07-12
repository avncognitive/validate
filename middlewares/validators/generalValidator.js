const { check, validationResult } = require('express-validator');
const { query } = require('express-validator');
exports.registerValidate = [
    check('email')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Email Cannot Be Empty')
        .isEmail()
        .withMessage('Invalid email address!')
        .bail(),
    check('companyname')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Company Cannot Be Empty')
        .isLength({ min: 2 })
        .withMessage('Value must be longer than 2 characters')
        .bail(),
    check('name')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Name Cannot Be Empty')
        .isLength({ min: 2 })
        .withMessage('Value must be longer than 2 characters')
        .bail(),
    check('phone')
        .trim()
        .not()
        .isEmpty()
        .withMessage('phone Cannot Be Empty')
        .isMobilePhone()
        .withMessage('Please Enter Valid Phone Number')
        .bail(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty())
            return res.status(422).json({ errors: errors.array() });
        next();
    },
];


exports.loginDataValidate = [
    check('email')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Email Cannot Be Empty')
        .isEmail()
        .withMessage('Invalid email address!')
        .bail(),
    check('ts')
        .trim()
        .not()
        .isEmpty()
        .withMessage('TimeStamp Cannot Be Empty')
        .bail(),
    check('access_token')
        .trim()
        .not()
        .isEmpty()
        .withMessage('accesstoken Cannot Be Empty')
        .bail(),
    check('ip')
        .trim()
        .not()
        .isEmpty()
        .withMessage('IP address Cannot Be Empty')
        .isIP()
        .withMessage('Invalid IP address!')
        .bail(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty())
            return res.status(422).json({ errors: errors.array() });
        next();
    },
]

exports.getuserFromTokenValidate = [
    query('token')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Token Cannot Be Empty')
        .bail(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty())
            return res.status(422).json({ errors: errors.array() });
        next();
    },
]

exports.setMFAAuthCodeValidate = [
    check('email')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Email Cannot Be Empty')
        .isEmail()
        .withMessage('Invalid email address!')
        .bail(),
    check('code')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Code Cannot Be Empty')
        .isLength({ min: 2 })
        .withMessage('Value must be longer than 2 characters')
        .bail(),
    check('question')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Question Cannot Be Empty')
        .isLength({ min: 2 })
        .withMessage('Value must be longer than 2 characters')
        .bail(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty())
            return res.status(422).json({ errors: errors.array() });
        next();
    },
]

exports.validatePageAccessValidate = [
    check('page_id')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Page id Cannot Be Empty')
        .isLength({ min: 2 })
        .withMessage('Value must be longer than 2 characters')
        .bail(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty())
            return res.status(422).json({ errors: errors.array() });
        next();
    },
]

exports.securityQuestionValidate = [
    check('email')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Email Cannot Be Empty')
        .isEmail()
        .withMessage('Invalid email address!')
        .bail(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty())
            return res.status(422).json({ errors: errors.array() });
        next();
    },
]