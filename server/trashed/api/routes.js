// const Router = require('koa-router')

const router = require('koa-router')();

router.get('/', function* () {
    // Return a list of foos
});

router.get('/:id', function* () {
    // Return a specific foo
});

module.exports = router;
