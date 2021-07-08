const EventEmitter = require('event-emitter');

class EmitPool {
  constructor() {
    EventEmitter(this);
  }
}

export default EmitPool;
