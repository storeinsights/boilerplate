const HttpProxy = require('../proxy/http-proxy'); 
const API = require('../constants/api-suit.json');
const HeaderValidator = require('../validators/header.validator');
const { token } = require('../schema/schema-suit');
const { InvalidAuthenticationException } = require('../exceptions');

class AuthBiz {
	constructor() {}

	auth(request) {
        return new Promise(async (resolve, reject) => {
			try {
                let headers = {
                    'Authorization': request.headers.authorization
                }
                    
                const validator = new HeaderValidator(token);
                validator.create({...headers});
                const authProxy = new HttpProxy(API.AUTH_USER);
                authProxy.set_headers(headers);
                console.log(headers);
                const result = await authProxy.make_request();
                console.log("Ory HIT", result);
                if (!result.success) {
                    throw new InvalidAuthenticationException();
                } else {
                    request.data = {};
                    request.data.device_id = result.data['devices.device_id'];
                    request.data.user_id = result.data.user_id;
                    delete result.data;
                    resolve(request);
                }
                resolve(request);
            } catch (error) {
                console.log(error);
                return reject(error);
            }
		});
    }
}


module.exports = AuthBiz;
