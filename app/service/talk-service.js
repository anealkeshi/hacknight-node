const Talk = require('../model/talk');
const BaseAutoBindedClass = require('../base/base-autobind');

class TalkService extends BaseAutoBindedClass {
    constructor() {
        super();
    }

    createNewTalk(talk, callback) {
      Talk.schemaModel.create(talk)
              .then((talk) => {
                  return talk;
              })
              .then((saved) => {
                  callback.onSuccess(saved);
              })
              .catch((error) => {
                  callback.onError(error);
              });
    }

    getAllTalks(req, callback) {
        let data = req.body;
        new Promise(function (resolve, reject) {
            Talk.schemaModel.find({}, function (err, talks) {
                if (err !== null) {
                    reject(err);
                } else {
                    resolve(talks);
                }
            });
        })
            .then((talks) => {
                callback.onSuccess(talks);
            })
            .catch((error) => {
                callback.onError(error);
            });
    }
}

module.exports = TalkService;
