const router = require('express').Router();
const personRouter = require('./personRouter');

router.use("/", personRouter);

module.exports = router;