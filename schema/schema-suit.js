const Constants = require("../constants/appConstants");
const STRING = "string";
const INT = "int";
const DOUBLE = "double";
const OBJECT = "object";
const ARRAY = "array";

const AnyOfStringNull = [{ type: STRING }, { type: null }];

const AnyOfDoubleNull = [{ type: DOUBLE }, { type: null }];

const AnyOfIntNull = [{ type: INT }, { type: null }];

const AnyOfArrayNull = [{ type: ARRAY }, { type: null }];
module.exports = {
  fuzzySchema: {
    id: "/fuzzySchema",
    type: "object",
    required: ["full_name", "match_name"],
    properties: {
      full_name: { type: "string" },
      match_name: { type: "string" },
    },
  },
  header: {
    id: "/header",
    type: "object",
    required: ["client_code"],
    properties: {
      client_code: { type: "string", enum: Constants.CLIENT_CODES },
      client_platform: { type: "string", enum: Constants.CLIENT_PLATFORM },
    },
  },
  token: {
    id: '/header',
    type: 'object',
    required: ['Authorization'],
    properties: {
      Authorization: { type: 'string' },
    },
  },
  sample: {
    id: "/operatorCircle",
    type: "object",
    required: ["mobileNo"],
    properties: {
      mobileNo: { type: "string" },
    },
  }
};
