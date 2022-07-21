const Koa = require('koa');
const api = require('./api');
const Router = require('koa-router');
const cors = require('@koa/cors');
const app = new Koa();
const getAllUsers = require("./router/getAllUsers");
const getAllThreads = require("./router/getAllThreads");

const router = new Router();

app.use(cors());

router.get('/greetings', (ctx, next) => {
    ctx.body = "Hello, World from Router"

});


router.get('/users', async (ctx, next) => {
    ctx.response.status = 200;
    ctx.body = await getAllUsers.getAllUsers(ctx, next);
});
router.get('/threads', async (ctx, next) => {
    ctx.response.status = 200;
    ctx.body = await getAllThreads.getAllThreads(ctx, next);
});




app.on('error', err => {
    console.log('server error', err)
});

app.use(router.routes()).use(router.allowedMethods());

app.use(async ctx => {
    ctx.body = 'Hello World from Koa';
});

app.use(api.routes());


function appListen() {
    return new Promise((resolve, reject) => {
        app.listen(62000, function() { resolve(); })
    });
}

appListen().then(console.log(`Server is listening on : 62000`))
    .catch(error => console.log(`Server Error: ${error.message}`));
