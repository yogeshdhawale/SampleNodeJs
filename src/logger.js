
//var events = require('events');
import events from 'events';


class Logger extends events {
    log(message) {
        console.log('### ', message);
    };
}

const _log = Logger;
export { _log as Logger };

