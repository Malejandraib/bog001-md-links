#!/usr/bin/env node
/* eslint-disable no-console */
const chalk = require('chalk');
const program = require('commander');
const CFonts = require('cfonts');
const mdLinks = require('../src/index');
const { stats, validateStats } = require('../src/stats.js');

CFonts.say('md Links!', {
    font: 'block',
    align: 'center',
});

program
    .version('0.0.1')
    .option('-s, --stats', 'returns total and unique stats')
    .option('-v, --validate', ' returns all links in .md files')
    .option('-v -s, --validate --stats', ' returns total, unique, broken and ok')
    .option('-s -v, --stats --validate', 'Returns total, unique, broken and ok ')

program.parse(process.argv);

const pathLinks = process.argv[2];
if (!program.stats && !program.validate) {
    mdLinks(pathLinks, { validate: false }).then(console.log).catch(console.log);
}

if (program.validate && !program.stats) {
    mdLinks(pathLinks, { validate: true }).then(console.log).catch(console.log);
}

if (program.stats && !program.validate) {
    mdLinks(pathLinks, { validate: false }).then((res) => {
        const algo = stats(res)
        console.log(chalk.black.bold("STATS"))
        console.log(chalk.blue.bold("Unique: " + algo.Unique), chalk.yellow.bold("Total: " + algo.Total))
    }).catch(console.log)
}

if (program.validate && program.stats) {
    mdLinks(pathLinks, { validate: true }).then((res) => {
        const algo = validateStats(res)
        console.log(chalk.black.bold.bgWhite("VALIDATE + STATS"))
        console.log(chalk.blue.bold("Unique: " + algo.Unique), chalk.yellow.bold("Total: " + algo.Total), chalk.red.bold("Broken: " + algo.Broken), chalk.green.bold("Ok: " + algo.Ok))
    }).catch(console.log)
}
