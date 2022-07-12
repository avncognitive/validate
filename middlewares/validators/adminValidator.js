const { check, validationResult } = require('express-validator');

exports.approveRejectUserValidate = [
  check('email')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Email Cannot Be Empty')
    .isEmail()
    .withMessage('Invalid email address!')
    .bail(),
  check('state')
    .trim()
    .not()
    .isEmpty()
    .withMessage('State Cannot Be Empty')
    .isIn(['true', 'false'])
    .withMessage('Invalid state choose"true/false"'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({ errors: errors.array() });
    next();
  },
];

exports.addStationValidate = [
  check('id')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Id Cannot Be Empty')
    .isInt({ min: 1 })
    .withMessage('Id Cannot be 0 or less than 0')
    .bail(),
  check('region')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Region Cannot Be Empty')
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
  check('call_sign')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Call Sign Cannot Be Empty')
    .isLength({ min: 2 })
    .withMessage('Value must be longer than 2 characters')
    .bail(),
  check('frequency')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Frequency Cannot Be Empty')
    .isFloat({ min: 1 })
    .withMessage('Id Cannot be 0 or less than 0')
    .bail(),
  check('ip')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Ip Cannot Be Empty')
    .isIP()
    .withMessage('Please enter valid IP')
    .bail(),
  check('outip')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Out Ip Cannot Be Empty')
    .isIP()
    .withMessage('Please enter valid Out IP')
    .bail(),
  check('bit_rate')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Bit Rate Cannot Be Empty')
    .isInt({ min: 1 })
    .withMessage('Bit Rate Cannot be 0 or less than 0')
    .bail(),
  check('port')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Out Port Cannot Be Empty')
    .isPort()
    .withMessage('Please enter valid Port')
    .bail(),
  check('sshport')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Out SSH Port Cannot Be Empty')
    .isPort()
    .withMessage('Please enter valid SSH  Port')
    .bail(),
  check('destination')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Destination Cannot Be Empty')
    .isLength({ min: 2 })
    .withMessage('Value must be longer than 2 characters')
    .bail(),
  check('admin_name')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Admin Name Cannot Be Empty')
    .isLength({ min: 2 })
    .withMessage('Value must be longer than 2 characters')
    .bail(),
  check('admin_email')
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
];

