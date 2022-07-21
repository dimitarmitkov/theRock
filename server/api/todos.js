var router = require('koa-router')();

// Create a new route
router.get('/', function* () {
    this.body = 'Home page';
});

// Nest previous API route
router.get('/api/v1', require('./routes').routes());

module.exports = router;
