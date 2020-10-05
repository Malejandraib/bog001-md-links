#!/usr/bin/env node

const mdLinks = require('../src/index');

//Grab provided args

const [, , ...args] = process.argv

const stats = (urlsArray) => {
    var i,
        len = urlsArray.length,
        out = [],
        obj = {};

    for (i = 0; i < len; i++) {
        obj[urlsArray[i]] = 0;
    }
    for (i in obj) {
        out.push(i);
    }
    return out.length; // out.lenght 
}