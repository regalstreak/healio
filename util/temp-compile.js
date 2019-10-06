const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname,'../src/library/Web3/build');
fs.removeSync(buildPath);

const campaignPath = path.resolve(__dirname, 'contracts', 'factory.sol');
const source = fs.readFileSync(campaignPath, 'utf8');
let input = {
    language: 'Solidity',
    sources: {
        'factory.sol': {
            content: source
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': [ '*' ]
            }
        }
    }
}
let compiled = JSON.parse(solc.compile(JSON.stringify(input))).contracts;
fs.ensureDirSync(buildPath);

for(let file in compiled) {
    console.log(file);
    for(let contract in compiled[file]) {
        fs.outputJsonSync(path.resolve(buildPath, `${contract}.json`), compiled[file][contract])
    }
}