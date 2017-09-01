const BaseController = require('./base-controller');
const TalkService = require('../service/talk-service');
var talk = require('../model/talk');


class TalkController extends BaseController {
    constructor() {
        super();
        this._talkService = new TalkService();
    }

    getAll(req, res) {
       this._talkService.getAllTalks(req, this._responseHandler.getDefaultResponseHandler(res));
    }

    create(req, res, next) {
      var talkEntity = talk.entity;
      talkEntity.topic = req.body.topic;
      talkEntity.description = req.body.description;
      talkEntity.presenter = req.body.presenter;
      talkEntity.email = req.body.email;

      // Call Service to save in DB
      this._talkService.createNewTalk(talkEntity, this._responseHandler.getDefaultResponseHandler(res));
    }

}

module.exports = TalkController;
