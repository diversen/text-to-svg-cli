#!/usr/bin/env node

const TextToSVG = require('text-to-svg');
const write = require('write')
const fs = require('fs');
const minimist = require('minimist-mini')

function getConfig(path) {
    const rawdata = fs.readFileSync(path);
    return JSON.parse(rawdata);
}

const opts = [];
opts.boolean = ['help']; 
opts.string = ['config'];

const cli = minimist(opts)

// Check config file is set. 
// If not exit
var config = cli.get('config');
if (!config){
    cli.helpMessage();
    process.exit(1);
}


try {
    const options = getConfig(config);
    const textToSVG = TextToSVG.loadSync(options.font);
    const svg = textToSVG.getSVG(options.text, options.options);
    write.sync(options.save_path, svg, { overwrite: true });
    process.exit(1);
} catch (error) {
    console.log(error);
    process.exit(1);
}
