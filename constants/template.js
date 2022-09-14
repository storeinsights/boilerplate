//your app templates come here
const CONSTANT = require('../constants/appConstants');
module.exports = {
    CMOT : {
        INDEX : `{
            "exchange_type": "{{#? $root.clean(this,'exchange_type')}}",
            "vendor": "{{#? $root.clean(this,'vendor')}}",
            "master_code": "{{#? $root.clean(this,'master_code')}}"
        }`,
        COMPANY : `{
            "vendor": "{{#? $root.clean(this,'vendor')}}",
            "master_code": "{{#? $root.clean(this,'master_code')}}"
        }`,
        SECTOR : `{
            "vendor": "{{#? $root.clean(this,'vendor')}}",
            "master_code": "{{#? $root.clean(this,'master_code')}}"
        }`
    },
    QUERY_MAPPER: {
        CMOT : {
            INDEX : `{
                "exchange": "{{#? $root.clean(this,'exchange_type')}}"
            }`,
            COMPANY : `{}`,
            SECTOR : `{}`
        }
    }
}

