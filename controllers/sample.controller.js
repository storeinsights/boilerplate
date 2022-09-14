const RequestValidator = require('../validators/request.validator');
const ResponseDecorator = require('../validators/response.decorator');
const CONSTANTS = require('../constants/appConstants');
const SampleBiz = require('../biz/sample.biz');
const { sample } = require('../schema/schema-suit');
const Auth = require('../biz/auth.biz');
const auth = new Auth();

class SampleController {
	register(app) {
		app.route('/v1/sample')
		.post(async (request, response, next) => {
			try {
				const { client_code } = request.header;

				// ORY Auth
				await auth.auth(request);
				
                const validator = new RequestValidator(sample);
				validator.create({...request.body});

				const sampleBiz = new SampleBiz();
				const _result = await sampleBiz.getSampleDetail({...request.body});
				
				const responseDecorator = new ResponseDecorator({...request.params,...request.query});
				const result = responseDecorator.decorate(_result);
				
				response.json({
					result,
				}, `sample detail fetched successfully.`, {
					services: [
						CONSTANTS.LOGGING
					],
					data: { 
						action : CONSTANTS.ACTION.SAMPLE_DETAIL_FETCHED,
						request: {...request.params,...request.query,client_code},                        
						response: result
					}
				});
			} catch (error) {
				next(error);
			}
		})
	}
}

module.exports = SampleController;
