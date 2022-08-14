const express = require('express');

const app = express();
const ExpressError = require(".expressError")

const { convertAndValidateNumsArray, findMode, findMean, findMedian } = require('./helpers');

app.get('/mean', (req, res, next) => {
    if (!req.query.nums) {
        throw new ExpressError('You must pass a query key of nums with a comma-seperated list of numbers.')
    }
    let numAsStrings = req.query.nums.split(',');

    let nums = convertAndValidateNumsArray(numAsStrings);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }

    let result = {
        operation: "mean",
        result: findMean(nums)
    }
    return res.send(result);
});

app.get('/median', (req, res, next) => {
    if (!req.query.nums) {
        throw new ExpressError('You must pass a query key of nums with a comma-seperated list of numbers.')
    }
    let numAsStrings = req.query.nums.split(',');

    let nums = convertAndValidateNumsArray(numAsStrings);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }

    let result = {
        operation: "median",
        result: findMean(nums)
    }

    return res.send(result);
});

app.get('/mode', () => {
    if (!req.query.nums) {
        throw new ExpressError('You must pass a query key of nums with a comma-seperated list of numbers.')
    }
    let numAsStrings = req.query.nums.split(',');

    let nums = convertAndValidateNumsArray(numAsStrings);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }

    let result = {
        operation: "mode",
        result: findMode(nums)
    }

    return res.send(result);
})

app.listen(3000, () => {
    console.log('App running on port 3000');
})