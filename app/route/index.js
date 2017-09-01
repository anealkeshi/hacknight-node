const express = require('express'),
      router = express.Router();

router.use('/talks', require('../route/talk-route'));

module.exports = router;