exports.addCompanyDataValidate = [
  check('company_name')
    .trim()
    .not()
    .isEmpty()
    .withMessage('company Name Cannot Be Empty')
    .isLength({ min: 2 })
    .withMessage('Value must be longer than 2 characters')
    .bail(),
  check('company_id')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Company Id Cannot Be Empty')
    .isLength({ min: 2 })
    .withMessage('Value must be longer than 2 characters')
    .bail(),
  check('company_address')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Company Address Cannot Be Empty')
    .isLength({ min: 10 })
    .withMessage('Value must be longer than 10 characters')
    .bail(),
  check('admin_email')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Email Cannot Be Empty')
    .isEmail()
    .withMessage('Invalid email address!')
    .bail(),
  check('fae_email')
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

exports.updateStationStatusValidate = [
  check('regionName')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Region Name Cannot Be Empty')
    .bail(),
  check('stationid')
    .trim()
    .not()
    .isEmpty()
    .withMessage('station Id Cannot Be Empty')
    .bail(),
  check('status')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Status Cannot Be Empty')
    .isIn(['true', 'false'])
    .withMessage('Invalid state choose"true/false"')
    .bail(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({ errors: errors.array() });
    next();
  },

]

exports.editStationValidate = [
  check('stationid')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Id Cannot Be Empty')
    .bail(),
  check('regionName')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Region Cannot Be Empty')
    .bail(),
  check('stationname')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Station Name Cannot Be Empty')
    .isLength({ min: 2 })
    .withMessage('Value must be longer than 2 characters')
    .bail(),
  check('callSign')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Call Sign Cannot Be Empty')
    .isLength({ min: 2 })
    .withMessage('Value must be longer than 2 characters')
    .bail(),
  check('frequency')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Frequency Cannot Be Empty')
    .isFloat({ min: 1 })
    .withMessage('Id Cannot be 0 or less than 0')
    .bail(),
  check('ip')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Ip Cannot Be Empty')
    .isIP()
    .withMessage('Please enter valid IP')
    .bail(),
  check('outboundip')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Out Ip Cannot Be Empty')
    .isIP()
    .withMessage('Please enter valid Out IP')
    .bail(),
  check('bitRate')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Bit Rate Cannot Be Empty')
    .isInt({ min: 1 })
    .withMessage('Bit Rate Cannot be 0 or less than 0')
    .bail(),
  check('port')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Out Port Cannot Be Empty')
    .isPort()
    .withMessage('Please enter valid Port')
    .bail(),
  check('sshport')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Out SSH Port Cannot Be Empty')
    .isPort()
    .withMessage('Please enter valid SSH  Port')
    .bail(),
  check('destination')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Destination Cannot Be Empty')
    .isLength({ min: 2 })
    .withMessage('Value must be longer than 2 characters')
    .bail(),
  check('adminname')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Admin Name Cannot Be Empty')
    .isLength({ min: 2 })
    .withMessage('Value must be longer than 2 characters')
    .bail(),
  check('adminemail')
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

exports.userInfoValidate = [
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

exports.addRegionValidate = [
  check('regionName')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Region Cannot Be Empty')
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

exports.getUserDetailsandAddValidate = [
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
    .withMessage('Company Name Cannot Be Empty')
    .isLength({ min: 2 })
    .withMessage('Value must be longer than 2 characters')
    .bail(),
  check('approved')
    .trim()
    .not()
    .isEmpty()
    .withMessage('State Cannot Be Empty')
    .isIn(['true', 'false'])
    .withMessage('Invalid state choose"true/false"')
    .bail(),
  check('access_list')
    .custom((list) => (typeof list === 'object' && list && Array.isArray(list) && list.length ? true : false))
    .withMessage('Access List cannot be empty')
    .bail(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({ errors: errors.array() });
    next();
  },
]

exports.addRemoveStationsToCompanyValidate = [
  check('company')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Company Name Cannot Be Empty')
    .isLength({ min: 2 })
    .withMessage('Value must be longer than 2 characters')
    .bail(),
  check('option')
    .trim()
    .not()
    .isEmpty()
    .withMessage('State Cannot Be Empty')
    .isIn(['allocate', 'remove'])
    .withMessage('Invalid state choose"allocate/remove"')
    .bail(),
  check('stations')
    .custom((list) => (typeof list === 'object' && list && Array.isArray(list) && list.length ? true : false))
    .withMessage('Station List cannot be empty')
    .bail(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({ errors: errors.array() });
    next();
  },
]

exports.addRemoveStationsToUserValidate = [
  check('email')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Email Cannot Be Empty')
    .isEmail()
    .withMessage('Invalid email address!')
    .bail(),
  check('option')
    .trim()
    .not()
    .isEmpty()
    .withMessage('State Cannot Be Empty')
    .isIn(['allocate', 'remove'])
    .withMessage('Invalid state choose"allocate/remove"')
    .bail(),
  check('stations')
    .custom((list) => (typeof list === 'object' && list && Array.isArray(list) && list.length ? true : false))
    .withMessage('Station List cannot be empty')
    .bail(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({ errors: errors.array() });
    next();
  },
]

exports.updateAccessPrivilegeValidate = [
  check('email')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Email Cannot Be Empty')
    .isEmail()
    .withMessage('Invalid email address!')
    .bail(),
  check('accessList')
    .custom((list) => (typeof list === 'object' && list && Array.isArray(list) && list.length ? true : false))
    .withMessage('Access List cannot be empty')
    .bail(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({ errors: errors.array() });
    next();
  },
]

exports.getTableDataDynamoDBValidate=[
  check('tableName')
  .trim()
  .not()
  .isEmpty()
  .withMessage('Table Name Cannot Be Empty')
 .bail(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({ errors: errors.array() });
    next();
  },
]

exports.updateIoTDeviceInfoStateValidate=[
  check('deviceId')
  .trim()
  .not()
  .isEmpty()
  .withMessage('Device Id  Cannot Be Empty')
 .bail(),
 check('state')
    .trim()
    .not()
    .isEmpty()
    .withMessage('State Cannot Be Empty')
    .isIn([true, false])
    .withMessage('Invalid state choose"true/false"')
    .bail(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({ errors: errors.array() });
    next();
  },
]

exports.updateIoTDeviceInfoDataValidate=[
  check('deviceId')
  .trim()
  .not()
  .isEmpty()
  .withMessage('Device Id  Cannot Be Empty')
 .bail(),
 (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({ errors: errors.array() });
    next();
  },

]
// exports.stationsValidate = [
//   check('region')
//   .custom((value,{req, loc, path}) => {
//     if (req.body.region) {
//        if(req.body.region.length<2)
//         throw new Error('Value must be longer than 2 characters');
//     } else {
//       console.log( req.body)
//       req.body.region = true 
//     }
// }),
//   (req, res, next) => {
//    const errors = validationResult(req);
//     if (!errors.isEmpty())
//       return res.status(422).json({ errors: errors.array() });
//     next();
   
//   },

// ]