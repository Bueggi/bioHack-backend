const Router = require('koa-router');
const router = new Router();

router.get('/', (ctx, next) => {
  ctx.body = { hello: 'world' };
});

router.get('/getAllStats', (ctx, next) => {});
router.get('/getSleepStats', (ctx, next) => {});
router.get('/getRelaxStats', (ctx, next) => {});
router.get('/getSocialStats', (ctx, next) => {});
router.get('/getFoodStats', (ctx, next) => {});
router.get('/getSportStats', (ctx, next) => {});
router.get('/getLikedTips', (ctx, next) => {});

router.post('/setRelaxStats', (ctx, next) => {});
router.post('/setSocialStats', (ctx, next) => {});
router.post('/setFoodStats', (ctx, next) => {});
router.post('/setSportStats', (ctx, next) => {});
router.post('/addLikedTips', (ctx, next) => {});
router.post('/setSleepStats', (ctx, next) => {});

module.exports = router;
