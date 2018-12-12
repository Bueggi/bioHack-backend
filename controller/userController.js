'use strict';

const User = require('../models/userschema');
const Tip = require('../models/tipSchema');
const Tips = require('../models/tipsSchema');
const Votes = require('../models/voteSchema');

const mocks = require('../mockdata');

exports.getAllStats = () => {
  console.log();
};

const signUp = (ctx, next) => {
  console.log(args);
};

const getStats = async (stat, userID) => {
  const user = await User.findOne({ _id: userID });
  return user[stat];
};

const setStats = async (stat, userID, value) => {
  return await User.findOneAndUpdate({ _id: userID }, { $push: { $: stat } }, { new: true });
};

const setSleepStats = async (ctx, next) => {
  const user = await User.findOneAndUpdate(
    { _id: ctx.request.userID },
    { $push: { sleep: { value: ctx.request.body.value } } },
    { new: true }
  );

  ctx.body = 'hallo';
};

const getSleepStats = (ctx, next, userID) => getStats('sleep', userID);
const getFoodStats = (ctx, next, userID) => getStats('food', userID);
const getRelaxingStats = (ctx, next, userID) => getStats('relaxing', userID);
const getSocialStats = (ctx, next, userID) => getStats('social', userID);
const getFitnessStats = (ctx, next, userID) => getStats('fitness', userID);

// const setSleepStats = (_, __, userID, value) => setStats('sleep', userID, value);
const setFoodStats = (ctx, next, userID) => setStats('food', userID, value);
const setRelaxStats = (ctx, next, userID) => setStats('relaxing', userID, value);
const setSocialStats = (ctx, next, userID) => setStats('social', userID, value);
const setFitnessStats = (ctx, next, userID) => setStats('fitness', userID, value);

module.exports = {
  getSleepStats,
  getFoodStats,
  getRelaxingStats,
  getFitnessStats,
  getSocialStats,
  setSleepStats,
  setFoodStats,
  setRelaxStats,
  setSocialStats,
  setFitnessStats,
  signUp
};
