const Koa = require('koa');
const Router = require('koa-router');
const cors = require('@koa/cors');
const parser = require("koa-bodyparser");
const apiRouter = require ("./m_api/routes/index");

const app = new Koa();
const router = new Router();

app.use(cors());
app.use(parser());
app.use(apiRouter.routes());

app.on('error', err => {
    console.log('server error', err)
});

app.use(router.routes()).use(router.allowedMethods());

function appListen() {
    return new Promise((resolve, reject) => {
        app.listen(62000, function() { resolve(); })
    });
}

appListen().then(console.log(`Server is listening on : 62000`))
    .catch(error => console.log(`Server Error: ${error.message}`));
