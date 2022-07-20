const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
    ctx.body = 'Hello World';
});

// app.listen(3000);

function appListen() {
    return new Promise((resolve, reject) => {
        app.listen(3000, function() { resolve(); })
    });
}

appListen().then(console.log(`Server is listening on : 3000`))
    .catch(error => console.log(`Server Error: ${error.message}`));
