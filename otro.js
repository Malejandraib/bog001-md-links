const chalk = require('chalk');

const mdLinks = require('./index');
const asset = './assets'

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

mdLinks(asset, { validate: false }).then((res) => {
    console.log(stats(res))
}).catch(console.log)



mdLinks(asset, { validate: true }).then((res) => {
    console.log(validateStats(res))
}).catch(console.log)