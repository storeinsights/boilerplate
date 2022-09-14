//your app constants come here
const config = require("config");
module.exports = {
	CLIENT_CODES: config.get("app_config.client_code"),
	CLIENT_PLATFORM: ['WEB', 'APP'],
	APPLICATION_JSON: "application/json",
	JSON: "json",
	TEXT_XML: "text/xml",
	FORM_DATA: "multipart/form-data",
	X_WWW_FORM_URLENCODED: "application/x-www-form-urlencoded",
	LOGGING: "LOGGING",
	EVENT_EMIT: "EVENT_EMIT",
	DOC_DIRECTORY: "storage/tmp",
	DOC_ZIP_DIRECTORY: "storage/tmp/zip",
	DOCUMENT_TYPE: "",
	DOCUMENT_CATEGORY: "",
	DOCUMENT_SOURCE: "LOS",
	REQUEST_ID_PREFIX: "OFFER",
	DOCUMENT_SECTION: "",
	CURRENT_TIMESTAMP: "CURRENT_TIMESTAMP",
	DEFAULT_DATE_FORMAT: "YYYY-MM-DD HH:mm:ss",
	DEFAULT_OFFSET: 0,
	DEFAULT_LIMIT: 20,
	DEFAULT_ORDER_BY: "createdAt",
	DEFAULT_SORT_BY: "DESC",
	CSV: "CSV",
	EXCEL: "XLSL",
	CSV_EXTENSION: ".csv",
	EXCEL_EXTENSION: ".xlsx",
	HEADER_VALIDATOR_EXCEPTOR: ["CHECK_APPLICATION_HEALTH", "API_DOCUMENTATION"],
	ACTION: {
		CHECK_APPLICATION_HEALTH: "CHECK_APPLICATION_HEALTH",
		SAMPLE_DETAIL_FETCHED: "SAMPLE_DETAIL_FETCHED"
	},
	SEARCH_LIST: ["loan_code", "loanCode", "code"],
	EVENT: {
		"/": {
			GET: "API_DOCUMENTATION",
		},
		"/init": {
			GET: "CHECK_APPLICATION_HEALTH",
		},
		"/v1/sample": {
			GET: "SAMPLE_DETAIL_FETCHED",
		}
	}
};