#!/usr/bin/env node
const chalk = require('chalk');
const mdLinks = require('../src/index');
const stats = require('../src/stats');
const validateStats = require('../src/stats');

const [, , ...argv] = process.argv;

/* if (options.stats) {
  mdLinks(asset, { validate: false }).then((res) => { stats(res)}).catch(console.log);
}

if (options.validate && options.stats) {
  mdLinks(asset, { validate: true }).then((res) => {
    validateStats(res)
  }).catch(console.log)
}


mdLinks(asset, { validate: false }).then((res) => {
    const algo = stats(res)
    console.log(chalk.blue.bold("Unique: " + algo.Unique), chalk.yellow.bold("Total: " + algo.Total))
}).catch(console.log)


mdLinks(asset, { validate: true }).then((res) => {
    const algo = validateStats(res)
    console.log(chalk.blue.bold("Unique: " + algo.Unique), chalk.yellow.bold("Total: " + algo.Total), chalk.red.bold("Broken: " + algo.Broken), chalk.green.bold("Ok: " + algo.Ok))
}).catch(console.log) */