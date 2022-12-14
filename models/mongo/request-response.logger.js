const MongoException = require('../../exceptions/mongo.expection'),
      mongoose = require('mongoose');
const { REQUEST_RESPONSE_LOGGER } = require('../../constants/boilerplate.config');
      
const RequestResponseLogger = new mongoose.Schema({
            uuid : {
                type : String,
                required : false
            },
            event : {
                type: String
            },
            identifier : {
                type: String
            },
            action : {
                type: String
            },
            headers :  {
                type : JSON,
                default : null
           },
            request :  {
                 type : JSON,
                 default : null
            },
            response : {
                type : JSON,
                default: null
            },
            syslogs :  {
                type : JSON,
                default : null
            },
},
{ timestamps: { createdAt: 'created_at', updatedAt : 'updated_at'} }
);
var Model = mongoose.model(`${REQUEST_RESPONSE_LOGGER}`,RequestResponseLogger);

async function _save(params){
        return new Promise(async (resolve, reject) => {
            try {   
                if(!params){
                    throw new MongoException(`no paramaters passed to save in ${REQUEST_RESPONSE_LOGGER} model`);
                }
                Model.create(params, function(err,record){
                    if(err) {
                        return reject(err);
                    }
                    resolve(record);
                });
            }
            catch(error){
                reject(error);
            }
        });
    }

module.exports = {
    save : _save,
    RequestResponseLogger : RequestResponseLogger
}