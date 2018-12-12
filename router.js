const Router = require('koa-router');
const router = new Router();
const userController = require('./controller/userController');

router.get('/', (ctx, next) => {
  ctx.body = { hello: 'world' };
});

router.post('/login', userController.signUp);
router.post('/signUp', userController.signUp);

router.get('/getAllStats', (ctx, next) => {});
router.get('/getSleepStats', userController.getSleepStats);
router.get('/getRelaxStats', (ctx, next) => {});
router.get('/getSocialStats', (ctx, next) => {});
router.get('/getFoodStats', (ctx, next) => {});
router.get('/getSportStats', (ctx, next) => {});
router.get('/getLikedTips', (ctx, next) => {});

router.post('/setRelaxStats', userController.setRelaxStats);

router.post('/setSocialStats', (ctx, next) => {});
router.post('/setFoodStats', (ctx, next) => {});
router.post('/setSportStats', (ctx, next) => {});
router.post('/addLikedTips', (ctx, next) => {});
router.post('/setSleepStats', userController.setSleepStats);

module.exports = router;
