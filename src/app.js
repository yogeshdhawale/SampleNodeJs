/* 
 * 2023
 */

import { parse } from 'path';
import { totalmem } from 'os';
import { readdir } from 'fs';

//var events = require('events');
import events from 'events';
var eventEmitter = new events.EventEmitter();


import { Logger } from "./logger.js";
import testCreateServer from './serverBasic.js';
import testCreateServerExpress from './serverExpress.js';


var log = new Logger();

// var HelloWorld = function(msg) {}


function testLog(msg) {
    //Logger.log(`Testing log: ${msg}`);
    log.log(msg);
}


function testPath() {
    var pobj = parse(import.meta.url);
    console.log('Testing path: ', pobj);

}

function testOS() {
    console.log('Testing os');
    console.log(`Total mem: ${totalmem()}`);

}

function testFS() {
    console.log(`Testing dir list`);
    var files = readdir('./', function (err, files) {
        if (err) console.error('Error', err)
        else console.log(`files in dir are \n: ${files}`)
    });
}
var myEventHandler = function (arg) {
    console.log('Received message in myEventHandler: ', arg);
}

function testEvents() {
    console.log("Testing events")
    eventEmitter.on('Event1', myEventHandler);
    eventEmitter.on('Event1', log.log);
    eventEmitter.emit('Event1', { msg: "Event1 message" });

    eventEmitter.on('Event2', (arg) => {
        console.log('Received message in =>: ', arg);
    });
    eventEmitter.emit('Event2', { msg: "New message" });
}

function helloWorld(msg) {

    testLog(msg);
    //console.log(module);

    testPath();

    testOS();

    testFS();

    testEvents();

    const port = process.env.PORT || 3000;

    //testCreateServer(port);
    testCreateServerExpress(port);
}

helloWorld("hello world text");
