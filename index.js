const koa = require('koa');
const bodyparser = require('koa-body');
const cors = require('@koa/cors');
const router = require('./router');
const dotenv = require('dotenv').load();
const db = require('./models/db');
const config = require('./config');

const app = new koa();
const port = process.env.PORT || 3001;

app.use(bodyparser()).use(cors()).use(router.routes());

(async () => {
  await db
    .connect(config.DB_LINK, { useNewUrlParser: true })
    .then(() => console.log('Successfully connected to DB'))
    .catch(() => console.log('Error, check your DB connection'));
  app.listen(port, () => console.log(`Server is running on port ${port}`));
})();
