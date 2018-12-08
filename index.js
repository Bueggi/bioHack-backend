const koa = require('koa');
const bodyparser = require('koa-body');
const cors = require('@koa/cors');
const router = require('./router');
const dotenv = require('dotenv').load();

const app = new koa();
const port = process.env.PORT || 3001;

app.use(cors()).use(bodyparser());
app.use(router.routes());

app.listen(port, () => console.log(`Server is running on port ${port}`));
