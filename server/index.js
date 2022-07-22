const Koa = require('koa');
const api = require('./api');
const Router = require('koa-router');
const cors = require('@koa/cors');
const app = new Koa();
const getAllUsers = require("./router/getAllUsers");
const getAllThreads = require("./router/getAllThreads");
const getOneThread = require("./router/getOneThread");
const getAllComments = require("./router/getAllComments");
const startThread = require ("./router/startThread");
const addComment = require ("./router/addComment");
const parser = require("koa-bodyparser");
const koaBody = require('koa-body');

const router = new Router();

app.use(cors());
app.use(parser());

router.get('/users', async (ctx, next) => {
    ctx.response.status = 200;
    ctx.body = await getAllUsers.getAllUsers(ctx, next);
});
router.get('/threads', async (ctx, next) => {
    ctx.response.status = 200;
    ctx.body = await getAllThreads.getAllThreads(ctx, next);
});
router.post('/threads', async (ctx, next) => {
    ctx.response.status = 200;
    ctx.body = await getOneThread.getOneThread(ctx, next);
});
router.post('/comments', async (ctx, next) => {
    ctx.response.status = 200;
    ctx.body = await getAllComments.getAllComments(ctx, next);
});
router.post('/comment', async (ctx, next) => {
    ctx.response.status = 200;
    console.log("comments body first: ", ctx.request.body)
    ctx.body = await addComment.createComment(ctx, next);
});
router.post('/start', async (ctx, next) => {
    ctx.response.status = 200;
    // console.log("comments body: ", ctx.request.body)
    ctx.body = await startThread.createOneThread(ctx, next);
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
