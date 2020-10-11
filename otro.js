const chalk = require('chalk');

const mdLinks = require('./src/index');
const asset = './assets'
const fs = require('fs');
const path = require('path');
const MarkdownIt = require('markdown-it');
const marked = require('marked');
const md = new MarkdownIt();
const { linkify } = md;
const arrResults = [];

const stats = (urlsArray) => {
    let i
    let len = urlsArray.length;
    let out = [];
    let obj = {};

    for (i = 0; i < len; i++) {
        obj[urlsArray[i].href] = 0;
    }
    for (i in obj) {
        out.push(i);
    }
    return { Unique: out.length, Total: len };
}

const validateStats = (urlsArray) => {
    let i
    let len = urlsArray.length;
    let out = [];
    let obj = {};
    let broken = 0;
    let ok = 0;

    for (i = 0; i < len; i++) {
        obj[urlsArray[i].href] = 0;
        if (urlsArray[i].status == 404) {
            broken += 1
        }
        if (urlsArray[i].Check == 'OK') {
            ok += 1
        }
    }
    for (i in obj) {
        out.push(i);
    }
    return { Unique: out.length, Total: len, Broken: broken, Ok: ok };
}

mdLinks(asset, { validate: false }).then(console.log).catch(console.log)

mdLinks(asset, { validate: true }).then(console.log).catch(console.log)

// si stats existe  --stats
mdLinks(asset, { validate: false }).then((res) => {
    const unitStat = stats(res)
    console.log(unitStat)
    console.log(chalk.black.bold.bgWhite( "STATS"))
    console.table(chalk.blue.bold( "Unique: " + unitStat.Unique), chalk.yellow.bold("Total: "+ unitStat.Total))
}).catch(console.log)



mdLinks(asset, { validate: true }).then((res) => {
    const unitStats  = validateStats(res)
    console.table(unitStats)
    console.log(chalk.black.bold.bgWhite( "VALIDATE + STATS"))
    console.log(chalk.blue.bold( "Unique: " + unitStats.Unique), chalk.yellow.bold("Total: "+ unitStats.Total), chalk.red.bold( "Broken: " + unitStats.Broken), chalk.green.bold("Ok: "+ unitStats.Ok))
}).catch(console.log)

