const router = require('express').Router();
const TalkController = require('../controller/talk-controller');
let talkController = new TalkController();

router.get('/', talkController.getAll);
// router.get('/:id', talkController.get);
router.post('/', talkController.create);

module.exports = router;
