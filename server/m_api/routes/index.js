const Router = require("koa-router");
const addComment = require("../services/addComment");
const startThread = require("../services/startThread");
const getAllUsers = require("../services/getAllUsers");
const getAllThreads = require("../services/getAllThreads");
const getOneThread = require("../services/getOneThread");
const getAllComments = require("../services/getAllComments");
const router = new Router();

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
    ctx.body = await addComment.createComment(ctx, next);
});
router.post('/start', async (ctx, next) => {
    ctx.response.status = 200;
    ctx.body = await startThread.createOneThread(ctx, next);
});

module.exports = router;
