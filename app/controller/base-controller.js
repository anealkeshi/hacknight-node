const ResponseHandler = require('../handler/response-handler');
const BaseAutoBindedClass = require('../base/base-autobind');

class BaseController extends BaseAutoBindedClass {
    constructor() {
        super();
        if (new.target === BaseController) {
            throw new TypeError("Cannot construct BaseController instances directly");
        }
        this._responseHandler = ResponseHandler;
    }

    getAll(req, res) {

    }

    get(req, res) {

    }

    create(req, res) {

    }

    update(req, res) {

    }

    remove(req, res) {

    }
}
module.exports = BaseController;
