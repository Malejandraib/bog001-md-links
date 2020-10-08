#!/usr/bin/env node
const { options } = require('marked');
const mdLinks = require('../index');
const chalk = require('chalk');


const [, , ... argv] = process.argv

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
    return {Unique: out.length, Total: len};
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
        if(urlsArray[i].Check =='OK'){
            ok += 1
        }
    }
    for (i in obj) {
        out.push(i);
    }


    return { Unique: out.length, Total: len, Broken: broken, Ok: ok};
}



if (options.stats){
    mdLinks(asset, { validate: false }).then((res)=>{
        stats(res)
    }).catch(console.log)
}

if (options.validate && options.stats){
    mdLinks(asset, { validate: true }).then((res)=>{
        validateStats(res)
    }).catch(console.log)
}


mdLinks(asset, { validate: false }).then((res) => {
    const algo = stats(res)
    console.log(chalk.blue.bold( "Unique: " + algo.Unique), chalk.yellow.bold("Total: "+ algo.Total))
}).catch(console.log)



mdLinks(asset, { validate: true }).then((res) => {
    const algo = validateStats(res)
    console.log(chalk.blue.bold( "Unique: " + algo.Unique), chalk.yellow.bold("Total: "+ algo.Total), chalk.red.bold( "Broken: " + algo.Broken), chalk.green.bold("Ok: "+ algo.Ok))
}).catch(console.log)